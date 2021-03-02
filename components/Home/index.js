import React from "react";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "./styles";

const Home = () => {
  return (
    <HomeBackground
      style={{ flex: 1, width: "100%", height: "100%" }}
      source={{ uri: "https://wallpaperaccess.com/full/1087264.png" }}
    >
      <OverLayContainer>
        <TopStyling>
          <Title>Vader's Shop</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => alert("Take me away")}>
            Press here
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
