import React from "react";
import { View, Text, SafeAreaView, Pressable, ImageBackground, StyleSheet, Image } from "react-native";

export default props =>{
    return(
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >
                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Login')}>
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
                <View style={style.pagamento}>
                    <Text style={texto.pagamento}>Formas de Pagamento</Text>
                </View>

                <View style={{flexDirection: 'column',}}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            source={require('../image/pix.png')}
                            style={imagem.pix}
                        />
                        <View style={{flexDirection: 'column',}}> 
                            <Text>Pix</Text>
                            <Text>Grátis</Text>
                            <Text>A compensação é feita na hora</Text>
                        </View>
                    </View>
                    
                    <Image
                        source={require('../image/boleto.png')}
                        style={imagem.boleto}
                    />
                    <Image
                        source={require('../image/cartaocredito.png')}
                        style={imagem.cartao}
                    />
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
        pagamento:{
            backgroundColor: 'white',
            borderRadius: 7,
            marginLeft: 15,
            marginRight: 10,
            height: 50,
            width: 400,
            margin: 15,
        }
    }
)

const texto = StyleSheet.create(
    {
        pagamento:{
            color: 'black',
            marginTop: 8,
            marginLeft: 75,
            fontSize: 25,
        }
    }
)

const imagem = StyleSheet.create(
    {
        pix:{
            width: 50,
            height: 50,
            marginLeft: 20,
        },
        boleto:{
            width: 50,
            height: 50,
            marginLeft: 20,
        },
        cartao:{
            width: 50,
            height: 50,
            marginLeft: 20,
        }
    }
)