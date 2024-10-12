import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Client';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data); // Menyimpan data ke dalam state
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems(); // Memanggil fungsi async di dalam useEffect
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} /> {/* Mengoper data items ke komponen Arrived */}
      <Client />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
