import React, {useState} from "react";
import { View, Text, Button, Modal, StyleSheet, Pressable, TextInput } from "react-native";
import { CheckBox, } from '@rneui/themed';

import axios from 'axios';

// export default props => {
    
// }
const MeuModal = () => {
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    const [checked1, setChecked1] = React.useState(false);
    const toggleCheckbox1 = () => setChecked1(!checked1);

    const [checked2, setChecked2] = React.useState(false);
    const toggleCheckbox2 = () => setChecked2(!checked2);

    const [opcaoEscolhida, setOpcaoEscolhida] = useState(null);

    // const [opcao1, setOpcao1] = useState(false);
    // const [opcao2, setOpcao2] = useState(false);

//MODAL 1 - MODELO
  const abrirModal1 = () =>{
    setModalVisible1(true);
  }

  const fecharModal1 = () =>{
    setModalVisible1(false);
  }

//MODAL 2 - FORMATO
  const abrirModal2 = () =>{
    setModalVisible2(true);
  }

  const fecharModal2 = () =>{
    setModalVisible2(false);
  }

//MODAL 3 - DIMENSÕES
  const abrirModal3 = () =>{
    setModalVisible3(true);
  }

  const fecharModal3 = () =>{
    setModalVisible3(false);
  }

//MODAL 4 - MATERIAL
  const abrirModal4 = () =>{
    setModalVisible4(true);
  }

  const fecharModal4 = () =>{
    setModalVisible4(false);
  }

  const handleOpcaoEscolhida = (opcao) => {
    setOpcaoEscolhida(opcao);
        fecharModal1();
  }

  
    

  const [cep, setCEP] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [erro, setErro] = useState(null);

  const buscarCEP = async () => {
      try {
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          const data = response.data;
          if (data.erro) {
              setEndereco(null);
              setErro('CEP não encontrado');
          } else {
              setEndereco(data);
              setErro(null);
          }
      } catch (error) {
          console.error('Erro ao buscar CEP:', error);
          setEndereco(null);
          setErro('Erro ao buscar CEP. Verifique sua conexão.');
      }
  };

return (
    

    <View style={style.container}>

      <TextInput
                style={style.input}
                placeholder="Digite o CEP"
                keyboardType="numeric"
                value={cep}
                onChangeText={text => setCEP(text)}
            />
            <Button
                title="Buscar CEP"
                onPress={buscarCEP}
            />

            {endereco && (
                <View style={style.resultado}>
                    <Text style={style.label}>CEP encontrado:</Text>
                    <Text>{endereco.cep}</Text>
                    <Text>{endereco.logradouro}</Text>
                    <Text>{endereco.bairro}</Text>
                    <Text>{endereco.localidade} - {endereco.uf}</Text>
                </View>
            )}

            {erro && (
                <Text style={style.erro}>{erro}</Text>
            )}


        <View style={{margin: 5,}}>
            <Pressable 
                onPress={abrirModal1} 
                style={botao.modelo}>
                <Text>Modelo</Text>
            </Pressable>

            <Pressable 
                onPress={abrirModal2} 
                style={botao.modelo}>
                <Text>Formato</Text>
            </Pressable>

            <Pressable 
                onPress={abrirModal3} 
                style={botao.modelo}>
                <Text>Dimensões</Text>
            </Pressable>

            <Pressable 
                onPress={abrirModal4} 
                style={botao.modelo}>
                <Text>Material</Text>
            </Pressable>
            {/* <Button title='Modelo' onPress={abrirModal1}/> */}
            {/* <Button title='Formato' onPress={abrirModal2}/> */}
            {/* <Button title='Dimensões' onPress={abrirModal3}/> */}
            {/* <Button title='Material' onPress={abrirModal4}/> */}
        </View>

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible1}
          onRequestClose={fecharModal1}
        >

        <View style={style.modalContainer}>
          <View style={style.modalContent}> 
            <Text style={style.modalText}>Escolha uma opção</Text>
            <View style={style.checkboxContainer}>
                <CheckBox
                checked={opcaoEscolhida === 'opcao1'}
                onPress={() => handleOpcaoEscolhida('opcao1')}
                />
                <Text style={style.label}>Opção1</Text>
            </View>
            <View style={style.checkboxContainer}>
            <CheckBox     
                // value={opcaoEscolhida === 'opcao2'} // Marcar se for a opcao2
                // onValueChange={() => handleOpcaoEscolhida('opcao2')}         
                checked={opcaoEscolhida === 'opcao2'}
                onPress={() => handleOpcaoEscolhida('opcao2')}
                // checked={checked2}
                // onPress={toggleCheckbox2}
                />
                <Text style={style.label}>Opção2</Text>
            </View>

            <Button title='Fechar Modal' onPress={fecharModal1}/>
          </View>
        </View>
        </Modal>
        {opcaoEscolhida && (
        <View style={style.opcaoEscolhidaContainer}>
          <Text>Opção escolhida: {opcaoEscolhida}</Text>
        </View>
      )}








        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible2}
            onRequestClose={fecharModal2}
        >

        <View style={style.modalContainer}>
          <View style={style.modalContent}> 
            <Text style={style.modalText}>Formato</Text>
            
            <Button title='Fechar Modal' onPress={fecharModal2}/>
          </View>
        </View>
        </Modal>



        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible3}
            onRequestClose={fecharModal3}
        >

        <View style={style.modalContainer}>
          <View style={style.modalContent}> 
            <Text style={style.modalText}>Dimensões</Text>
            
            <Button title='Fechar Modal' onPress={fecharModal3}/>
          </View>
        </View>
        </Modal>


        
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible4}
            onRequestClose={fecharModal4}
        >

            <View style={style.modalContainer}>
            <View style={style.modalContent}> 
                <Text style={style.modalText}>Material</Text>
                
                <Button title='Fechar Modal' onPress={fecharModal4}/>
            </View>
            </View>
        </Modal>
        
    </View>
)
};

const style = StyleSheet.create (
    {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent:{
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center'
    },
    modalText:{
        fontSize: 18,
        marginBottom: 10,
    },
    checkboxContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label:{
        marginLeft: 8,
        fontSize: 16,
    },
    opcaoEscolhidaContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
      },
      container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '80%',
    },
});

const botao = StyleSheet.create(
    {
        modelo:{
            backgroundColor: 'blue',
            borderRadius: 5,
            alignItems: 'center'
        }
    }
)


export default MeuModal