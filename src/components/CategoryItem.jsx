import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  // all the cards will be of same size with flex 1
  flex: 1;
  height: 70vh;
  position: relative;
  margin: 5px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  // object fit
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  /* takes the full width and height of the Container */
  width: 100%;
  height: 100%;
  /* background-color:yellow; */
  /* positoning the Shop noew buton */
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  margin-bottom: 20px;
  color: white;
`;
const Button = styled.button`
  border: 0;
  padding: 10px;
  color: gray;
  cursor: pointer;
`;
const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
