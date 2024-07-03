import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Pressable, TextInput, Alert, Modal , Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox, } from '@rneui/themed';

export default props =>{
    
    const [num, setNum] = useState(0); // Quantidade para o item 1

    const aumentarNum = () => {
        setNum(num + 500);
    };

    // Função para diminuir a quantidade do item 1
    const diminuirNum = () => {
        if (num > 0) {
            setNum(num - 500);
        }
    };

    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);

    // const [checked1, setChecked1] = React.useState(false);
    // const toggleCheckbox1 = () => setChecked1(!checked1);

    // const [checked2, setChecked2] = React.useState(false);
    // const toggleCheckbox2 = () => setChecked2(!checked2);

    const [opcaoEscolhida1, setOpcaoEscolhida1] = useState(null);
    const [opcaoEscolhida2, setOpcaoEscolhida2] = useState(null);
    const [opcaoEscolhida3, setOpcaoEscolhida3] = useState(null);
    const [opcaoEscolhida4, setOpcaoEscolhida4] = useState(null);

   

    //MODAL 1 - MODELO
  const abrirModal1 = () =>{
    setModalVisible1(true);
  }

  const fecharModal1 = () =>{
    setModalVisible1(false);
  }

  const abrirModal2 = () =>{
    setModalVisible2(true);
  }

  const fecharModal2 = () =>{
    setModalVisible2(false);
  }

  const abrirModal3 = () =>{
    setModalVisible3(true);
  }

  const fecharModal3 = () =>{
    setModalVisible3(false);
  }

  const abrirModal4 = () =>{
    setModalVisible4(true);
  }

  const fecharModal4 = () =>{
    setModalVisible4(false);
  }

  const handleOpcaoEscolhida1 = (opcao1) => {
    setOpcaoEscolhida1(opcao1);
        fecharModal1();
  }

  const handleOpcaoEscolhida2 = (opcao2) => {
    setOpcaoEscolhida2(opcao2);
        fecharModal2();
  }

  const handleOpcaoEscolhida3 = (opcao3) => {
    setOpcaoEscolhida3(opcao3);
        fecharModal3();
  }

  const handleOpcaoEscolhida4 = (opcao4) => {
    setOpcaoEscolhida4(opcao4);
        fecharModal4();
  }


    return(
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >

                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Home')}>
                        <Image
                        source={require('../image/voltar.png')}
                        style={topo.voltar}/>
                    </Pressable>
                    <Pressable onPress={()=> props.navigation.navigate('Login')}>
                    <Image
                        source={require('../image/usuario.png')}
                        style={topo.usuario}/>
                    </Pressable>
                </View>

                <Text style={texto.titulo}>Folheto</Text>
                <Image
                    source={require('../image/folheto.png')}
                    style={image.cartao}
                ></Image>

                <View style={{flexDirection: 'colum'}}>

                    <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                    
                    <Text style={texto.modelo}>Tipo de Material</Text>
                            
                    
                        <Pressable
                            onPress={abrirModal1} 
                            style={style.alinhamentoModelo}
                            >
                            {opcaoEscolhida1 && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida1}</Text>
                            </View>)}
                            <View style={image.opcaoGeral}>
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.modelo}
                                />
                            </View>
                        </Pressable>
                        </View>

                        
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible1}
                            onRequestClose={fecharModal1}>

                            <View style={modal.modalBackground}>
                                <View style={modal.caixaMaterial}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida1 === 'Sulfite 90g'}
                                        onPress={() => handleOpcaoEscolhida1('Sulfite 90g')}
                                        />
                                        <Text style={{marginTop: 18,}}>Sulfite 90g</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === 'Couchê 90g '}
                                            onPress={() => handleOpcaoEscolhida1('Couchê 90g ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Couchê 90g </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === 'Couchê 115g '}
                                            onPress={() => handleOpcaoEscolhida1('Couchê 115g ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Couchê 115g </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === 'Couchê 150g '}
                                            onPress={() => handleOpcaoEscolhida1('Couchê 150g ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Couchê 150g </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === 'Kraft 80g '}
                                            onPress={() => handleOpcaoEscolhida1('Kraft 80g ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Kraft 80g</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === 'Reciclado 90g '}
                                            onPress={() => handleOpcaoEscolhida1('Reciclado 90g ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Reciclado 90g </Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        </View>


                        <View style={{flexDirection: 'row'}}>
                            <Text style={texto.formato}>Formato</Text>
                            <Pressable
                            onPress={abrirModal2} 
                            style={style.alinhamentoFormato}
                            >
                            {opcaoEscolhida2 && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida2}</Text>
                            </View>)}
                            <View style={image.opcaoGeral}>
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoFormato}
                                />
                            </View>
                        </Pressable>
                        </View>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible2}
                            onRequestClose={fecharModal2}>

                        <View style={modal.modalBackground}>
                                <View style={modal.caixaFormato}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida2 === '105x148mm '}
                                        onPress={() => handleOpcaoEscolhida2('105x148mm ')}
                                        />
                                        <Text style={{marginTop: 18,}}>105x148mm </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '148x200mm '}
                                            onPress={() => handleOpcaoEscolhida2('148x200mm ')}
                                        />
                                        <Text style={{marginTop: 18,}}>148x200mm </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '200x280mm '}
                                            onPress={() => handleOpcaoEscolhida2('200x280mm ')}
                                        />
                                        <Text style={{marginTop: 18,}}>200x280mm </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '210x297 mm '}
                                            onPress={() => handleOpcaoEscolhida2('210x297 mm ')}
                                        />
                                        <Text style={{marginTop: 18,}}>210x297 mm </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '298x406 mm '}
                                            onPress={() => handleOpcaoEscolhida2('298x406 mm ')}
                                        />
                                        <Text style={{marginTop: 18,}}>298x406 mm </Text>
                                    </View>
                                </View>
                            </View>
                            </Modal>



                        <View style={{flexDirection: 'row'}}>
                        <Text style={texto.dimensao}>Cores</Text>
                        <Pressable
                            onPress={abrirModal3} 
                            style={style.alinhamentoDimensao}
                            >
                            {opcaoEscolhida3 && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida3}</Text>
                            </View>)}
                            <View style={image.opcaoGeral}>
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoDimensao}
                                />
                            </View>
                        </Pressable>
                        </View>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible3}
                            onRequestClose={fecharModal3}>

                        <View style={modal.modalBackground}>
                                <View style={modal.caixaCor}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida3 === '1x0 cor'}
                                        onPress={() => handleOpcaoEscolhida3('1x0 cor')}
                                        />
                                        <Text style={{marginTop: 18,}}>1x0 cor</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '2x0 cores '}
                                            onPress={() => handleOpcaoEscolhida3('2x0 cores ')}
                                        />
                                        <Text style={{marginTop: 18,}}>2x0 cores </Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '4x0 cores (colorido frente)'}
                                            onPress={() => handleOpcaoEscolhida3('4x0 cores (colorido frente)')}
                                        />
                                        <Text style={{marginTop: 18,}}>4x0 cores (colorido frente)</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '4x4 cores (colorido frente e verso)'}
                                            onPress={() => handleOpcaoEscolhida3('4x4 cores (colorido frente e verso)')}
                                        />
                                        <Text style={{marginTop: 18,}}>4x4 cores (colorido frente e verso)</Text>
                                    </View>
                                </View>
                            </View>
                            </Modal>

                        <View style={{flexDirection:'row'}}>
                            <Text style={texto.material}>Acabamento</Text>
                            <Pressable
                            onPress={abrirModal4} 
                            style={style.alinhamentoMaterial}
                            >
                            {opcaoEscolhida4 && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida4}</Text>
                            </View>)}
                            <View style={image.opcaoGeral}>
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoMaterial}
                                />
                            </View>
                        </Pressable>
                        </View>

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible4}
                            onRequestClose={fecharModal4}>

                        <View style={modal.modalBackground}>
                                <View style={modal.caixaAcabamento}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida4 === 'Refilado'}
                                        onPress={() => handleOpcaoEscolhida4('Refilado')}
                                        />
                                        <Text style={{marginTop: 18,}}>Refilado</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida4 === 'Refilado 1 Dobra'}
                                            onPress={() => handleOpcaoEscolhida4('Refilado 1 Dobra')}
                                        />
                                        <Text style={{marginTop: 18,}}>Refilado 1 Dobra</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida4 === 'Refilado 2 Dobras  '}
                                            onPress={() => handleOpcaoEscolhida4('Refilado 2 Dobras  ')}
                                        />
                                        <Text style={{marginTop: 18,}}>Refilado 2 Dobras  </Text>
                                    </View>
                                </View>
                            </View>
                            </Modal>

                </View>

                <View style={{flexDirection: 'row'}}>
                    <Text style={texto.tituloQuanti}>Quantidade:</Text>
                


                <View style={style.alinhamentoQuanti}>

                        <TouchableOpacity
                            onPress={diminuirNum}
                        >
                            <Image
                                source={require('../image/menos2.png')}
                                style={image.menos}

                            />
                        </TouchableOpacity>

                        <Text style={texto.quanti}>{num}</Text>

                        <TouchableOpacity
                            onPress={aumentarNum}
                        >
                            <Image
                                source={require('../image/mais2.png')}
                                style={image.mais}

                            />
                        </TouchableOpacity>
                    </View>
                    </View>
                

                <Text style={texto.valor}>Valor Total: R$</Text>

            <View style={style.caixa1}>
                <Text style={texto.frete}>Prazo de entrega:</Text>
                <Text style={texto.cep}>CEP:</Text>
                <View style={{flexDirection: 'row'}}>

                    <View style={style.alinhamentoCep}>
                    <TextInput
                        // textAlign="center"
                        label="e-mail"
                        placeholder=""
                        keyboardType="numeric"
                        placeholderTextColor="#000"
                            />
                    </View>

                    <Pressable 
                        style={botao.calcular}
                        onPress={() => {Alert.alert('5 dias úteis após a produção')}}       
                    >
                        <Text style={texto.calcular}>Calcular</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Pressable style={style.buttonCar} >
                    <Text style={texto.carrinho}>Carrinho</Text>
                </Pressable>
                <Pressable style={style.buttonFim} onPress={()=> props.navigation.navigate('Pagamento')}>
                    <Text style={texto.finalizar}>Finalizar</Text>
                </Pressable>
            </View>
                
        






            </ImageBackground>
        </View>
    )
}

