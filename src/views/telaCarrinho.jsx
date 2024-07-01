import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button} from 'react-native';
import TelaAdd from './telaAdd';

const TelaCarrinho = () => {
  // const products = [
  //   { id: 1, name: 'Produto 1', price: 10.99 },
  //   { id: 2, name: 'Produto 2', price: 15.99 },
  //   { id: 3, name: 'Produto 3', price: 20.99 },
  // ];

  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = () =>{
    setModalVisible(true);
  }

  const fecharModal = () =>{
    setModalVisible(false);
  }


  // const addToCart = (product) => {
  //   // Lógica para adicionar ao carrinho
  //   console.log('Adicionar ao carrinho:', product);
  // };

  return (
    <View>
      {/* <View>
        {products.map((product) => (
          <TelaAdd key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </View> */}

      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Button
          title='Abrir modal'
          onPress={abrirModal}
        />
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={fecharModal}
        />
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%'}}>
            <Text style={{fontSize: 18, marginBottom: 10}}>Conteúdo do modal</Text>
            <Button
              title='Fechar Modal'
              onPress={fecharModal}
            />
          </View>
        </View>

      </View>
    </View>
    


  );
};

export default TelaCarrinho;