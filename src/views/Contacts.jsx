import React from "react";
import { SafeAreaView, View, Text, ImageBackground, Image, StyleSheet, Pressable } from "react-native";

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
                <Text style={texto.titulo}>CONTATOS</Text>
                    <View style={cartao.fundoemail}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={cartao.logoemail}>
                                <Image
                                    source={require('../image/gmail.png')}
                                    style={imagem.gmail}
                                />
                                <Text style={texto.emailtitulo}>E-mail</Text>
                            </View>
                            <View>
                                <Text style={texto.info}>gfgrafica@gmail.com</Text>
                                <Text style={texto.dias}>Segunda a Sexta</Text>
                                <Text style={texto.horario}>09:00 ás 17:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={cartao.fundowhats}>
                        <View style={{ flexDirection: 'column'}}>
                            <View style={cartao.logowhats}>
                                <Image
                                    source={require('../image/whatsapp.png')}
                                    style={imagem.whats}
                                />
                                <Text style={texto.whatstitulo}>WhatsApp</Text>
                            </View>
                            <View>
                                <Text style={texto.info}>gfgrafica@gmail.com</Text>
                                <Text style={texto.dias}>Segunda a Sexta</Text>
                                <Text style={texto.horario}>09:00 ás 17:00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={cartao.fundotel}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={cartao.logotel}>
                                <Image
                                    source={require('../image/telefone.png')}
                                    style={imagem.tel}
                                />
                                <Text style={texto.teltitulo}>Telefone</Text>
                            </View>
                            <View>
                                <Text style={texto.info}>gfgrafica@gmail.com</Text>
                                <Text style={texto.dias}>Segunda a Sexta</Text>
                                <Text style={texto.horario}>09:00 ás 17:00</Text>
                            </View>
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

const cartao = StyleSheet.create(
    {
        fundoemail:{
            flexDirection: 'row',
            // backgroundColor: '#D4E2F3',
            marginLeft: 62,
            marginTop: 50,
            width: 330,
            height: 220,
            borderRadius: 30,
            borderColor: '#000',
            borderWidth: 1.5,
        },
        fundowhats:{
            flexDirection: 'row',
            // backgroundColor: 'pink',
            marginLeft: 62,
            marginTop: 20,
            width: 330,
            height: 220,
            borderRadius: 30,
            borderColor: '#000',
            borderWidth: 1.5,
        },
        fundotel:{
            flexDirection: 'row',
            // backgroundColor: 'red',
            marginLeft: 62,
            marginTop: 20,
            width: 330,
            height: 220,
            borderRadius: 30,
            borderColor: '#000',
            borderWidth: 1.5,
        },
        logoemail:{
            flexDirection: 'row',
            marginLeft: 100,
            marginTop: 12,
        },
        logowhats:{
            flexDirection: 'row',
            marginLeft: 70,
            marginTop: 12,
        },
        logotel:{
            flexDirection: 'row',
            marginLeft: 80,
            marginTop: 12,
        },
    }
)

const texto = StyleSheet.create(
    {
        titulo:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 20,
        },
        emailtitulo:{
            color: '#fff',
            marginTop: 5,
            marginLeft: 10,
            fontSize: 25,
        },
        whatstitulo:{
            color: '#fff',
            marginTop: 5,
            marginLeft: 10,
            fontSize: 25,
        },
        teltitulo:{
            color: '#fff',
            marginTop: 5,
            marginLeft: 10,
            fontSize: 25,
        },
        info:{
            textAlign: 'center',
            color: "#fff",
            marginLeft: 70,
            fontSize: 20,
            margin: 10,
            marginTop: 15,
        },
        dias:{
            textAlign: 'center',
            color: "#fff",
            marginLeft: 60,
            fontSize: 20,
            margin: 6,
        },
        horario:{
            textAlign: 'center',
            color: "#fff",
            marginLeft: 60,
            fontSize: 20,
            margin: 6,
        }
        
    }
)

const imagem = StyleSheet.create(
    {
        gmail:{
            width: 45,
            height: 45,
        },
        whats:{
            width: 42,
            height: 42,
        },
        tel:{
            width: 41,
            height: 45,
        }
    }
)