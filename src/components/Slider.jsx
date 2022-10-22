import { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { mobile } from '../Responsive';
import { sliderItems } from '../data';

const Container = styled.div`
  ${mobile({ display: 'none' })}
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const Arrow = styled.div`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
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

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translate(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  align-items: center;
  background-color: #${(props) => props.bg};
  height: 100vh;
  display: flex;
  width: 100vw;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  color: white;
  cursor: default;
  font-size: 70px;
`;

const Desc = styled.p`
  color: white;
  cursor: default;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  margin: 50px 0px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
