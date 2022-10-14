import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: #cdedff;
  color: #003e5c;
  height: 10%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
  ${mobile({ flexDirection: 'column' })}
`;

const FormContainer = styled.div`
  width: 50%;
  ${mobile({ width: 'column' })}
`;

const Title = styled.h1`
  cursor: default;
  font-size: 35px;
  margin-top: 0;
`;

const Desc = styled.div`
  cursor: default;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center', fontSize: '20px' })}
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  height: 250px;
  justify-content: flex-start;
  ${mobile({ flexDirection: 'column' })}
`;

const LeftForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 20px;
  ${mobile({ height: '50%', marginRight: '0' })}
`;

const Input = styled.input`
  font-size: 14px;
  padding: 20px;
  width: 225px;
  ${mobile({ padding: '5px' })}
`;

const RightForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  font-size: 14px;
  height: 50%;
  padding: 20px;
  resize: none;
  width: 300px;
  ${mobile({ height: '100px', marginTop: '20px', padding: '5px' })}
`;

const Button = styled.button`
  background-color: #003e5c;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 500px;
  justify-content: center;
  margin-bottom: 25px;
  padding: 15px;
  ${mobile({ fontSize: '14px', padding: '5px' })}
`;

const AddressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  ${mobile({ marginBottom: '20px', width: '100%' })}
`;

const RequestQuote = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Request a Quote</Title>
          <Desc>Complete the form below and we will get back to you</Desc>
          <Form>
            <LeftForm>
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer></AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default RequestQuote;
