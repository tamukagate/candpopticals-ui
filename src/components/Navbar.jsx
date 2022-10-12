import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { mobile } from '../Responsive';

const Container = styled.div`
  height: 80px;
  ${mobile({ height: 'red' })}
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  cursor: pointer;
  border: 0;
  ${mobile({})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: '2', justifyContent: 'center' })}
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #003e5c;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://i.ibb.co/3f6V4M5/logo.png"></Logo>
          </Link>
        </Left>
        <Center></Center>
        <Right>
          <Language>EN</Language>
          <Button>REQUEST A QUOTE</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
