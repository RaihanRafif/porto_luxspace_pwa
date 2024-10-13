import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Client';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';
import Offline from './components/Offline';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [items, setItems] = useState([]);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine)
  const [isLoading, setIsLoading] = useState(true)

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine)
  }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data); // Menyimpan data ke dalam state

        const script = document.createElement("script")
        script.src = '/carousel.js'
        script.sync = false
        document.body.appendChild(script)
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(); // Memanggil fungsi async di dalam useEffect


    handleOfflineStatus()
    window.addEventListener('online', handleOfflineStatus)
    window.addEventListener('offline', handleOfflineStatus)

    return function () {
      window.addEventListener('online', handleOfflineStatus)
      window.addEventListener('offline', handleOfflineStatus)
    }

  }, [offlineStatus]);


  setTimeout(function () {
    setIsLoading(false)
  }, 1500)

  return (
    <>
      {isLoading ?
        <SplashScreen /> :
        <>
          {offlineStatus && <Offline />}
          <Header />
          <Hero />
          <Browse />
          <Arrived items={items} /> {/* Mengoper data items ke komponen Arrived */}
          <Client />
          <AsideMenu />
          <Footer />
        </>}

    </>
  );
}

export default App;
