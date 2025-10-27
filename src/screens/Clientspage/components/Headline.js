import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Headline() {
  return (
    <View>
      <Text style={styles.header}>Клиенты</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 32,
    marginTop: 92,
    marginLeft: 24,
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 16,
  },
});
