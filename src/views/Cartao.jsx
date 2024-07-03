import React, {useState} from "react";
import {View, Text, Pressable, ImageBackground, Image, StyleSheet, TextInput, Alert, Modal } from "react-native";
import { CheckBox, } from '@rneui/themed';

export default props =>{
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    const [opcaoEscolhida1, setOpcaoEscolhida1] = useState(null);
    const [opcaoEscolhida2, setOpcaoEscolhida2] = useState(null);
    const [opcaoEscolhida3, setOpcaoEscolhida3] = useState(null);


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
    return(
        <View style={{flex: 1}}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >
                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Pagamento')}>
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

                <Text style={texto.titulo}>Cartão de Crédito</Text>

                <View style={{flexDirection: 'column'}}>
                    <Image
                        source={require("../image/credito.png")}
                        style={image.cartaofrente}
                    />
                    {/* <Image
                        source={require("../image/Cartaoverso.png")}
                        style={image.cartaoverso}
                    /> */}
                </View>

                <View style={style.alinhamentoNumero}>
                <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="numeric"
                        placeholder="Número do Cartão"
                        placeholderTextColor="#000"
                        />
                </View>


                <View style={{flexDirection: 'row'}}>
                        <Text style={texto.mes}>Mês</Text>
                            <Pressable
                            onPress={abrirModal1} 
                            style={style.alinhamentoFormato}
                            >
                            {opcaoEscolhida1 && (
                            <View>
                                <Text style={modal.texto}>{opcaoEscolhida1}</Text>
                            </View>)}
                            <View style={image.opcaoGeral}>
                                <Image
                                    source={require('../image/opcao.png')}
                                    style={image.opcaoMes}
                                />
                            </View>
                        </Pressable>
                

                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible1}
                            onRequestClose={fecharModal1}>

                            <View style={modal.modalBackground}>
                                <View style={modal.caixaMes}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida1 === '01'}
                                        onPress={() => handleOpcaoEscolhida1('01')}
                                        />
                                        <Text style={{marginTop: 18,}}>01</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '02'}
                                            onPress={() => handleOpcaoEscolhida1('02')}
                                        />
                                        <Text style={{marginTop: 18,}}>02</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '03'}
                                            onPress={() => handleOpcaoEscolhida1('03')}
                                        />
                                        <Text style={{marginTop: 18,}}>03</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '04'}
                                            onPress={() => handleOpcaoEscolhida1('04')}
                                        />
                                        <Text style={{marginTop: 18,}}>04</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '05'}
                                            onPress={() => handleOpcaoEscolhida1('05')}
                                        />
                                        <Text style={{marginTop: 18,}}>05</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '06'}
                                            onPress={() => handleOpcaoEscolhida1('06')}
                                        />
                                        <Text style={{marginTop: 18,}}>06</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '07'}
                                            onPress={() => handleOpcaoEscolhida1('07')}
                                        />
                                        <Text style={{marginTop: 18,}}>07</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '08'}
                                            onPress={() => handleOpcaoEscolhida1('08')}
                                        />
                                        <Text style={{marginTop: 18,}}>08</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '09'}
                                            onPress={() => handleOpcaoEscolhida1('09')}
                                        />
                                        <Text style={{marginTop: 18,}}>09</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '10'}
                                            onPress={() => handleOpcaoEscolhida1('10')}
                                        />
                                        <Text style={{marginTop: 18,}}>10</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '11'}
                                            onPress={() => handleOpcaoEscolhida1('11')}
                                        />
                                        <Text style={{marginTop: 18,}}>11</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida1 === '12'}
                                            onPress={() => handleOpcaoEscolhida1('12')}
                                        />
                                        <Text style={{marginTop: 18,}}>12</Text>
                                    </View>
                                </View>
                            </View>
                    </Modal>





                        <Text style={texto.ano}>Ano</Text>
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
                                    style={image.opcaoMes}
                                />
                            </View>
                        </Pressable>
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible2}
                            onRequestClose={fecharModal2}>

                            <View style={modal.modalBackground}>
                                <View style={modal.caixaAno}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida2 === '2025'}
                                        onPress={() => handleOpcaoEscolhida2('2025')}
                                        />
                                        <Text style={{marginTop: 18,}}>2025</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '2026'}
                                            onPress={() => handleOpcaoEscolhida2('2026')}
                                        />
                                        <Text style={{marginTop: 18,}}>2026</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '2027'}
                                            onPress={() => handleOpcaoEscolhida2('2027')}
                                        />
                                        <Text style={{marginTop: 18,}}>2027</Text>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '2028'}
                                            onPress={() => handleOpcaoEscolhida2('2028')}
                                        />
                                        <Text style={{marginTop: 18,}}>2028</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida2 === '2029'}
                                            onPress={() => handleOpcaoEscolhida2('2029')}
                                        />
                                        <Text style={{marginTop: 18,}}>2029</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Modal>


                    <View style={style.alinhamentoCvv}>
                    <TextInput
                            // onChangeText={}
                            // value={usuario}
                            textAlign="left"
                            label="Email"
                            keyboardType="numeric"
                            placeholder="CVV"
                            placeholderTextColor="#000"
                            />
                    </View>
                </View>


                <View style={style.alinhamentoTitular}>
                <TextInput
                        // onChangeText={}
                        // value={usuario}
                        textAlign="left"
                        // label="Email"
                        keyboardType="email-address"
                        placeholder="Nome do Títular"
                        placeholderTextColor="#000"
                        />
                </View>

                            <Text style={texto.parcela}>Parcelamento</Text>
                                <Pressable
                                onPress={abrirModal3} 
                                style={style.alinhamentoParcela}
                                >
                                {opcaoEscolhida3 && (
                                <View>
                                    <Text style={modal.texto}>{opcaoEscolhida3}</Text>
                                </View>)}
                                <View style={image.opcaoGeral}>
                                    <Image
                                        source={require('../image/opcao.png')}
                                        style={image.opcaoPar}
                                    />
                                </View>
                            </Pressable>

                            <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible3}
                            onRequestClose={fecharModal3}>

                            <View style={modal.modalBackground}>
                                <View style={modal.caixaAno}>
                                    <View style={modal.checks}>
                                        <CheckBox
                                        checked={opcaoEscolhida3 === '1X'}
                                        onPress={() => handleOpcaoEscolhida3('1X')}
                                        />
                                        <Text style={{marginTop: 18,}}>1X</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '2X'}
                                            onPress={() => handleOpcaoEscolhida3('2X')}
                                        />
                                        <Text style={{marginTop: 18,}}>2X</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '3X'}
                                            onPress={() => handleOpcaoEscolhida3('3X')}
                                        />
                                        <Text style={{marginTop: 18,}}>3X</Text>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '4X'}
                                            onPress={() => handleOpcaoEscolhida3('4X')}
                                        />
                                        <Text style={{marginTop: 18,}}>4X</Text>
                                    </View>
                                    <View style={modal.checks}>
                                        <CheckBox
                                            checked={opcaoEscolhida3 === '5X'}
                                            onPress={() => handleOpcaoEscolhida3('5X')}
                                        />
                                        <Text style={{marginTop: 18,}}>5X</Text>
                                    </View>
                                </View>
                                </View>
                            </View>
                        </Modal>

                        <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={()=> props.navigation.navigate('Avaliar')}>   
                            <Text style={texto.textoBotao}>Pagar</Text>
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

