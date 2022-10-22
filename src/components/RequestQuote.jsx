import { useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';

const Container = styled.div`
  background-color: #cdedff;
  color: #003e5c;
  height: 10%;
`;

const Wrapper = styled.div`
  ${mobile({ flexDirection: 'column' })}
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  ${mobile({ width: 'column' })}
  width: 50%;
`;

const Title = styled.h1`
  cursor: default;
  font-size: 35px;
  margin-top: 0;
`;

const Desc = styled.div`
  ${mobile({ fontSize: '20px', textAlign: 'center' })}
  cursor: default;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Form = styled.form`
  ${mobile({ flexDirection: 'column' })}
  align-items: center;
  display: flex;
  height: 250px;
  justify-content: flex-start;
`;

const LeftForm = styled.div`
  ${mobile({ height: '50%', marginRight: '0' })}
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-right: 20px;
`;

const Input = styled.input`
  ${mobile({ padding: '5px' })}
  font-size: 14px;
  padding: 20px;
  width: 225px;
`;

const RightForm = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const TextArea = styled.textarea`
  ${mobile({ height: '100px', marginTop: '20px', padding: '5px' })}
  font-size: 14px;
  height: 50%;
  padding: 20px;
  resize: none;
  width: 300px;
`;

const Button = styled.button`
  ${mobile({ fontSize: '14px', padding: '5px' })}
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
`;

const Span = styled.span`
  color: green;
`;

const AddressContainer = styled.div`
  ${mobile({ marginBottom: '20px', width: '100%' })}
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const RequestQuote = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>Request a Quote</Title>
          <Desc>Complete the form below and we will get back to you</Desc>
          <Form onSubmit={handleSubmit}>
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
