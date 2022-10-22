import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { mobile } from '../Responsive';
import styled from 'styled-components';
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
  color: #003e5c;
  cursor: default;
  font-weight: bold;
  margin: 20px;
`;

const FilterContainer = styled.div`
  background-color: #cdedff;
  color: #003e5c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Filter = styled.div`
  ${mobile({ display: 'flex', flexDirection: 'column', width: '0px 20px' })}
  cursor: default;
  margin: 20px;
`;

const FilterText = styled.span`
  ${mobile({ marginRight: '0px' })}
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  ${mobile({ margin: '10px 0px' })}
  margin-right: 20px;
  padding: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});

  const location = useLocation();

  const cat = location.pathname.split('/')[2];

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
        <title>{cat.toUpperCase()} FRAMES - C&P OPTICALS</title>
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
          <Title>{cat.toUpperCase()} FRAMES</Title>
          <Filter>
            <FilterText>Filter Products</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>COLOR</Option>
              <Option>white</Option>
              <Option>black</Option>
              <Option>red</Option>
              <Option>blue</Option>
              <Option>yellow</Option>
              <Option>green</Option>
            </Select>
            <Select name="shape" onChange={handleFilters}>
              <Option disabled>SHAPE</Option>
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
              <Option disabled>TYPE</Option>
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
