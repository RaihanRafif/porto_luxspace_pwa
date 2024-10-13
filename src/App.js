import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Client';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';
import Offline from './components/Offline';
import SplashScreen from './pages/SplashScreen';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Cart from './pages/Cart';

function App({ cart }) {
  const [items, setItems] = useState([]);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);


  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setItems(data.products); // Save data to state

        const script = document.createElement('script');
        script.src = '/carousel.js';
        script.async = true; // Use async instead of sync
        document.body.appendChild(script);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchItems(); // Call the async function inside useEffect

    handleOfflineStatus();
    window.addEventListener('online', handleOfflineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOfflineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 1500);
  //   return () => clearTimeout(timer); // Cleanup timer
  // }, []);

  return (
    <>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          {offlineStatus && <Offline />}
          <Header mode="light" cart={cart} />
          <Hero />
          <Browse />
          <Arrived items={items} /> {/* Pass items to Arrived component */}
          <Client />
          <AsideMenu />
          <Footer />
        </>
      )}
    </>
  );
}

export default function AppRoutes() {
  const cachedCart = window.localStorage.getItem("cart")
  const [cart, setCart] = useState([]);

  function handleAddToCart(item) {
    const newCart = [...cart, { id: cart.length + 1, item }];
    setCart(newCart);
    window.localStorage.setItem("cart", JSON.stringify(newCart))
  }

  function handleRemoveCartItem(event, id) {
    const newCart = cart.filter(function (item) {
      return item.id !== id
    })
    setCart(newCart)
    window.localStorage.setItem("cart", JSON.stringify(newCart))
  }

  useEffect(function () {
    console.log("useEffect for localStorage");
    if (cachedCart !== null) {
      setCart(JSON.parse(cachedCart))
    }
  }, [cachedCart])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App cart={cart} />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/details/:id"
          element={<Details handleAddToCart={handleAddToCart} cart={cart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} handleRemoveCartItem={handleRemoveCartItem} />} />
      </Routes>
    </Router>
  );
}
