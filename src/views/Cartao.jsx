import React from "react";
import {View, Text, Pressable, ImageBackground, Image, StyleSheet, TextInput, Alert } from "react-native";

export default props =>{
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
                        <Pressable
                            onPress={() => {Alert.alert(
                                '01, 02, 03, 04,')}}
                            style={style.alinhamentoMes}>
                            <Text style={texto.mes}>Mês</Text>
                            <Image
                                source={require('../image/opcao.png')}
                                style={image.opcaoMes}
                            />
                        </Pressable>


                        <Pressable
                            onPress={() => {Alert.alert(
                                '01, 02, 03, 04,')}}
                            style={style.alinhamentoAno}>
                        <Text style={texto.ano}>Ano</Text>
                        <Image
                                source={require('../image/opcao.png')}
                                style={image.opcaoAno}
                            />
                        </Pressable>

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
                    
                <Pressable
                    onPress={() => {Alert.alert('texto')}}
                    style={style.alinhamentoParcela}>
                    <Text style={texto.parcela}>Parcelamento</Text>
                    <Image
                        source={require('../image/opcao.png')}
                        style={image.opcaoPar}
                            />
                </Pressable>

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
            margin: 5,
            color: 'black',
        },
        ano:{
            margin: 5,
            color: 'black',
        },
        parcela:{
            margin: 5,
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
        // cartaoverso:{
        //     width: 279,
        //     height: 160,
        //     marginLeft: 80,
        // },
        opcaoMes:{
            marginLeft: 26,
        },
        opcaoAno:{
            marginLeft: 28,
        },
        opcaoPar:{
            marginLeft: 226,
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
            marginLeft: 48,   
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