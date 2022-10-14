import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: white;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
  ${mobile({ height: 'red' })}
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Logo = styled.img`
  border: 0;
  cursor: pointer;
  ${mobile({})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${mobile({ flex: '2', justifyContent: 'center' })}
`;

const Language = styled.span`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  ${mobile({ display: 'none' })}
`;

const Button = styled.button`
  background-color: #003e5c;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-left: 25px;
  padding: 10px 15px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ behaviour: 'smooth', top: 0, left: 0 });
            }}
          >
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
