import React from "react";
import { View,Image, Text, StyleSheet, Pressable, TextInput, Alert, ImageBackground} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';


export default props => {

    return(
        <View style={style.body}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex: 1}}
            >

            <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Login')}>
                        <Image
                        source={require('../image/voltar.png')}
                        style={topo.usuario}/>
                    </Pressable>
                </View>

            <Text style={texto.textRegistre}>CADASTRAR</Text>

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

            <Text style={style.text}>Or, register with email...</Text>

                <Pressable style={style.container}>
                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="person-outline" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="person"
                        keyboardType="name-phone-pad"
                        placeholder="Nome completo"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="person-outline" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="person"
                        keyboardType="numeric"
                        placeholder="CPF"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                    

                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="E-mail"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                <Pressable style={style.containerAlinhamento}>
                        <Icon name="key" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="passaword"
                        keyboardType="name-phone-pad"
                        placeholder="Senha"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                <Pressable style={style.containerAlinhamento}>
                        <Icon name="key" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Confirmpassword"
                        keyboardType="name-phone-pad"
                        placeholder="Confirmar senha"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="calendar-outline" size={18} color="#000"/>
                        <TextInput
                        textAlign="right"
                        label="Date"
                        keyboardType="name-phone-pad"
                        placeholder="Data de Nascimento"
                        placeholderTextColor="#000"
                        />
                    </Pressable>
                </Pressable>

                <Pressable style={style.container}>
                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Cadastro realizado com sucesso!')}}>   
                            <Text style={texto.textoBotao}>Cadastrar</Text>
                        </Pressable>
                    </View>
                </Pressable>
                <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Login')}>
                    <Text  style={texto.cadastro}>Já possuo cadastro!</Text>
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
    }
)

const style = StyleSheet.create(
    {
        body:{
            flexGrow:1
        },      
        contImg:{
            justifyContent:"center",
            alignItems:"center",
            paddingTop:30,
            marginBottom:15,
            transform: [{skewY: '-5deg'}],
        },
        img:{
            width:400,
            height:300,
        },
        textRegistre:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"black",
            marginTop:10,
            marginLeft:55
        },
        contAlinhamentoBox:{
            flexDirection:"row",
            justifyContent:"space-around",
            margin:25
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
        text:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#000",
            fontSize:15,
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
            height: 40,
            width: 370,
            marginTop: 15,
        },
        google:{
            width: 25,
            height: 25,
        },
        textBtn:{
            color: "#FFF",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:15
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
            marginLeft: 15,
        },
        contAlinhamentoText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:'center',
        },
    }
)

const imagem = StyleSheet.create(
    {
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
        textRegistre:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"#fff",
            marginTop: 40,
            marginBottom: 50,
            marginLeft: 155,
        },
        textoBotao:{
            color:"#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
        cadastro:{
            textAlign:"center",
            fontFamily:"Pixelify Sans",
            color:"#fff",
            fontSize:15,
        }
    }
)