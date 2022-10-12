import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import TermsOfUse from './pages/TermsOfUse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
};

export default App;
