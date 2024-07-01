import React, { useState } from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet, Alert, ImageBackground, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { CheckBox, } from '@rneui/themed';


export default props => {
    
    const [usuario,setUsuario] = useState('')
    const [senha,setSenha] = useState('')

    const [resultado,setResultado] = useState('')
    const [result, setResult] = useState('')

    function entrar (usuario,senha){
        if (usuario === "vitoria" && senha === 123){
            console.warn ("Bem vindo")
        }
        else {
            console.warn ("Usuario e senha incorreto")
        }
    }
    
    const [checked, setChecked] = React.useState(false);
    const toggleCheckbox = () => setChecked(!checked);
    

    return(
        <View style={{flex: 1}}>
            <ImageBackground
            source={require('../image/fundodesenho.png')}
            style={imagem.fundo}
            >

                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Home')}>
                        <Image
                        source={require('../image/voltar.png')}
                        style={topo.usuario}/>
                    </Pressable>
                </View>

            <Pressable style={style.container}>
                <Text style={texto.login}>LOGIN</Text>
                
                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#000"/>
                        <TextInput
                        onChangeText={setUsuario}
                        value={usuario}
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="E-mail"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                    <Pressable  style={style.containerAlinhamento}>
                        <Icon name="lock-closed-outline" size={18} color="#000"/>
                        <TextInput
                        onChangeText={setSenha}
                        value={senha}
                        // secureTextEntry={true}
                        textAlign="left"
                        label="senha"
                        keyboardType="numeric"
                        placeholder="Senha"
                        placeholderTextColor="#000"
                        />
                        {/* <TouchableOpacity onPress={toggleSecureEntry} style={{ padding: 10 }}>
                            <Icon name={secureTextEntry ? 'eye' : 'eye-slash'} size={20} color="gray" />
                        </TouchableOpacity> */}
                    </Pressable>

                    <View style={style.checkbox}>
                        <CheckBox
                        checked={checked}
                        onPress={toggleCheckbox}
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon={'checkbox-blank-outline'}
                        containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                        />
                        <Text style={texto.textCheck}>Manter conectado?</Text>
                    </View>

                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Bem Vindo')}}>   
                            <Text style={texto.textoBotao}>Logar</Text>
                        </Pressable>
                    </View>

            </Pressable>

            <Text style={texto.logarCom}>Ou, logar com...</Text>

            <Pressable style={style.contAlinhamentoBox}>

                <Pressable style={style.box}>
                <Image
                    source={require('../image/gmail.png')}
                    style={imagem.gmail}
                />
                </Pressable>

                <Pressable style={style.box}>
                <Image
                    source={require('../image/facebook.png')}
                    style={imagem.facebook}
                />
                </Pressable>

                <Pressable style={style.box}>
                <Image
                    source={require('../image/google.png')}
                    style={imagem.google}
                />
                </Pressable>

            </Pressable>

            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Senha')}>
                <Text  style={texto.esqueceu}>Esqueceu a senha ?</Text>
            </Pressable>
            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Register')}>
                <Text  style={texto.primeiroAcesso}>Primeiro acesso ?</Text>
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
            marginLeft: 30,
            marginTop: 12,
        },
        carrinho:{
            width: 30,
            height: 30,
            margin: 5,
            marginLeft: 20,
            marginTop: 12,
        },
    }
)

const style = StyleSheet.create(
    {
        contImg:{
            justifyContent:"center",
            alignItems:"center",
            paddingTop:90,
            transform: [{skewY: '-5deg'}],
        },
        img:{
            width:300,
            height:200,
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
            width: 360,
            marginTop:15
        },
        button:{
            width:350,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25,
            borderWidth: 1.2,
        },
        textBtn:{
            color: "#000",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        text:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#000",
            fontSize:15
        },
        text2:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            color:"#1E74C0",
            fontSize:15,
            paddingLeft:4
        },
        contAlinhamentoText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
        },
        box:{
            borderWidth:1,
            borderColor:"#B3C8CF",
            borderRadius:10,
            width:70,
            height:50,
            alignItems:"center",
            justifyContent:"center"
        },
        contAlinhamentoBox:{
            flexDirection:"row",
            justifyContent:"space-around",
            margin:35
        },
        google:{
            width: 25,
            height: 25,
        },       
        checkbox: {
            flexDirection: 'row',
            marginLeft: 50,
        },
        
    }
)

const imagem = StyleSheet.create(
    {
        fundo:{
            flex: 1,
        },
        gmail:{
            width: 32,
            height: 32,
            alignSelf: 'center',
            margin: 10,
        },
        facebook:{
            width: 30,
            height: 30,
            alignSelf: 'center',
            margin: 10,
        },
        google:{
            width: 30,
            height: 30,
            alignSelf: 'center',
            margin: 10,
            flexDirection: 'row'
        },
        texto:{
            color: '#000'
        }
    }
)

const texto = StyleSheet.create(
    {
        login:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"#fff",
            marginBottom: 150,
            marginLeft: 150,
        },
        textCheck:{
            marginTop: 18,
            backgroundColor: 'transparent',
            color:"#fff",
        },
        textoBotao:{
            color:"#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        logarCom:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#fff",
            fontSize:15
        },
        esqueceu:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#fff",
            fontSize:15
        },
        primeiroAcesso:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#fff",
            fontSize:15
        }
    },
)