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
                    <Pressable
                        onPress={() => props.navigation.navigate('Equipe')}
                    >
                    <Image
                        source={require('../image/logoGF.png')}
                        style={topo.logo} />
                    </Pressable>

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

                <View style={{flexDirection: 'row'}}>
                    <Pressable
                        onPress={() => props.navigation.navigate('Contatos')}
                        style={botao.contatos}
                    >
                        <Text style={texto.contatos}>Contatos</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => props.navigation.navigate('Equipe')}
                        style={botao.equipe}
                    >
                        <Text style={texto.equipe}>Equipe</Text>
                    </Pressable>

                </View>


                <ScrollView>
                <Text style={style.texto1}>Nossos Produtos</Text>

                <View style={cartao.fundo}>
                    <View style={cartao.produtoCartao}>
                        <Image
                            source={require('../image/cartao2.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.cartaVisita}>Cartão de Visita</Text>
                            <Text style={texto.persoCartao}>Personalizado</Text>
                            <Text style={texto.aVistaCartao}>Á partir de 100 uni</Text>
                            <Text style={texto.valorCartao}>R$35,00</Text>
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
                        
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('CartaoVisita')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={cartao.bannerfundo}>
                    <View style={cartao.produtoBanner}>
                        <Image
                            source={require('../image/banner.png')}
                            style={style.banner} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.banner}>Banner</Text>
                            <Text style={texto.persoBanner}>Personalizado</Text>
                            <Text style={texto.aVistaBanner}>R$60,00</Text>
                            <Text style={texto.valorBanner}>1 uni</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Banner')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.envelopefundo}>
                    <View style={cartao.produtoEnvelope}>
                        <Image
                            source={require('../image/envelope.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.envelope}>Envelope</Text>
                            <Text style={texto.persoEnvelope}>Personalizado</Text>
                            <Text style={texto.aVistaEnvelope}>R$140,00</Text>
                            <Text style={texto.valorEnvelope}>500 uni</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Envelope')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.pastaFundo}>
                    <View style={cartao.produtoPasta}>
                        <Image
                            source={require('../image/pasta.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.pasta}>Pastas</Text>
                            <Text style={texto.persoPasta}>Personalizado</Text>
                            <Text style={texto.aVistaPasta}>R$400,00</Text>
                            <Text style={texto.valorPasta}>500 uni</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Pasta')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.folhetoFundo}>
                    <View style={cartao.produtoFolheto}>
                        <Image
                            source={require('../image/folheto.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.folheto}>Folheto</Text>
                            <Text style={texto.persoFolheto}>Personalizado</Text>
                            <Text style={texto.aVistaFolheto}>R$200,00</Text>
                            <Text style={texto.valorFolheto}>1.000 uni</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Folheto')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
                </View>

                <View style={cartao.blocoFundo}>
                    <View style={cartao.produtoBlocos}>
                        <Image
                            source={require('../image/blocos.png')}
                            style={style.cartao} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={texto.blocos}>Blocos</Text>
                            <Text style={texto.persoBlocos}>Personalizado</Text>
                            <Text style={texto.aVistaBlocos}>R$140,00</Text>
                            <Text style={texto.valorBlocos}>10 uni</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={botao.quanti}>
                            <Image
                                source={require('../image/carrinho.png')}
                                style={imagem.carrinho}
                            />
                        </View>
                        <Pressable style={botao.comprar} onPress={() => props.navigation.navigate('Bloco')}>
                            <Text style={texto.comprar}>Comprar</Text>
                        </Pressable>
                    </View>
                    
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
            width: 45,
            height: 30,
            margin: 5,
            marginRight: 30,
            marginTop: 12,
            marginLeft: 5,
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
            fontSize: 25,
            marginTop: 20,
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
            width: 120, //largura
            height: 100, //altura
            margin: 15,
            marginLeft: 30,
            marginTop: 25,
        },
        banner: {
            width: 115, //largura
            height: 100, //altura
            margin: 15,
            marginLeft: 30,
            marginTop: 25,
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
        contatos:{
            width: 170,
            height: 40,
            // backgroundColor: "#000",
            marginLeft: 40,
            marginTop: 7,
            borderRadius: 30,
            borderColor: '#000',
            borderWidth: 1,

        },
        equipe:{
            width: 170,
            height: 40,
            // backgroundColor: "#000",
            marginLeft: 40,
            marginTop: 7,
            borderRadius: 30,
            borderColor: '#000',
            borderWidth: 1,

        }
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
            marginLeft: 70,
            marginTop: 30,
            fontSize: 15,
        },
        persoCartao: {
            color: '#000',
            marginLeft: 75,
            fontSize: 15,
        },
        aVistaCartao: {
            color: '#000',
            marginLeft: 63,
        },
        valorCartao: {
            color: '#000',
            marginLeft: 100
        },

        banner: {
            color: '#000',
            marginLeft: 100,
            marginTop: 30,
            fontSize: 18,
        },
        persoBanner: {
            color: '#000',
            marginLeft: 80,
            fontSize: 15,
        },
        aVistaBanner: {
            color: '#000',
            marginLeft: 100,
        },
        valorBanner: {
            color: '#000',
            marginLeft: 110,
        },

        envelope: {
            color: '#000',
            marginLeft: 95,
            marginTop: 30,
            fontSize: 16,
        },
        persoEnvelope: {
            color: '#000',
            marginLeft: 80,
            fontSize: 15,
        },
        aVistaEnvelope: {
            color: '#000',
            marginLeft: 100,
        },
        valorEnvelope: {
            color: '#000',
            marginLeft: 110,
        },

        pasta: {
            color: '#000',
            marginLeft: 100,
            marginTop: 20,
            fontSize: 16,
        },
        persoPasta: {
            color: '#000',
            marginLeft: 80,
            fontSize: 15,
        },
        aVistaPasta: {
            color: '#000',
            marginLeft: 99,
        },
        valorPasta: {
            color: '#000',
            marginLeft: 107,
        },

        folheto: {
            color: '#000',
            marginLeft: 100,
            marginTop: 20,
            fontSize: 16,
        },
        persoFolheto: {
            color: '#000',
            marginLeft: 80,
            fontSize: 15,
        },
        aVistaFolheto: {
            color: '#000',
            marginLeft: 100,
        },
        valorFolheto: {
            color: '#000',
            marginLeft: 100,
        },

        blocos: {
            color: '#000',
            marginLeft: 100,
            marginTop: 20,
            fontSize: 16,
        },
        persoBlocos: {
            color: '#000',
            marginLeft: 75,
            fontSize: 15,
        },
        aVistaBlocos: {
            color: '#000',
            marginLeft: 90,
        },
        valorBlocos: {
            color: '#000',
            marginLeft: 110,
        },


        quantidade:{
        //    marginLeft: 100,
           color: 'black',
           textAlign: 'center',
        },
        contatos:{
            color: '#000',
            textAlign: 'center',
            fontSize: 25,
            marginTop: 1,
        },
        equipe:{
            color: '#000',
            textAlign: 'center',
            fontSize: 25,
            marginTop: 1,
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
        bannerfundo:{
            backgroundColor: '#D4E2F3',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        envelopefundo:{
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        pastaFundo:{
            backgroundColor: '#D4E2F3',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        folhetoFundo:{
            backgroundColor: 'white',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        blocoFundo:{
            backgroundColor: '#D4E2F3',
            marginLeft: 20,
            marginRight: 20,
            borderRadius: 30,
            height: 220,
            marginTop: 10,
        },
        produtoCartao: {
            flexDirection: 'row',
            backgroundColor: '#D4E2F3',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
        produtoBanner: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
        produtoEnvelope: {
            flexDirection: 'row',
            backgroundColor: '#D4E2F3',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
        produtoPasta: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
        produtoFolheto: {
            flexDirection: 'row',
            backgroundColor: '#D4E2F3',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
        produtoBlocos: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginLeft: 10,
            marginRight: 265,
            marginTop: 10,
            width: 180,
            height: 150,
            borderRadius: 30,
        },
    }
)
