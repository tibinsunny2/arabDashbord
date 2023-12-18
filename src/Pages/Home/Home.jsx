import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styled from "styled-components";
import MainPage from "../MainPage/MainPage";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from '@mui/icons-material/Add';
function Home() {
  const Component = styled.div`
    width: 100%;
    padding: 5%;
    overflow-y: hidden;
    overflow-x:hidden;
  `;
  const Wrapper = styled.div`
    border: 2px solid black;
    background-color: var(--color-blue);
  `;
  const Cbody = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 16fr 1fr;
    grid-gap: 8px;
  `;
  const Aside = styled.aside`
    display: flex;
    margin-top: 2px;
    align-items: end;
    width: 100%;
    background-color: var(--color-light);
    box-shadow: 5px 5px 5px gray;
    /* margin-left: 20px; */
  `;
  const ThirdColumn = styled.div`
    display: grid;
    grid-template-rows: 9fr 3fr 1fr;
    padding: 2px;
    justify-content: end;
  `;
  const BellContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: lightgray;
    height: fit-content;
    padding: 7px 0px 7px;
    border-radius: 10%;
  `;
  const PlusIcon = styled.div`
  width: fit-content;
  height: fit-content;
  `;
  const MainBody = styled.div`
    width: 100%;
  `;

  return (
    <Component>
      <Wrapper>
        <Navbar />
        <Cbody>
          <Aside>
            <Sidebar />
          </Aside>
          <MainBody>
            <MainPage />
          </MainBody>
          <ThirdColumn>
            <BellContainer>
              <NotificationsIcon
                style={{
                  fontSize: "50px",
                  color: "blue",
                  position: "relative",
                }}
              />
              <div
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  position: "absolute",
                  padding: "5px",
                  fontSize: "17px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                1
              </div>
             
            </BellContainer>
            <div style={{width:"100%",backgroundColor:"lightgray",display:"flex",height:"90%",alignItems:"end"}}></div>
              <PlusIcon><AddIcon style={{fontSize:"50px"}}/></PlusIcon>
          </ThirdColumn>
        </Cbody>
      </Wrapper>
    </Component>
  );
}

export default Home;
