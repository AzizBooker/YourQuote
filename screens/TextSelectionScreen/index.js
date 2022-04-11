import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { ColorPicker,ColorSwatch } from "react-native-ui-lib";
import { useTheme } from "@react-navigation/native";

const TextSelectionScreen = () => {
    const {colors}=useTheme()
  
  return (
    <ScrollView>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.textHeading}>Background Color</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColorPicker
            initialColor={backgroundColor}
            colors={[]}
            value={backgroundColor}
            onDismiss={() => console.log("dismissed")}
            onSubmit={(value) => setBackgroundColor(value)}
            onValueChange={() => console.log("value changed")}
          />
        </View>
      </View>

      <View style={{ marginBottom: 8 }}>
        <Text style={styles.textHeading}>Primary Text Color</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ColorPicker
            initialColor={primaryTextColor}
            colors={[]}
            value={primaryTextColor}
            onDismiss={() => console.log("dismissed")}
            onSubmit={(value) => setPrimaryTextColor(value)}
            onValueChange={() => console.log("value changed")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TextSelectionScreen;
