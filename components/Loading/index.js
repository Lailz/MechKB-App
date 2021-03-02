import { Spinner } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View>
      <Spinner style={styles.container} color="red" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    height: "90%",
  },
});
