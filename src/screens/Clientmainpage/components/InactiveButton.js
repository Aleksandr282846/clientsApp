import { StyleSheet, View, Text } from 'react-native';

export default function InactiveButton() {
  return (
    // <View style={styles.buttonChat}>
    //   {/* Звонок */}
    //   <Text>Звонок</Text>
    // </View>

    <View style={styles.buttonChat}>
      <Text style={styles.buttonChatText}>Чат</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonChat: {
    backgroundColor: "white",
    width: 160,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginLeft: 24,
    marginRight: 8,
    borderWidth: 2,
    borderColor: "#FB7360",
    fontWeight: 600,
    color: "#FB7360",
  },
  buttonChatText: {
    color: "#FB7360",
    fontWeight: "600",
    fontSize: 16,
  },
});

