import styled from "styled-components";

const FooterWrapper = styled.footer`
    padding : 1rem;
    text-align:center;
    background : ${({theme})=>theme.colors.primary};
    color: white;
`;

const Footer = () => {
    return(
        <FooterWrapper>@ 2025 Taeyeon Kim. All rights reserved,</FooterWrapper>
    );
}
export default Footer;