const topo = StyleSheet.create(
    {
        usuario:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 350,
            marginTop: 12,
        },
        voltar:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 10,
            marginTop: 12,
        },
    }
)

const style = StyleSheet.create(
    {
        
        caixa1:{
            backgroundColor: "#000",
            height: 115,
        },
        caixaCep:{
            backgroundColor: '#fff',
            marginLeft: 80,
            marginBottom: 10,
            width: 120,
            height: 40,
            borderRadius: 5,
        },  
        alinhamentoModelo:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 35,
            width: 280,
            marginTop: 15,
            marginLeft: 20,
        },
        alinhamentoFormato:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 35,
            width: 280,
            marginTop: 15,
            marginLeft: 67,
        },
        alinhamentoDimensao:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 35,
            width: 280,
            marginTop: 15,
            marginLeft: 82,
        },
        alinhamentoMaterial:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 35,
            width: 280,
            marginTop: 15,
            marginLeft: 39,
        },
        alinhamentoQuanti:{
            flexDirection:"row",
            alignItems:"center",
            backgroundColor: "#1E74C0",
            borderRadius: 50,   
            borderColor:"#000",
            borderWidth: 0.8,
            height: 45,
            width: 140,
            marginTop: 20,
            marginLeft: 20,
        },
        buttonCar:{
            width: 150,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25,
            borderWidth: 1.2,
            marginLeft: 65,
        },
        buttonFim:{
            width: 150,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25,
            borderWidth: 1.2,
            marginLeft: 15,
        },
        alinhamentoCep:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 100,
            marginLeft: 90,
       },
        
    }
)

