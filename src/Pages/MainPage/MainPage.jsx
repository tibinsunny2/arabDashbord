import React from "react";
import styled from "styled-components";
import Cards from "../../Components/Cards/Cards";
import BottomCard from "../../Components/Cards/BottomCard";
function MainPage() {
  const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color:lightgray ;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
  `;
  const MainHedding=styled.h2`
    
  `

  return (
    <Container>
      <Wrapper>
        <MainHedding>Choose a plan that's just right for you !</MainHedding>
        <Cards/>
        <BottomCard/>
      </Wrapper>
    </Container>
  );
}

export default MainPage;
