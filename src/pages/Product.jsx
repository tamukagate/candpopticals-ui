import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { publicRequest } from '../requestMethods';
import { mobile } from '../Responsive';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RequestQuote from '../components/RequestQuote';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 200;
  cursor: default;
`;
const Desc = styled.p`
  margin: 20px 0px;
  cursor: default;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>C&P OPTICALS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="e-commmerce website"
          content="How to configure popular SPA frameworks to maintain quality site metadata."
        />
      </Helmet>
      <Container>
        <Navbar />
        <Wrapper>
          <ImgContainer>
            <Image src={product.img}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc} </Desc>
          </InfoContainer>
        </Wrapper>
        <RequestQuote />
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export default Product;
