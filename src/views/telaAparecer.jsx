import React from 'react';
import { View, Text } from 'react-native';

const Carrinho = ({ items }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18 }}>Itens no Carrinho:</Text>
      {items.map((item, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ marginRight: 10 }}>{item.name}</Text>
          <Text>R${item.price.toFixed(2)}</Text> {/* Formata o preço com duas casas decimais */}
        </View>
      ))}
    </View>
  );
};

export default Carrinho;