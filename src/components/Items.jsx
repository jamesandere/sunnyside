import styled from "styled-components";
import bottles from '../assets/images/desktop/image-gallery-milkbottles.jpg';
import orange from '../assets/images/desktop/image-gallery-orange.jpg';
import cone from '../assets/images/desktop/image-gallery-cone.jpg';
import cubes from '../assets/images/desktop/image-gallery-sugarcubes.jpg';

const Container = styled.div`
    height: 60vh;
    width: 100%auto;
    background-color: green;
    display: flex;
`;

const Image = styled.img`
    flex: 1;
`;

const Items = () => {
  return (
    <Container>
        <Image src={bottles} />
        <Image src={orange} />
        <Image src={cone} />
        <Image src={cubes} />
    </Container>
  )
}

export default Items