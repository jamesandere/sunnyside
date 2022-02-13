import styled from "styled-components";

const Container = styled.div`
    height: 70px;
    background-color: #60BFFE;
    display: flex;
    color: white;
    padding: 10px 18px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    /* background-color: black; */
    height: 100%;
`

const Logo = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 22px;
    letter-spacing: 1px;
`

const DetailsContainer = styled.div`
    /* display: flex; */
    flex: 1;
    /* background-color: yellow; */
    
`

const MenuList = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style-type: none;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 1px;
`

const MenuItem = styled.li`
    margin-left: 30px;
    background-color: ${props => props.name === "contacts" && "white"};
    color: ${props => props.name === "contacts" && "black"};
    padding: ${props => props.name === "contacts" && "12px"};
    border-radius: ${props => props.name === "contacts" && "30px"};
`

const Navbar = () => {
  return (
    <Container>
        <LogoContainer>
            <Logo>sunnyside</Logo>
        </LogoContainer>
        <DetailsContainer>
            <MenuList>
                <MenuItem>About</MenuItem>
                <MenuItem>Services</MenuItem>
                <MenuItem>Projects</MenuItem>
                <MenuItem name="contacts">Contacts</MenuItem>
            </MenuList>
        </DetailsContainer>
    </Container>
  )
}

export default Navbar