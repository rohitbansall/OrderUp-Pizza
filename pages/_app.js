import Layout from "../components/Layout";
import "../styles/globals.css";
import { useState } from "react";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState(0);

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <Layout>
      <Navbar cartCount={cart} />
      <Component {...pageProps} addToCart={addToCart} />
    </Layout>
  );
}

export default MyApp;




