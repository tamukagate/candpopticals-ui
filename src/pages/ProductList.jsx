import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { mobile } from '../Responsive';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import RequestQuote from '../components/RequestQuote';

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Title = styled.h1`
  margin: 20px;
  cursor: default;
  font-weight: bold;
  color: #003e5c;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #cdedff;
  color: #003e5c;
`;

const Filter = styled.div`
  margin: 20px;
  cursor: default;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Products - C&P Opticals</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="e-commmerce website"
          content="How to configure popular SPA frameworks to maintain quality site metadata."
        />
      </Helmet>
      <Container>
        <Navbar />
        <FilterContainer>
          <Title>{cat} frames</Title>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="shape" onChange={handleFilters}>
              <Option disabled>Shape</Option>
              <Option>oval</Option>
              <Option>rectangle</Option>
              <Option>square</Option>
              <Option>round</Option>
              <Option>browline</Option>
              <Option>aviator</Option>
              <Option>cat eye</Option>
              <Option>geometric</Option>
              <Option>butterfly</Option>
            </Select>
            <Select name="type" onChange={handleFilters}>
              <Option disabled>Type</Option>
              <Option>full frame</Option>
              <Option>semi-rimless</Option>
              <Option>rimless</Option>
              <Option>slim metal frame</Option>
              <Option>thick frame</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} />
        <RequestQuote />
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export default ProductList;