const texto = StyleSheet.create(
    {
        titulo:{
            textAlign: 'center',
            fontSize: 30,
        },
        modelo:{
            marginTop: 20,
            marginLeft: 20,
        },
        formato:{
            marginTop: 20,
            marginLeft: 20,

        },
        dimensao:{
            marginTop: 20,
            marginLeft: 20,

        },
        material:{
            marginTop: 20,
            marginLeft: 20,

        },
        quanti:{
            marginLeft: 50,
            color: '#000',
            fontSize: 20,
            position: 'absolute',
            textAlign: 'center'
        },
        frete:{
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 5,
        },
        cep:{
            color: '#fff',
            marginLeft: 120,
            marginBottom: 5,
            fontSize: 15,
        },
        calcular:{
            textAlign: 'center',
            color: "#fff",
            marginTop: 5,
            fontSize: 20,
        },
        valor:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 25,
            marginTop: 7,
            marginBottom: 7,
        },
        carrinho:{
            color: "#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        finalizar:{
            color: "#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },        
        tituloQuanti:{
            marginTop: 30,
            marginLeft: 100,
            fontSize: 20,
        }
    }
)

const botao = StyleSheet.create(
    {
        calcular:{
            borderRadius: 8,
            // borderColor: '#fff',
            // borderWidth: 0.8,
            backgroundColor: "#1E74C0",
            marginLeft: 40,
            marginBottom: 10,
            width: 150,
            height: 40,
        },
        finalizar:{
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 0.8,
            backgroundColor: "#1E74C0",
            marginLeft: 50,
            marginBottom: 10,
            width: 150,
            height: 40,
            marginTop: 20,
        },
        carrinho:{
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 0.8,
            backgroundColor: "#1E74C0",
            marginLeft: 50,
            marginBottom: 10,
            width: 150,
            height: 40,
            marginTop: 20,
        },
    }
)

