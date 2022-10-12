import { Helmet, HelmetProvider } from 'react-helmet-async';

import styled from 'styled-components';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  cursor: default;
`;

const Desc = styled.p`
  margin: 20px 0px;
  cursor: default;
`;

const TermsOfUse = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Terms Of Use - C&P OPTICALS</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="e-commmerce website"
          content="How to configure popular SPA frameworks to maintain quality site metadata."
        />
      </Helmet>
      <Container>
        <Navbar />
        <Title>TERMS OF USE</Title>
        <Desc>
          Welcome to our website. If you continue to browse and use this website
          you are agreeing to comply with and be bound by the following terms
          and conditions of use, which together with our privacy policy govern
          the relationship between you and Eye Squared Optical in relation to
          this website. The terms Company or ‘us’ or ‘we’ or ‘our’ refers to the
          owner of the website. The term ‘you’ refers to the user or viewer of
          our website. The use of this website is subject to the following terms
          of use: The content of the pages of this website is for your general
          information and use only. It is subject to change without notice.
          Neither we nor any third parties provide any warranty or guarantee as
          to the accuracy, timeliness, performance, completeness or suitability
          of the information and materials found or offered on this website for
          any particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude
          liability for any such inaccuracies or errors to the fullest extent
          permitted by law. Your use of any information or materials on this
          website is entirely at your own risk, for which we shall not be
          liable. It shall be your own responsibility to ensure that any
          products, services or information available through this website meet
          your specific requirements. This website contains material which is
          owned by or licensed to us. This material may include, but is not
          limited to, the design, layout, look, appearance and graphics.
          Reproduction is prohibited other than in accordance with the copyright
          notice, which forms part of these terms and conditions. All trade
          marks reproduced in this website which are not the property of, or
          licensed to, the operator are acknowledged on the website.
          Unauthorised use of this website may give rise to a claim for damages
          and/or be a criminal offence. From time to time this website may also
          include links to other websites. These links are provided for your
          convenience to provide further information. They do not signify that
          we endorse the website(s). We have no responsibility for the content
          of the linked website(s). Your use of this website and any dispute
          arising out of such use of the website is subject to the laws and
          jurisdiction of the Republic of South Africa.
        </Desc>
        <Footer />
      </Container>
    </HelmetProvider>
  );
};

export default TermsOfUse;
