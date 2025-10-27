import { StyleSheet, View } from 'react-native';

export default function InactiveButton() {
  return (
    <View style={styles.buttonChat}>Чат</View>
  )
}

const styles = StyleSheet.create({
  buttonChat: {
    backgroundColor: 'white',
    width: 160,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginLeft: 24,
    marginRight: 8,
    borderWidth: 2,
    borderColor: '#FB7360',
    fontWeight: 600,
    color: '#FB7360',
  }
});

