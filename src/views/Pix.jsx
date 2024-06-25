import React from "react";
import { View, Text, ImageBackground, StyleSheet, Pressable, Image} from "react-native";

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

                <Text style={texto.pagar}>Pague com Pix</Text>

                <View style={style.fundo}>
                    <Text style={texto.qr}>Ler QR code pelo Aplicativo</Text>
                    <Image
                        source={require('../image/codigo.png')}
                        style={imagem.codigo}
                    />
                </View>

                <View style={{flexDirection: 'column'}}>
                    <View style={style.valor}>
                        <Text style={texto.vcompra}>Valor da Compra:</Text>
                        <Text style={texto.rs}>R$50,00</Text>
                    </View>
                    <View style={style.qrcode}>
                        <Text style={texto.expira}>QrCode expira em:</Text>
                        <Text style={texto.tempo}>15 min</Text>
                    </View>
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
        pagar:{
            textAlign: 'center',
            color: 'black',
            fontSize: 20,
        },
        qr:{
            textAlign: 'center',
            color: '#000',
            marginTop: 8,
        },
        vcompra:{
            // textAlign: 'center',
            color: 'black',
            fontSize: 20,
            marginLeft: 10,
            marginTop: 7,
        },
        rs:{
            // textAlign: 'center',
            color: 'black',
            fontSize: 20,
            marginLeft: 130,
            marginTop: 7,
        },
        expira:{
            // textAlign: 'center',
            color: 'black',
            fontSize: 20,
            marginLeft: 10,
            marginTop: 7,
        },
        tempo:{
            // textAlign: 'center',
            color: 'black',
            fontSize: 20,
            marginLeft: 130,
            marginTop: 7,
        },
    }
)

const imagem = StyleSheet.create(
    {
        codigo:{
            width: 250,
            height: 250,
            marginLeft: 80,
            marginTop: 1,
        }
    }
)

const style = StyleSheet.create(
    {
        fundo:{
            backgroundColor: 'white',
            width: 390,
            height: 270,
            marginLeft: 25,
            marginTop: 10,
        },
        valor:{
            flexDirection: 'row',
            backgroundColor: 'white',
            width: 390,
            height: 45,
            marginLeft: 25,
            marginTop: 15,
            margin: 8,
        },
        qrcode:{
            flexDirection: 'row',
            backgroundColor: 'white',
            width: 390,
            height: 45,
            marginLeft: 25,
            margin: 10,
        }
    }
)
