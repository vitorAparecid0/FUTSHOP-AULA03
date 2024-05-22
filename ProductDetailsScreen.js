import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Button title="Comprar" onPress={() => {}} />
      {/* Adicione outras opções de produto abaixo do botão de compra */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;