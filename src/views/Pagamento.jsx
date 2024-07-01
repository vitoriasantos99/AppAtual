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
                    <Pressable onPress={()=> props.navigation.navigate('Compra')}>
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

                    <Pressable onPress={()=> props.navigation.navigate('Pix')}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                source={require('../image/pix.png')}
                                style={imagem.pix}
                            />
                            <View style={{flexDirection: 'column',}}> 
                                <Text style={texto.pix}>Pix</Text>
                                <Text style={texto.valorPix}>Grátis</Text>
                                <Text style={texto.compensa}>A compensação é feita na hora</Text>
                            </View>
                        </View>
                    </Pressable>

                    <View>
                        <Image
                            source={require('../image/linha.png')}
                            style={imagem.linha}
                        />
                    </View>

                    <Pressable onPress={()=> props.navigation.navigate('Boleto')}>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                        source={require('../image/boleto.png')}
                        style={imagem.boleto}
                    />
                    <View style={{flexDirection: 'column'}}> 
                            <Text style={texto.boleto}>Boleto</Text>
                            <Text style={texto.valorBoleto}>R$2,50 pelo custo da emissão</Text>
                            <Text style={texto.prazoBoleto}>Disponivel até 48h após o pagamento</Text>
                        </View>
                    </View> 
                    </Pressable>

                    <View>
                        <Image
                            source={require('../image/linha.png')}
                            style={imagem.linha}
                        />
                    </View>
                    
                    <Pressable onPress={()=> props.navigation.navigate('Cartao')}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                            source={require('../image/cartaocredito.png')}
                            style={imagem.cartao}
                            />
                        <View style={{flexDirection: 'column'}}>
                            <Text style={texto.cartao}>Cartão de Crédito</Text>
                            <Text style={texto.valorCartao}>Grátis</Text>
                            <Text style={texto.prazoCartao}>A compensação é feita na hora</Text>
                        </View>
                        </View>
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
        pagamento:{
            backgroundColor: 'white',
            borderRadius: 7,
            marginLeft: 25,
            marginRight: 10,
            height: 50,
            width: 400,
            margin: 15,
        },
    }
)

const texto = StyleSheet.create(
    {
        pagamento:{
            color: 'black',
            marginTop: 8,
            marginLeft: 75,
            fontSize: 25,
        },
        pix:{
            marginLeft: 30,
            marginTop: 70,
            color: 'black'
        },
        valorPix:{
            marginLeft: 30,
            color: 'green',
        },
        compensa:{
            marginLeft: 29,
            color: 'black'
        },
        boleto:{
            marginLeft: 30,
            marginTop: 50,
            color: 'black'
        },
        valorBoleto:{
            marginLeft: 30,
            color: 'green',
        },
        prazoBoleto:{
            marginLeft: 29,
            color: 'black'
        },
        cartao:{
            marginLeft: 30,
            marginTop: 40,
            color: 'black'
        },
        valorCartao:{
            marginLeft: 30,
            color: 'green',
        },
        prazoCartao:{
            marginLeft: 29,
            color: 'black'
        },


    }
)

const imagem = StyleSheet.create(
    {
        pix:{
            width: 100,
            height: 100,
            marginLeft: 45,
            marginTop: 50,
        },
        boleto:{
            width: 100,
            height: 100,
            marginLeft: 30,
            marginTop: 30,
        },
        cartao:{
            width: 100,
            height: 100,
            marginLeft: 45,
            marginTop: 30,
        },
        setapix:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 10,
            marginTop: 72,
        },
        setaboleto:{
            width: 30,
            height: 30,
            margin: 5,
            marginTop: 72,
        },
        setacartao:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 10,
            marginTop: 72,
        },
        linha:{
            marginLeft: 23,
            marginTop: 30,
            width: 400,
        }
    }
)
