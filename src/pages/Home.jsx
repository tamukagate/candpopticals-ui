import { Helmet, HelmetProvider } from 'react-helmet-async';

import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Footer from '../components/Footer';
import RequestQuote from '../components/RequestQuote';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home - C&P OPTICALS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="e-commmerce website"
          content="How to configure popular SPA frameworks to maintain quality site metadata."
        />
      </Helmet>
      <div>
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <RequestQuote />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Home;
