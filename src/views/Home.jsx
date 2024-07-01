import React from "react";
import { useState } from "react";
import { SafeAreaView, 
    Text, 
    Image, 
    StyleSheet, 
    View, 
    TextInput, 
    Button, 
    Pressable, 
    Alert, 
    ImageBackground,
    ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { ListItem, Avatar, ThemeProvider, Card } from '@rneui/themed';



export default props => {
    
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={fundo.papelFundo}>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../image/logo.png')}
                        style={topo.logo} />

                    <TextInput
                        style={topo.pesquisa}
                        onChangeText={setSearch}
                        value={search}
                        placeholder="Pesquisar..."
                        placeholderTextColor="#000"
                        keyboardType="email-address"
                        cursorColor="#000"
                    />
                    <Pressable onPress={() => props.navigation.navigate('Login')}>
                        <Image
                            source={require('../image/usuario.png')}
                            style={topo.usuario} />
                    </Pressable>

                    <Pressable onPress={() => props.navigation.navigate('Carrinho')}>
                        <Image
                            source={require('../image/carrinho.png')}
                            style={topo.carrinho} />
                    </Pressable>
                </View>


                <ScrollView>
                <Text style={style.texto1}>Produtos</Text>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Pressable
                            onPress={() => props.navigation.navigate('Carrinho')}
                        >
                            <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>

                        </Pressable>
                        
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.fundo}>
                    <View style={cartao.produto}>
                        <Image
                            source={require('../image/cartao.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.perso}>Personalizado</Text>
                            <Text style={texto.aVista}>Á partir de 100 un.</Text>
                            <Text style={texto.valor}>R$35,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Compra')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>


                <View style={{ flexDirection: "row"}}>
                    <Pressable style={style.contAlinhamentoText} onPress={() => props.navigation.navigate('Sobre')}>
                        <View style={style.rodapeTxt1}><Text>Sobre Nós</Text></View>
                    </Pressable>
                    <Pressable style={style.contAlinhamentoText} onPress={() => props.navigation.navigate('Contato')}>
                        <View style={style.rodapeTxt2}><Text>Contatos</Text></View>
                    </Pressable>
                    <Pressable style={style.contAlinhamentoText} onPress={() => props.navigation.navigate('Equipe')}>
                        <View style={style.rodapeTxt3}><Text>Equipe</Text></View>
                    </Pressable>
                </View>

                </ScrollView>
            </ImageBackground>
        </View>

    )
}




const topo = StyleSheet.create(
    {
        barra: {
            width: 35,
            height: 30,
            margin: 5,
        },
        logo: {
            width: 35,
            height: 30,
            margin: 5,
            marginRight: 30,
            marginTop: 12,
        },
        usuario: {
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 30,
            marginTop: 12,
        },
        carrinho: {
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 20,
            marginTop: 12,
        },
        pesquisa: {
            // textAlign: 'center',
            borderWidth: 1,
            height: 35,
            width: 230,
            margin: 10,
            borderColor: '#1E74C0',
            // marginLeft: 150,
            // marginTop: 60,
            // marginLeft: 20,
            borderRadius: 10,
            // fontSize: 15,
        },
        news: {
            marginLeft: 5,
        },
        icone: {
            marginLeft: 350,
            marginBottom: 190,
        },
    }
)

const style = StyleSheet.create(
    {
        texto1: {
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
        },
        mais: {
            textAlign: 'right',
            color: '#000',
            margin: 5,
        },
        envelope: {
            width: 140,
            height: 170,
            margin: 15,
        },
        cartao: {
            width: 150,
            height: 90,
            margin: 15,
            marginLeft: 15,
            marginTop: 30,
        },
        banner: {
            width: 50,
            height: 50,
            margin: 15,
        },
        rodapeTxt1: {
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,
            marginLeft: 20,

        },
        rodapeTxt2: {
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,

        },
        rodapeTxt3: {
            flexDirection: 'row',
            textAlign: 'center',
            margin: 10,
        },
        rodapeImg: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        fundo: {
            // textAlign: 'center',
            borderWidth: 1,
            height: 30,
            width: 250,
            margin: 10,
            borderColor: '#1E74C0',
            alignItems: 'flex-end',
            marginTop: 60,
            marginLeft: 20,
            // borderRadius: 10,
            // fontSize: 15,
        },
        button: {
            width: 150,
            height: 30,
            backgroundColor: "#1E74C0",
            alignItems: "center",
            justifyContent: "center",
            // borderRadius:10,
            marginTop: 2,
            marginLeft: 180,
        },
        textBtn: {
            color: "#FFF",
            fontFamily: "Pixelify Sans",
            fontWeight: "bold",
            fontSize: 15,
        },
        buttonTodos: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
            marginLeft: 295,
            paddingLeft: 20,
            paddingRight: 20,
            width: 320,
            height: 50,
        },
        quantidade:{
            borderRadius: 8,
            height: 50,
        }
    }
)

const imagem = StyleSheet.create(
    {
        whats: {
            width: 20,
            height: 20,
            alignSelf: 'center',
            margin: 10,
        },
        facebook: {
            width: 20,
            height: 20,
            alignSelf: 'center',
            margin: 10,
        },
        insta: {
            width: 22,
            height: 22,
            alignSelf: 'center',
            margin: 10,
        },
        texto: {
            color: '#000'
        },
        mais:{
            width: 20,
            height: 'auto',
            marginRight: 100,
            justifyContent: 'center',
        },
        menos:{
            width: 20,
            height: 20,
            marginTop: 10,
            marginLeft: 10,
        },
        carrinho: {
            width: 40,
            height: 40,
            marginLeft: 60,
        }
    }
)

const botao = StyleSheet.create(
    {
        comprar: {
            width: 170,
            height: 40,
            backgroundColor: "#1E74C0",
            marginLeft: 40,
            marginTop: 7,
            borderRadius: 30,

        },
        quanti: {
            backgroundColor: '#1E74C0',
            borderRadius: 30,
            width: 170,
            height: 40,
            marginLeft: 12,
            marginTop: 7,
        },
    }
)

const texto = StyleSheet.create(
    {
        comprar: {
            color: '#000',
            textAlign: 'center',
            fontSize: 25,
            marginTop: 1,
        },
        quanti: {
            color: '#000',
            textAlign: 'center',
            fontSize: 20,
            marginTop: 1,
        },
        cartaVisita: {
            color: '#000',
            marginLeft: 50,
            marginTop: 20,
            fontSize: 10,
        },
        perso: {
            color: '#000',
            marginLeft: 55,
        },
        aVista: {
            color: '#000',
            marginLeft: 45,
        },
        valor: {
            color: '#000',
            marginLeft: 75
        },
        quantidade:{
        //    marginLeft: 100,
           color: 'black',
           textAlign: 'center',
        }
    }
)

const fundo = StyleSheet.create(
    {
        papelFundo: {
            flex: 1,
        },
    }
)

const cartao = StyleSheet.create(
    {
        fundo: {
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        produto: {
            flexDirection: 'row',
            backgroundColor: '#D4E2F3',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        }
    }
)
