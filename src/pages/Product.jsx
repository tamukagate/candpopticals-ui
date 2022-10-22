import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { mobile } from '../Responsive';
import { publicRequest } from '../requestMethods';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RequestQuote from '../components/RequestQuote';

const Container = styled.div``;

const Slider = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.426);
  display: flex;
  height: 100vh;
  left: 0;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 999;
`;

const Wrapper = styled.div`
  ${mobile({ flexDirection: 'column', padding: '10px' })}
  display: flex;
  padding: 50px;
`;

const Close = styled.div`
  color: lightgray;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Arrow = styled.div`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
  color: lightgray;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  left: ${(props) => props.direction === 'left' && '10px'};
  margin: auto;
  opacity: 0.5;
  position: absolute;
  right: ${(props) => props.direction === 'right' && '10px'};
  top: 0;
  width: 50px;
  z-index: 2;
`;

const SliderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const SliderImg = styled.div`
  height: 80%;
  width: 80vh;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  width: 33%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

const InfoContainer = styled.div`
  ${mobile({ padding: '10px' })}
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  cursor: default;
  font-weight: 200;
`;

const Desc = styled.p`
  cursor: default;
  margin: 20px 0px;
`;

const Product = () => {
  const [product, setProduct] = useState({});

  const handleClick = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const location = useLocation();

  const id = location.pathname.split('/')[2];

  const [slideNumber, setSlideNumber] = useState(0);

  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: '',
    },
    {
      src: '',
    },
    {
      src: '',
    },
    {
      src: '',
    },
    {
      src: '',
    },
    {
      src: '',
    },
  ];

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('/products/find/' + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{product.title.toUpperCase()} - C&P OPTICALS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="e-commmerce website"
          content="How to configure popular SPA frameworks to maintain quality site metadata."
        />
      </Helmet>
      <Container>
        <Navbar />
        {open && <Slider />}
        <Close onClick={() => setOpen(false)}></Close>
        <Arrow direction="left" onClick={() => handleClick('left')}>
          <ArrowLeftOutlinedIcon />
        </Arrow>
        <SliderWrapper>
          <SliderImg>
            <Image src={photos[slideNumber]} alt="" />
          </SliderImg>
        </SliderWrapper>
        <Arrow direction="right" onClick={() => handleClick('right')}>
          <ArrowRightOutlinedIcon />
        </Arrow>
        <Wrapper>
          <ImgContainer>
            {photos.map((photo, i) => (
              <ImgWrapper>
                <Image onClick={() => handleOpen(i)} src={photo.src} alt="" />
              </ImgWrapper>
            ))}
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
