import React from "react";
import "./navbar.css";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/incon2.png";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function Navbar() {
  const Component = styled.div`
    width: 100%;
    height: auto;
  `;
  const Wrapper = styled.div`
    width: inherit;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 55%;
  
  `;
  const FirstBox = styled.div`
    width: 360px;
    height: 8vh;
  `;
  const SecondBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  `;
  const FirstBox1 = styled.div``;
  const FirstBox2 = styled.div``;
  const SecondBox1 = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    align-items: center;
    background-color: white;
    margin-left: 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
  `;
  const secondBox2 = styled.div``;
  const IconContainer = styled.div`
    width: 100%;
  `;
  const Icon = styled.img`
    width: 100%;
    height: 8.3vh;
    background-color: lightgray;
    clip-path: polygon(0 0, 100% 0%, 70% 100%, 0% 100%);
  `;
  const SecondIcon = styled.img`
    width: 40px;
  `;
  const SecondDecs = styled.p`
    font-weight: 800;
    font-size: 15px;
  `;
  const IconDown = styled.div`
    margin-left: 20px;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 5px 5px 5px gray;
  `;
  return (
    <div class="Component">
      <Component>
        <Wrapper>
          <FirstBox>
            <FirstBox1>
              <IconContainer>
                <Icon src={Icon2} alt="image crashed" />
              </IconContainer>
            </FirstBox1>
          </FirstBox>
          <SecondBox>
            <SecondBox1>
              <IconContainer>
                <SecondIcon src={Icon1} />
              </IconContainer>
              <SecondDecs>XYZ private limited</SecondDecs>
            </SecondBox1>
            <secondBox2>
              <IconDown>
                <KeyboardArrowDownIcon
                  style={{ fontSize: "60px", color: "gray" }}
                />
              </IconDown>
            </secondBox2>
          </SecondBox>
        </Wrapper>
      </Component>
    </div>
  );
}

export default Navbar;
