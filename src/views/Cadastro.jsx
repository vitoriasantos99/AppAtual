import React from "react";
import { RecyclerViewBackedScrollViewComponent } from "react-native";
import { View, Text, Pressable, Alert, ImageBackground, Image, StyleSheet, TextInput } from "react-native";

export default props =>{
    return(
        <View style={{flex:1}}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >
                 <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Home')}>
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
                <Text style={texto.dados}>Minha conta</Text>

                
                <View style={{flexDirection: 'colum'}}> 
                    <Text style={texto.nome}>Nome completo</Text>
                    <View style={style.alinhamentoNome}>
                        <TextInput
                        keyboardType="email-address"
                        placeholder="Vitória Cristina dos Santos"
                        placeholderTextColor="#000"
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'colum'}}> 
                    <Text style={texto.telefone}>Telefone</Text>
                    <View style={style.alinhamentoTel}>
                        <TextInput
                        keyboardType="numeric"
                        placeholder="(11) 94806-7870"
                        placeholderTextColor="#000"
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'colum'}}> 
                    <Text style={texto.cpf}>CPF</Text>
                    <View style={style.alinhamentoCpf}>
                        <TextInput
                        keyboardType="numeric"
                        placeholder="467.784.578-64"
                        placeholderTextColor="#000"
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'colum'}}> 
                    <Text style={texto.email}>E-mail</Text>
                    <View style={style.alinhamentoEmail}>
                        <TextInput
                        keyboardType="email-address"
                        placeholder="vitoriasantos.cristina@hotmail.com"
                        placeholderTextColor="#000"
                        />
                    </View>
                </View>

                <View style={{flexDirection: 'colum'}}> 
                    <Text style={texto.nascimento}>Data de Nascimento</Text>
                    <View style={style.alinhamentoNasc}>
                        <TextInput
                        keyboardType="email-address"
                        placeholder="16/02/1999"
                        placeholderTextColor="#000"
                        />
                    </View>
                </View>

                <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Cadastro atualizado')}}>   
                            <Text style={texto.textoBotao}>Enviar</Text>
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

const texto = StyleSheet.create(
    {
        dados:{
            textAlign: 'center',
            fontSize: 20,
        },
        nome:{
            fontSize: 15,
            marginLeft: 50,
            marginTop: 20,
        },
        telefone:{
            fontSize: 15,
            marginLeft: 50,
            marginTop: 20,
        },
        cpf:{
            fontSize: 15,
            marginLeft: 50,
            marginTop: 20,
        },
        email:{
            fontSize: 15,
            marginLeft: 50,
            marginTop: 20,
        },
        nascimento:{
            fontSize: 15,
            marginLeft: 50,
            marginTop: 20,
        },
        textoBotao:{
            color:"#fff",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
    }
)

const style = StyleSheet.create(
    {
        alinhamentoNome:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
       },
       alinhamentoTel:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
        },
        alinhamentoCpf:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
        },
        alinhamentoEmail:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
        },
        alinhamentoNasc:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 40,
            width: '80%',
            marginLeft: 50,
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
            width:200,
            height:50,
            backgroundColor:"#1E74C0",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:10,
            marginTop:25,
            borderWidth: 1.2,
            marginLeft: 200,
        },
        textBtn:{
            color: "#000",
            fontFamily:"Pixelify Sans",
            fontWeight:"bold",
            fontSize:20
        },
    }
)