const texto = StyleSheet.create(
    {
        titulo:{
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
            marginTop: 5,
        },
        textoBotao:{
            color:"#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        mes:{
            color: 'black',
            marginTop: 20,
            marginLeft: 40,
        },
        ano:{
            marginLeft: 15,
            color: 'black',
            marginTop: 20,
        },
        parcela:{
            marginLeft: 45,
            marginTop: 10,
            color: 'black',
        }
    }
)

const image = StyleSheet.create(
    {
        cartaofrente:{
            width: 350,
            height: 255,
            margin: 5,
            marginLeft: 50,
            marginTop: 30,
        },
        opcaoGeral:{
            position: 'absolute',
        },
        opcaoMes:{
            resizeMode: 'contain',
            marginLeft: 45,
        },
        opcaoAno:{
            resizeMode: 'contain',
            marginLeft: 28,
        },
        opcaoPar:{
            resizeMode: 'contain',
            marginLeft: 324,
        },
    }
)

const style = StyleSheet.create(
    {
        alinhamentoNumero:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 360,
            marginTop: 30,
            marginLeft: 40,
        },
        alinhamentoMes:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 100,
            marginTop:15,
            marginLeft: 40,
        },
        alinhamentoAno:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 100,
            marginTop:15,
            marginLeft: 10,
        },
        alinhamentoCvv:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 100,
            marginTop:15,
            marginLeft: 10,   
        },
        alinhamentoTitular:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 360,
            marginTop:15,
            marginLeft: 40,
        },
        alinhamentoParcela:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 360,
            marginTop:15,
            marginLeft: 40,
        },
        alinhamentoFormato:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 80,
            marginTop: 15,
            marginLeft: 10,
        },
        alinhamentoPar:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: 80,
            marginTop: 15,
            marginLeft: 10,
        },
        button:{
            width:100,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius: 10,
            marginTop:25,
            borderWidth: 1.2,
            marginLeft: 170,
        },
        textBtn:{
            color: "#000",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
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
        caixaMes:{
            backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 700, //altura
            borderColor: '#000',
            borderWidth: 1,
        },
        caixaAno:{
            backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
            borderRadius: 10,
            width: 350, //largura
            height: 200, //altura
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