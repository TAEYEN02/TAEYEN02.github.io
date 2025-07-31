import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;

`;

const Layout = ({children}) => {
    return(
        <Wrapper>
            <Header/>
            <Main>{children}</Main>
            <Footer/>
        </Wrapper>
    );
};
export default Layout;
