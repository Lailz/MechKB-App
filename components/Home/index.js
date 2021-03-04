import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../store/actions/authActions";
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "./styles";

const Home = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
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
          <ButtonStyled onPress={() => props.navigation.navigate("ShopList")}>
            Press here
          </ButtonStyled>
          {user && (
            <ButtonStyled onPress={() => dispatch(signout())}>
              Sign out
            </ButtonStyled>
          )}
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
