import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: white;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  ${mobile({ padding: '10px 0px' })}
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

const Left = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

const Logo = styled.img`
  ${mobile({})}
  border: 0;
  cursor: default;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  ${mobile({ flex: '2', justifyContent: 'center' })}
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Button = styled.button`
  ${mobile({ display: 'none' })}
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
          <Logo src="https://i.ibb.co/3f6V4M5/logo.png"></Logo>
        </Left>
        <Center></Center>
        <Right>
          <Button>REQUEST A QUOTE</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
