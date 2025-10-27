import { StyleSheet, View, Text } from 'react-native';

export default function CallButton() {
  return (
    // <View style={styles.buttonCall}>
    //     {/* Звонок */}
    //   <Text>Звонок</Text>
    // </View>

    <View style={styles.buttonCall}>
      <Text style={styles.buttonCallText}>Звонок</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonCall: {
    backgroundColor: "#FB7360",
    width: 160,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 16,
    marginRight: 24,
    fontWeight: 600,
  },
  buttonCallText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

