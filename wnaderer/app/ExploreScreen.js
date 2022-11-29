import React from "react";

import { View, Text, Button } from "react-native";

const ExploreScreen = () => {
  return (
    <View>
      <Text>ExploreScreen</Text>
      <Button title="Click" onPress={() => alert("button clicked")} />
    </View>
  );
};

export default ExploreScreen;
