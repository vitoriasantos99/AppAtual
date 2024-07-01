import React from 'react';
import { View, Text, Button, Pressable } from 'react-native';

const TelaAdd = (props) => {
  const { product, onAddToCart } = props;

  return (
    <View>
      <View style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}>
        <Text>{product.name}</Text>
        <Text>{product.price}</Text>
        <Button title="Adicionar ao Carrinho" onPress={() => onAddToCart(product)} />
      </View>
      {/* <Pressable
      onPress={() => props.navigation.navigate('telaCarrinho')}
      >
      <Text>Ir para outra tela </Text>
      </Pressable> */}
  </View>
  );
};

export default TelaAdd;