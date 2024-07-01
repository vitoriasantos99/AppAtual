import React, { useState } from "react";
import { View, Text, ImageBackground, Pressable , Image, StyleSheet, TextInput, Alert} from "react-native";

export default props =>{

        const [value, setValue] = useState('');

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

                <View style={cartao.fundo}>
                    <Text style={texto.obrigado}>Obrigado</Text>
                    <Image
                        source={require('../image/compra.png')}
                        style={style.image}
                    />
                    <Text style={texto.compra}>Pela sua compra</Text>
                </View>

                <View>
                    <Text style={texto.servico}>Avalie nosso serviço</Text>
                </View>
                
                <View style={{flexDirection: 'colum'}}>
                    <Text>Nome</Text>
                    <View style={style.alinhamentoNome}>
                        
                            <TextInput
                            keyboardType="email-address"
                            placeholderTextColor="#000"
                            />
                    </View>
                </View>

                <Text>E-mail:</Text>
                <View style={style.alinhamentoEmail}>
                        <TextInput
                        keyboardType="email-address"
                        placeholderTextColor="#000"
                        />
                </View>

                <Text>Comentário:</Text>
                <View style={style.alinhamentoComents}>
                        <TextInput
                        keyboardType="email-address"
                        placeholderTextColor="#000"
                        />
                </View>
                
                


                <Pressable style={style.container}>
                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Obrigado')}}>   
                            <Text style={texto.textoBotao}>Enviar</Text>
                        </Pressable>
                    </View>
                </Pressable>

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

const cartao = StyleSheet.create(
    {
        fundo:{
            backgroundColor: '#1E74C0',
            borderColor: '#000',
            borderWidth: 1.2,
            width: 310,
            height: 210,
            marginLeft: 70,
            marginTop: 30,
        }
    }
)

const texto =  StyleSheet.create(
    {
        obrigado:{
            alignItems: 'center',
            color: '#fff',
            marginLeft: 120,
            marginTop: 15,
        },
        compra:{
            alignItems: 'center',
            color: '#fff',
            marginLeft: 100,
        },
        textoBotao:{
            color:"#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        servico:{
            textAlign: 'center',
            color: "#fff",
            fontSize: 20,
            marginTop: 20,
        },
    }
)

const style = StyleSheet.create(
    {
        image:{
            marginLeft: 90,
        },
        container:{
            paddingLeft:10,
            margin:25
        },
        containerAlinhamento:{
            flexDirection:"row",
            alignItems:"center",
            borderBottomWidth:1,    
            borderColor:"#000",
            color: "#000",
            height: 40,
            width: '80%',
            marginTop:15
        },
        button:{
            width: 200,
            height: 50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            borderWidth: 1.2,
            marginLeft: 160,
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
        },
        alinhamentoNome:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginTop: 30,
            marginLeft: 50,
       },
        alinhamentoEmail:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
            marginTop: 5,
        },
        alinhamentoComents:{
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            marginLeft: 40,
            height: 100, // Altura desejada da caixa de entrada
            width: '80%', // Largura desejada da caixa de entrada
            borderWidth: 1.2,
            fontSize: 18,
            marginTop: 5,
            marginLeft: 50,
        }
    }
)