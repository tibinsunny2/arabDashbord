import React from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { BottomCardD } from "../../Service/service";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DoneAllIcon from '@mui/icons-material/DoneAll';
function BottomCard() {
  const Component = styled.div`
  width: 100%;
  height: 100%;
  
  `;
  const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  `;
  const Box1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:30px;
  border: 2px solid gray;
  border-radius: 20px;
  box-shadow: 6px 6px 6px gray;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Change to a single column for tablets and below */
  }

  `;
  const Box11 = styled.div``;
  const Box12 = styled.div``;
  const Button1 = styled.button`
  padding: 20px;
  border-radius: 20px;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  `;
  const Headding = styled.h2``;
  const Desc = styled.div``;
  const Button2 = styled.button`
  padding: 20px;
  border-radius: 10px;
  background-color: lightgreen;
  display: flex;
  align-items: center;`;
  const Box2 = styled.div`
   display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap:30px;
  border: 2px solid gray;
  border-radius: 20px;
  box-shadow: 6px 6px 6px gray;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  `;
 const List = styled.ul`
 margin-top: 10px;
 `;
 const ListItems = styled.li`
   display: flex;
   padding: 5px;
 `;
 const Icon = styled.div`
 margin: 20px;
 text-decoration: underline;
 font-weight: 800;
 `;
 const IconDesc = styled.h5``;
  return (
    <Component>
      <Wrapper>
        
        <Box1>
                <Box11>
                <Button1>Free forever<ArrowForwardIcon/></Button1>
          <Headding>Free Starter</Headding>
          <Desc>The quickest and easiest way to try protocols with basic functionalities</Desc>
          <Button2>Get started<ArrowForwardIcon/></Button2>
                </Box11>
                <Box12>
                <Desc>What you'll get :</Desc>
              <List>
                <ListItems>
                  <PersonOutlineOutlinedIcon />
                  <IconDesc> Upto 8 Users</IconDesc>
                </ListItems>
                <ListItems>
                  <CloudDownloadOutlinedIcon />
                  <IconDesc>Upto 3gb Storage</IconDesc>
                </ListItems>
                <ListItems>
                  <MailOutlineOutlinedIcon />
                  <IconDesc>Email support</IconDesc>
                </ListItems>
                <ListItems>
                  <DoneAllIcon />
                  <IconDesc>Basic of Documents Task Flow,Voting ,Accounting,Banking,Notes,investore,Director and team management in cloud</IconDesc>
                </ListItems>
              </List>
             
                </Box12>
              
            </Box1>
            <Box2>
            <Box11>
            <Button1 style={{backgroundColor:"lightblue"}}>Lets connect<ArrowForwardIcon/></Button1>
          <Headding>Enterprice Plan</Headding>
          <Desc>Effortlessly cutomise and fine-tune services as your needs shift . ensuring the perfect tools for success</Desc>
          <Button2  style={{backgroundColor:"lightblue"}}>Connect us<ArrowForwardIcon/></Button2>
                </Box11>
                <Box12>
                  <Desc>What will you Get :</Desc>
                  <List>
                  <ListItems>
                  <PersonOutlineOutlinedIcon />
                  <IconDesc> Upto 75 Users</IconDesc>
                </ListItems>
                <ListItems>
                  <DoneAllIcon />
                  <IconDesc>Basic of Documents Task Flow,Voting ,Accounting,Banking,Notes,investore,Director and team management in cloud</IconDesc>
                </ListItems>
                  </List>
                </Box12>
            </Box2>
      </Wrapper>
    </Component>
  );
}

export default BottomCard;
