import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../Responsive';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 70vh;
  justify-content: center;
  margin: 3px;
  min-width: 346px;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
  ${mobile({ height: '30vh' })}
`;

const Info = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Title = styled.h1`
  color: black;
  cursor: default;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: white;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Link to={`/products/${item.cat}`}>
          <Button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' });
            }}
          >
            VIEW CATALOGUE
          </Button>
        </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
