import React, { useState, useEffect } from "react";
import { Details } from "../../Service/service";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
function Cards() {
  const [Params, setParams] = useState("");
  const Component = styled.div``;
  const Wrapper = styled.div`
    width: 100%;
    display: flex;

  `;
  const Cards = styled.div`
    width: 38%;
    height: fit-content;
    background-color: #b1afaf;
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    border-radius: 20px;
    @media (max-width: 768px) {
    width: 100%; 
  }
  `;
  const CardHeadding = styled.h1`
    padding: 20px;
  `;
  const CardAmountDeletedContainer = styled.div``;
  const DeletedAmount = styled.mark``;
  const Amount = styled.h2``;
  const Hr = styled.hr`
    height: 2px;
    background-color: red;
    /* clip-path: polygon(0 0, 0% 0%, 20% 100%, 0% 100%); */
    position: relative;
    transform: rotate(11deg);
    margin-bottom: -15px;
  `;
  const Hr2 = styled.div`
    width: 80%;
    height: 1px;
    background-color: black;
  `;
  const Button = styled.button`
    padding: 10px;
    margin: 20px 0px 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    background-color: ${Params};
  `;
  const Desc = styled.div`
    margin-top: 10px;
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
        {Details.details.map((item) => {
          return (
            <Cards key={item.id}>
              <CardHeadding>{item.categorie}</CardHeadding>
              <CardAmountDeletedContainer>
                <DeletedAmount>
                  <Hr />
                  {item.deletedoption}
                </DeletedAmount>
              </CardAmountDeletedContainer>
              <Amount>{item.option}</Amount>
              <Button style={{ backgroundColor: `${item.color}` }}>
                Get started <ArrowForwardIcon style={{ fontSize: "40px" }} />
              </Button>
              <Hr2 />
              <Desc>What you'll get :</Desc>
              <List>
                <ListItems>
                  <PersonOutlineOutlinedIcon />
                  <IconDesc>{item.IconDesc1}</IconDesc>
                </ListItems>
                <ListItems>
                  <CloudDownloadOutlinedIcon />
                  <IconDesc>{item.IconDesc2}</IconDesc>
                </ListItems>
                <ListItems>
                  <MailOutlineOutlinedIcon />
                  <IconDesc>{item.IconDesc3}</IconDesc>
                </ListItems>
              </List>
              <Icon>Explore Features</Icon>
            </Cards>
          );
        })}
      </Wrapper>
    </Component>
  );
}

export default Cards;
