import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: #003e5c;
  color: white;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.img`
  border: 1px solid white;
  cursor: default;
  height: 41px;
  width: 40px;
  ${mobile({})};
`;

const Desc = styled.p`
  cursor: default;
  margin: 20px -1px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  align-items: center;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  width: 40px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  cursor: default;
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  text-decoration: underline;
  width: 100%;

  :hover {
    cursor: pointer;
    width: fit-content;
    height: fit-content;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({})}
`;

const ContactItem = styled.div`
  align-items: center;
  cursor: default;
  display: flex;
  margin-bottom: 20px;
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
          <ListItem
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behaviour: 'smooth' });
            }}
          >
            Home
          </ListItem>
          <ListItem>Disclaimer</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Terms of Use</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{ marginRight: '10px' }} />
          Chester House 1st Floor Suite 122, 88 Speke Avenue
          <br />
          Harare, Zimbabwe
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: '10px' }} />
          Michael +263 712 801 926
          <br />
          McAndrew +263 712 802 217
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
