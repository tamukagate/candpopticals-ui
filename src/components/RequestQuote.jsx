import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  height: 10%;
  background-color: #cdedff;
  color: #003e5c;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: 35px;
  margin-top: 0;
  cursor: default;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  cursor: default;
  ${mobile({ textAlign: 'center', fontSize: '20px' })}
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LeftForm = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const Input = styled.input`
  width: 225px;
  font-size: 14px;
  padding: 20px;
`;

const RightForm = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 50%;
  font-size: 14px;
  padding: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #003e5c;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  font-weight: 500px;
`;

const AddressContainer = styled.div`
  width: 50%;
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
`;

const Text = styled.span``;

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
