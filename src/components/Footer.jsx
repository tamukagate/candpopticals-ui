import styled from 'styled-components';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';

import { mobile } from '../Responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
  background-color: #003e5c;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  cursor: default;
  width: 40px;
  height: 41px;
  border: 1px solid white;
  ${mobile({})};
`;

const Desc = styled.p`
  margin: 20px -1px;
  cursor: default;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  cursor: default;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({})}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: default;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 20px;
  text-decoration: underline;

  :hover {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="https://i.ibb.co/8PJSNh9/logo-eye.png"></Logo>
        <Desc>
          C&P Opticals is a leading importer and wholesale distributor of
          spectacle frames and sunglasses, supplying optometrists throughout
          Zimbabwe and the rest of Africa.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Disclaimer</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Use</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          Chester House 1st Floor Suite 122, 88 Speke Avenue, Harare, Zimbabwe
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +263 712 801 926 | +263 712 802 217
        </ContactItem>
        <ContactItem>
          <MailOutlinedIcon style={{ marginRight: '10px' }} />
          info@candpopticals.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
