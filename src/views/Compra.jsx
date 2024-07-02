import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Pressable, TextInput, Alert, Modal , Button, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox, } from '@rneui/themed';

export default props =>{
    
    const [modalVisible1, setModalVisible1] = useState(false);

    const [checked1, setChecked1] = React.useState(false);
    const toggleCheckbox1 = () => setChecked1(!checked1);

    const [checked2, setChecked2] = React.useState(false);
    const toggleCheckbox2 = () => setChecked2(!checked2);

    const [opcaoEscolhida, setOpcaoEscolhida] = useState(null);

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

    //MODAL 1 - MODELO
  const abrirModal1 = () =>{
    setModalVisible1(true);
  }

  const fecharModal1 = () =>{
    setModalVisible1(false);
  }

  const handleOpcaoEscolhida = (opcao) => {
    setOpcaoEscolhida(opcao);
        fecharModal1();
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

                <Text style={texto.titulo}>Cartão de Visita</Text>
                <Image
                    source={require('../image/cartao.png')}
                    style={image.cartao}
                ></Image>

                <View style={{flexDirection: 'colum'}}>

                    <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                    
                    <Text style={texto.modelo}>Modelo</Text>
                            
                    
                        <Pressable
                            onPress={abrirModal1} 
                            style={style.alinhamentoModelo}
                            >
                            {opcaoEscolhida && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida}</Text>
                            </View>)}
                            <View style={image.opcaoModelo}>
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
                                <View style={modal.caixaGeral}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida === 'Cartão de Visita simples'}
                                        onPress={() => handleOpcaoEscolhida('Cartão de Visita simples')}
                                        />
                                        <Text style={{marginTop: 18,}}>Cartão de Visita simples</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida === 'Cartão de Visita Metalizado'}
                                            onPress={() => handleOpcaoEscolhida('Cartão de Visita Metalizado')}
                                        />
                                        <Text style={{marginTop: 18,}}>Cartão de Visita Metalizado</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida === 'Cartão de Visita Premium'}
                                            onPress={() => handleOpcaoEscolhida('Cartão de Visita Premium')}
                                        />
                                        <Text style={{marginTop: 18,}}>Cartão de Visita Premium</Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                        </View>


                        <View style={{flexDirection: 'row'}}>
                            <Text style={texto.formato}>Formato</Text>
                            <Pressable
                                onPress={() => {Alert.alert(
                                    '01, 02, 03, 04,')}}
                                style={style.alinhamentoFormato}>
                                
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoFormato}
                                />
                            </Pressable>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                        <Text style={texto.dimensao}>Dimensões</Text>
                            <Pressable
                                onPress={() => {Alert.alert(
                                    '01, 02, 03, 04,')}}
                                style={style.alinhamentoDimensao}>
                                
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoDimensao}
                                />
                            </Pressable>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={texto.material}>Material</Text>
                            <Pressable
                                onPress={() => {Alert.alert(
                                    '01, 02, 03, 04,')}}
                                style={style.alinhamentoMaterial}>
                                
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoMaterial}
                                />
                            </Pressable>
                        </View>

                        {/* <View style={{flexDirection:'row'}}>
                            <Text style={texto.quanti}>Quantidade</Text>
                            <Pressable
                                onPress={() => {Alert.alert(
                                    '01, 02, 03, 04,')}}
                                style={style.alinhamentoQuanti}>
                                
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoQuanti}
                                />
                            </Pressable>
                        </View> */}

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
                        onPress={() => {Alert.alert('5 dias úteus após a produção')}}       
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
            width: 300,
            marginTop:15,
            marginLeft: 43,
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
            width: 300,
            marginTop:15,
            marginLeft: 38,
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
            width: 300,
            marginTop:15,
            marginLeft: 20,
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
            width: 300,
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
        opcaoModelo:{
            position: 'absolute',
        },
        modelo:{
            resizeMode: 'contain',
            marginLeft: 265,
        },
        opcaoFormato:{
            marginLeft: 265,
            },
        opcaoDimensao:{
            marginLeft: 265,
            },
        opcaoMaterial:{
            marginLeft: 265,
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
        caixaGeral:{
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
