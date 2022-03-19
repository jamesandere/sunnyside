import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    height: 50vh;
    background-color: #91D3C5;
    color: hsl(168, 34%, 41%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    text-align: center;
    width: 400px;
    /* background-color: cornsilk; */
`;

const Title = styled.h1`
    text-align: center;
    /* margin-left: 40px; */  
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: 1px;
    margin-bottom: 0;
`;

const Links = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
`

const Link = styled.li`
    list-style-type: none;
    margin-right: 40px;
    font-size: 16px;
    /* padding: 10px; */
    font-family: 'Barlow', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
`

const LogoContainer = styled.div`
    margin-top: 40px;
`

const Login = styled.img``;

const Footer = () => {
  return (
    <Container>
        <Wrapper>
        <Title>sunnyside</Title>
        <Links>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Projects</Link>
        </Links>
        <LogoContainer>
            <Facebook style={{marginRight: "16px", cursor: "pointer"}} />
            <Instagram style={{marginRight: "16px", cursor: "pointer"}} />
            <Twitter style={{marginRight: "16px", cursor: "pointer"}} />
            <Pinterest style={{marginRight: "16px", cursor: "pointer"}} />
        </LogoContainer>
        </Wrapper>
    </Container>
  )
}

export default Footer