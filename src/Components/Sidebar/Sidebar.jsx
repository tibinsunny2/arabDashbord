import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExtensionIcon from "@mui/icons-material/Extension";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ForumIcon from '@mui/icons-material/Forum';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import dp from '../images/dp.jpg'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Sidebar() {
  const Container = styled.div`
    width: 100%;
    max-height: 80vh;
    min-height: 70vh;
    
  `;
  const Wrapper = styled.div`
    width: 100%;
    background-color: lightgray;
    height: inherit;
    display: grid;
    grid-template-rows:1fr 1fr 1fr;
    flex-direction: column;
    padding: 50px;
  `;
  const DpContainer = styled.div`
  width:200px;
  height: 70%;
  display: flex;
  flex-direction: column;

 align-items: center;
  box-shadow: 5px 5px 5px gray;
  `;
  const ImgContainer = styled.div`
  width: 60%;
  height: 70%;
  background-color: green;
  padding: 2px;
   border-radius: 50%;
  `;
  const Img = styled.img`
  width: 100%;
  height: 100%;
  padding: 2px;
  border-radius: 50%;
  `;
  const NameContainer = styled.div`
  width: 100%;
display: flex;
align-items: center;
justify-content: center;
  `;
  const Details = styled.p`
  margin: 2px;
  display: flex;
  `;
  const Itemcontainer = styled.div``;
  const DropListContainer1 = styled.div`
  
  `;
  const SingleItemContainer = styled.div`
    display: flex;
    padding: 10px;
    margin-top: 5px;
  `;
  const DropListContainer2 = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  top: 100%;
  bottom: 0px;
  `;
  const ItemIcon = styled.div``;
  return (
    <Container>
      <Wrapper>
        <DpContainer>
          <ImgContainer>
            <Img src={dp} alt="image creashed"/>
          </ImgContainer>
          <NameContainer>
            <Details>Tibin sunny </Details>
            <Details><ArrowForwardIosIcon style={{fontSize:"1rem",color:"blue"}}/></Details>
          </NameContainer>
          <Details>tibinsunny2@gmail.com</Details>
        </DpContainer>
        <Itemcontainer>
          <DropListContainer1>
            <SingleItemContainer>
              <ItemIcon>
                <DashboardIcon  style={{color:"#1e81b0"}}/>
              </ItemIcon>
              <Link>Dashbord</Link>
            </SingleItemContainer>
            <SingleItemContainer>
              <ItemIcon>
                <LocalFloristIcon style={{color:"#1e81b0"}} />
              </ItemIcon>
              <Link>Perks</Link>
            </SingleItemContainer>
            <SingleItemContainer>
            <ItemIcon>
                <ForumIcon  style={{color:"#1e81b0"}}/>
            </ItemIcon>
              <Link>
                FaQ
              </Link>
            </SingleItemContainer>
            <SingleItemContainer>
            <ItemIcon>
                    <SupportAgentIcon  style={{color:"#1e81b0"}}/>
                </ItemIcon>
              <Link>
                Support
              </Link>
            </SingleItemContainer>
          </DropListContainer1>
          <DropListContainer2>
          <ItemIcon><LogoutIcon  style={{color:"#1e81b0"}}/></ItemIcon>
            <Link>
              Logout
            </Link>
          </DropListContainer2>
        </Itemcontainer>
      </Wrapper>
    </Container>
  );
}

export default Sidebar;
