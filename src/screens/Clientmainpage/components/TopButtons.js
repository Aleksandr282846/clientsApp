import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function TopButtons() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.topButtons}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Clientspage')}
        style={styles.topButtons}>
        <Image
          style={styles.buttonbackLeft}
          source={require('../../../../assets/LeftAccessory.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.topButtons}>
        <Image
          style={styles.buttonEdit}
          source={require('../../../../assets/Default).png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonbackLeft: {
    width: 42,
    height: 44,
    marginLeft: 10,
  },
  buttonEdit: {
    width: 42,
    height: 44,
    marginRight: 14,
  },
});
