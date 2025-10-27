import { StyleSheet, Text, View, Image } from 'react-native';

export default function ButtonShowMore() {
  return (
    <View style={styles.buttonShowMoreContainer}>
      <View style={styles.buttonShowMore}>
        <Text style={styles.buttonShowMoreText}>Показать больше</Text>
        <Image
          style={styles.arrowShowMore}
          source={require('../../../../assets/Navigation.png')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonShowMoreContainer: {
    alignItems: 'center',
    justifyContent: '',
  },
  buttonShowMore: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginTop: 40,
    fontWeight: 600,
    borderWidth: 2,
    borderColor: '#FB7360',
    width: 320,
    height: 57,
  },
  arrowShowMore: {
    width: 24,
    height: 24,
    marginLeft: 4,
  },
  buttonShowMoreText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FB7360',
  },
});
