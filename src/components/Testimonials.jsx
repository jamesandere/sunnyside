import styled from "styled-components";
import Emmy from "../assets/images/image-emily.jpg";
import Jennie from "../assets/images/image-jennie.jpg";
import Thomas from "../assets/images/image-thomas.jpg";

const Container = styled.div`
    height: 70vh;
    padding: 100px 80px;
`;

const TestWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const PersonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Title = styled.h1`
    text-transform: uppercase;
    font-family: 'Fraunces', serif;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 1px;
    color: gray;
    text-align: center;
    margin-bottom: 80px;
`;

const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    text-align: center;
`

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const Content = styled.p`
    width: 340px;
    margin-bottom: 50px;
    color: gray;
    font-family: 'Barlow', sans-serif;
    letter-spacing: 1px;
`

const Name = styled.h1`
    margin: 0;
    font-family: 'Fraunces', serif;
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
`;

const Job = styled.h3`
    color: gray;
    font-size: 16px;
    font-family: 'Barlow', sans-serif;
`;

const Testimonials = () => {
  return (
    <Container>
        <TestWrapper>
        <Title>Client Testimonials</Title>
        <PersonWrapper>
        <Person>
            <Image src={Emmy} />
            <Content>We put our trust in Sunnyside and they delivered, 
            making sure our needs were met and deadlines were always hit.
            </Content>
            <Name>Emily R.</Name>
            <Job>Marketing Director</Job>
        </Person>
        <Person>
            <Image src={Thomas} />
            <Content>Sunnyside’s enthusiasm coupled with their keen interest 
            in our brand’s success made it a satisfying and enjoyable experience.
            </Content>
            <Name>Thomas S.</Name>
            <Job>Chief Operating Officer</Job>
        </Person>
        <Person>
            <Image src={Jennie} />
            <Content>Our sales increased over 400% when we worked with Sunnyside. 
            Highly recommended!
            </Content>
            <Name>Jennie F.</Name>
            <Job>Business Owner</Job>
        </Person>
        </PersonWrapper>
        </TestWrapper>
    </Container>
  )
}

export default Testimonials