const image = StyleSheet.create(
    {
        cartao:{
            marginLeft: 125,
            width: 200,
            height: 120,
            margin: 15,
        },

        opcaoGeral:{
            position: 'absolute',
        },
        modelo:{
            resizeMode: 'contain',
            marginLeft: 244,
        },
        opcaoFormato:{
            resizeMode: 'contain',
            marginLeft: 244,
            },
        opcaoDimensao:{
            resizeMode: 'contain',
            marginLeft: 244,
            },
        opcaoMaterial:{
            resizeMode: 'contain',
            marginLeft: 244,
            },
        opcaoQuanti:{
            marginLeft: 265,
            },
        menos: {
            width: 17,
            height: 2,
            // marginTop: 3,
            marginLeft: 17,
        },
        mais: {
            width: 15,
            height: 15,
            marginLeft: 60,
            // marginTop: 5,
        }
    }
)

const modal = StyleSheet.create(
    {
        alinhamento:{
            borderRadius: 10, 
            marginLeft: 10, 
            marginRight: 10, 
            marginTop: 10, 
            borderColor: '#000', 
            borderWidth: 1.2,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: 20,
            
        },
        modalBackground:{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente para simular o desfoque
            justifyContent: 'center',
            alignItems: 'center',
        },
        texto:{
            marginLeft: 7,
            color: '#000'
        },
        caixaMaterial:{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 250, //altura
            borderColor: '#000',
            borderWidth: 1,
        },
        caixaFormato:{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 250, //altura
            borderColor: '#000',
            borderWidth: 1,
        },
        caixaCor:{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 300, //altura
            borderColor: '#000',
            borderWidth: 1,
        },
        caixaAcabamento:{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 250, //altura
            borderColor: '#000',
            borderWidth: 1,
        },
        checks:{
            flexDirection: 'row',
        }
    }
)
