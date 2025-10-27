import { StyleSheet, Text, View } from 'react-native';

export default function ContainerDescription() {
  return (
    <View style={styles.containerDescription}>
      <Text style={styles.titleDescription}>Биография</Text>
      <Text style={styles.textDescription}>
        Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трехлетней
        дочкой. {'\n\n'}
        По образованию маркетолог, много лет работал на крупные компании. Теперь
        решил погрузиться в мир IT.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDescription: {
    flex: 1,
    marginTop: 32,
    width: 327,
    height: 196,
  },
  titleDescription: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 24,
  },
  textDescription: {
    marginTop: 12,
    marginLeft: 24,
    marginRight: 24,
    fontWeight: 400,
    fontSize: 14,
    color: '#A3A3A3',
    lineHeight: 24,
  },
});
