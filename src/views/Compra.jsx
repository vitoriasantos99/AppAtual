import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, Pressable, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

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

                <Text style={texto.cartao}>Cartão de Visita</Text>
                <Image
                    source={require('../image/cartao.png')}
                    style={imagem.cartao}
                ></Image>

            
            <View style={style.containerAlinhamento}>
                <View style={texto.modelo}>
                    <Text>Modelo</Text>
                </View>
                    <TextInput
                    textAlign="left"
                    label="Email"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                    />
            </View>
            <View style={style.containerAlinhamento}>
                <View style={texto.modelo}>
                    <Text>Formato</Text>
                </View>
                    <TextInput
                    textAlign="left"
                    label="Email"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                    />
            </View>
            <View style={style.containerAlinhamento}>
                <View style={texto.modelo}>
                    <Text>Dimensões</Text>
                </View>
                    <TextInput
                    textAlign="left"
                    label="Email"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                    />
            </View>
            <View style={style.containerAlinhamento}>
                <View style={texto.modelo}>
                    <Text>Material</Text>
                </View>
                    <TextInput
                    textAlign="left"
                    label="Email"
                    keyboardType="email-address"
                    placeholder="E-mail"
                    placeholderTextColor="#000"
                    />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 50,}}>
                <Text style={texto.quanti}>Quantidade:</Text>
                    <Pressable style={botao.quanti} onPress={()=> props.navigation.navigate('')}>
                        <Text style={texto.quanti}>Quanti</Text>
                    </Pressable>
            </View>

                <Text style={texto.valor}>Valor Total: R$</Text>

            <View style={style.caixa1}>
                <Text style={texto.frete}>Calcular frete:</Text>
                <Text style={texto.cep}>CEP:</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={style.caixa2}>
                    <Text>teste</Text>
                    </View>
                    <Pressable style={botao.calcular}>
                        <Text style={texto.calcular}>Calcular</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Pressable style={botao.carrinho}>
                    <Text style={texto.carrinho}>Carrinho</Text>
                </Pressable>
                <Pressable style={botao.finalizar}>
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
            marginLeft: 30,
            marginTop: 12,
        },
        voltar:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 30,
            marginTop: 12,
        },
    }
)

const style = StyleSheet.create(
    {
        containerAlinhamento:{
            flexDirection:"row",
            borderBottomWidth:1,    
            borderColor:"#000",
            height: 40,
            width: 390,
            marginTop: 15,
            margin: 20,
        },
        caixa1:{
            backgroundColor: "#000"
        },
        caixa2:{
            backgroundColor: '#fff',
            marginLeft: 50,
            marginBottom: 10,
            width: 120,
            height: 40,
            borderRadius: 5,
        },  
    }
)

const texto = StyleSheet.create(
    {
        cartao:{
            textAlign: 'center',
            fontSize: 30,
        },
        modelo:{
            marginRight: 50,
        },
        quanti:{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            marginTop: 1,
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
            marginLeft: 95,
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
        finalizar:{
            textAlign: 'center',
            color: '#000',
            marginTop: 7,
            marginBottom: 7,
            fontSize: 15,
        },
        carrinho:{
            textAlign: 'center',
            color: '#fff',
            marginTop: 7,
            marginBottom: 7,
        }
    }
)

const botao = StyleSheet.create(
    {
        quanti:{
            width: 170,
            height: 40,
            backgroundColor: "#1E74C0",
            marginLeft: 20,
            borderRadius: 30,
            borderColor: "#fff",
            borderWidth: 0.8,
        },
        calcular:{
            borderRadius: 5,
            borderColor: '#fff',
            borderWidth: 0.8,
            backgroundColor: "#1E74C0",
            marginLeft: 50,
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
        }
    }
)

const imagem = StyleSheet.create(
    {
    cartao:{
        alignItems: 'center',
        marginLeft: 120,
        width: 200,
        height: 120,
        }
    }
)