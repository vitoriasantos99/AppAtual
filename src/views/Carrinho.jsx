import React, { useState } from "react";
import { View, Text, Pressable, Alert, ImageBackground, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { CheckBox, } from '@rneui/themed';

export default props => {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    const [num1, setNum1] = useState(0); // Quantidade para o item 1
    const [num2, setNum2] = useState(0); // Quantidade para o item 2

    const precoUnitarioCartao = 10; //Preço unitário do cartão
    const precoUnitarioEnvelope = 20; // Preço unitário do envelope

    const toggleCheckbox1 = () => {
        setChecked1(!checked1)
        updateTotal()
    }

    const toggleCheckbox2 = () => {
        setChecked2(!checked2);
        updateTotal();
    };

    const toggleCheckbox3 = () => {
        const newState = !checked3;
        setChecked3(newState);
        if (newState) {
            setChecked1(true);
            setChecked2(true);
        } else {
            setChecked1(false);
            setChecked2(false);
        }
        updateTotal();
    };

    // Função para aumentar a quantidade do item 1
    const aumentarNum1 = () => {
        setNum1(num1 + 1);
        updateTotal();
    };

    // Função para diminuir a quantidade do item 1
    const diminuirNum1 = () => {
        if (num1 > 0) {
            setNum1(num1 - 1);
            updateTotal();
        }
    };


    // Função para aumentar a quantidade do item 2
    const aumentarNum2 = () => {
        setNum2(num2 + 1);
        updateTotal();
    };

    // Função para diminuir a quantidade do item 2
    const diminuirNum2 = () => {
        if (num2 > 0) {
            setNum2(num2 - 1);
            updateTotal();
        }
    };

    // Função para atualizar o valor total com base nos estados dos checkboxes e quantidades
    const updateTotal = () => {
        let total = 0;

        // Verifica se o primeiro item está selecionado e adiciona ao total
        // if (checked1) {
        //     total += num1 * precoUnitarioCartao;
        // }

        // Verifica se o segundo item está selecionado e adiciona ao total
        // if (checked2) {
        //     total += num2 * precoUnitarioEnvelope;
        // }

        // Verifica se ambos os itens estão selecionados e adiciona ao total
        if (checked3) {
            total += (num1 * precoUnitarioCartao) + (num2 * precoUnitarioEnvelope);
        }
        // Define o valor total no estado
        setValorTotal(total);
    };

    const geral = () => {

    }

    const [valorTotal, setValorTotal] = React.useState(0); // Estado para armazenar o valor total da compra




    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{ flex: 1 }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <Pressable onPress={() => props.navigation.navigate('Home')}>
                        <Image
                            source={require('../image/voltar.png')}
                            style={topo.voltar} />
                    </Pressable>
                    <Pressable onPress={() => props.navigation.navigate('Login')}>
                        <Image
                            source={require('../image/usuario.png')}
                            style={topo.usuario} />
                    </Pressable>
                </View>


                <Text style={texto.titulo}>Carrinho</Text>

                <View>
                    <Text style={texto.itens}> Seu carrinho tem ** itens</Text>
                </View>

                <Pressable>
                    <Image
                        source={require('../image/linha.png')}
                        style={image.linha}
                    />
                </Pressable>

                <View style={style.fundo1}>
                    <View style={style.checkbox}>
                        <CheckBox
                            checked={checked1}
                            onPress={toggleCheckbox1}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        />

                    </View>

                    <Image
                        source={require('../image/cartao.png')}
                        style={image.cartao}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={texto.cartao}>Cartão de visita</Text>
                        <Text style={texto.persona}>Personlizado</Text>
                        <Text style={texto.valor}>Total: R$ {(num1 * precoUnitarioCartao).toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={diminuirNum1}
                        >
                            <Image
                                source={require('../image/menos.png')}
                                style={image.menos}

                            />
                        </TouchableOpacity>

                        <Text style={texto.quanti}>{num1}</Text>

                        <TouchableOpacity
                            onPress={aumentarNum1}
                        >
                            <Image
                                source={require('../image/mais.png')}
                                style={image.mais}

                            />
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={style.fundo1}>
                    <View style={style.checkbox}>
                        <CheckBox
                            checked={checked2}
                            onPress={toggleCheckbox2}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        />

                    </View>

                    <Image
                        source={require('../image/cartao.png')}
                        style={image.cartao}
                    />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={texto.cartao}>Cartão de visita</Text>
                        <Text style={texto.persona}>Personlizado</Text>
                        <Text style={texto.valor}>Total: R${(num2 * precoUnitarioEnvelope).toFixed(2)}</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={diminuirNum2}
                        >
                            <Image
                                source={require('../image/menos.png')}
                                style={image.menos}

                            />
                        </TouchableOpacity>

                        <Text style={texto.quanti}>{num2}</Text>

                        <TouchableOpacity
                            onPress={aumentarNum2}
                        >
                            <Image
                                source={require('../image/mais.png')}
                                style={image.mais}

                            />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={style.footer}>
                    <View style={style.checkboxRodape}>
                        <CheckBox
                            checked={checked3}
                            onPress={toggleCheckbox3}
                            iconType="material-community"
                            checkedIcon="checkbox-outline"
                            uncheckedIcon={'checkbox-blank-outline'}
                            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        />
                    </View>
                    <Text style={texto.tudo}>Tudo</Text>

                    <View style={{ flexDirection: 'colum' }}>
                        <Text style={texto.subTotal}>Sub-total:</Text>
                        <Text style={texto.subValor}>R$ {valorTotal.toFixed(2)}</Text>
                    </View>

                    <View style={style.fundoPagar}>
                        <Pressable
                            onPress={() => props.navigation.navigate('Pagamento')}
                        >
                            <Text style={texto.comprar}>Continuar</Text>
                        </Pressable>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const topo = StyleSheet.create(
    {
        usuario: {
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 350,
            marginTop: 12,

        },
        voltar: {
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 10,
            marginTop: 12,
        },
    }
)

const image = StyleSheet.create(
    {
        linha: {
            marginLeft: 50,
        },
        cartao: {
            marginTop: 18,
        },
        menos: {
            width: 15,
            height: 20,
            marginTop: 10,
            marginLeft: 50,
        },
        mais: {
            width: 15,
            height: 15,
            marginLeft: 52,
            marginTop: 5,
        }
    }
)

const style = StyleSheet.create(
    {
        fundo1: {
            // backgroundColor: '#fff',
            borderColor: '#000',
            borderWidth: 1.0,
            width: 400,
            height: 100,
            marginTop: 20,
            marginLeft: 25,
            flexDirection: 'row'
        },
        checkbox: {
            marginTop: 18,
        },
        checkboxRodape: {
            marginTop: 12,
        },
        footer: {
            // backgroundColor: '#eee',
            height: 100,
            position: 'absolute',
            bottom: 2,
            left: 0,
            right: 0,
            height: 80,
            flexDirection: 'row',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            // justifyContent: 'center', // Alinhar conteúdo verticalmente ao centro
            // alignItems: 'center', // Alinhar conteúdo horizontalmente ao centro
        },
        fundoPagar: {
            backgroundColor: 'green',
            marginLeft: 50,
            width: 100,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
        },

    }
)

const texto = StyleSheet.create
    (
        {
            titulo: {
                textAlign: 'center',
                color: '#000',
                fontSize: 20,
            },
            itens: {
                textAlign: 'center',
                color: '#000',
                fontSize: 20,
                margin: 10,
            },
            cartao: {
                marginTop: 15,
                marginLeft: 20,
            },
            persona: {
                marginLeft: 20,
            },
            valor: {
                marginLeft: 20,
            },
            quanti: {
                marginLeft: 55,
            },
            comprar: {
                textAlign: 'center',
                marginTop: 25,
                fontSize: 17,
            },
            subTotal: {
                marginTop: 10,
                marginLeft: 124,
            },
            subValor: {
                marginTop: 10,
                marginLeft: 124,
            },
            tudo: {
                marginTop: 22,
                fontSize: 22,
            }
        }
    )