import styled from "styled-components/native";

export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: #fefafb;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthOther = styled.Text`
  color: #ff85a2;
  margin-top: 15px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: #ff85a2;
  border-bottom-color: #ff85a2;
  border-bottom-width: 1px;
`;

export const AuthTitle = styled.Text`
  color: #ff85a2;
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: #ff85a2;
`;

export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: #ff85a2;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
