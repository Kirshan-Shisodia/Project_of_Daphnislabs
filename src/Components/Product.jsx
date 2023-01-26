import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  }
`;

const Image = styled.img`
  height: 75%;
`;

const Des = styled.p`

`;


const Product = ({ item }) => {
  return (
    <Container>
        <Image src={item.image} />
        {/* <Des>
            {item.description}
        </Des> */}
    </Container>
  )
}

export default Product;