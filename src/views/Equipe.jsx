import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, Alert, ScrollView } from "react-native";


export default props =>{
    return(
        <View style={{flex:1}}>

            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >

                <ScrollView>

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

                    <View>
                        <Text style={texto.equipe}>Equipe GF</Text>
                    </View>

                    <View style={style.container}>
                        <View style={style.textBtn}>
                            <Pressable
                                style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert
                                ('Obrigado'


                            )}}> 
                                <View style={{flexDirection: 'row'}}>
                                    <Image
                                        source={require('../image/avatar.png')}
                                        style={image.avatar1}
                                    />
                                    <View style={{flexDirection: 'column'}}>
                                        <Text style={texto.nome}>Adriana</Text>
                                        <Text style={texto.cargo}>CEO da GF Gráfica</Text>
                                    </View>
                                </View>
                            </Pressable>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={style.textBtn}>
                            <Pressable
                                style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Obrigado')}}> 
                                <Image
                                    source={require('../image/avatar2.png')}
                                    style={image.avatar2}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={style.textBtn}>
                            <Pressable
                                style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Obrigado')}}> 
                                <Image
                                    source={require('../image/avatar3.png')}
                                    style={image.avatar3}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={style.textBtn}>
                            <Pressable
                                style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Obrigado')}}> 
                                <Image
                                    source={require('../image/avatar4.png')}
                                    style={image.avatar4}
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View style={style.container}>
                        <View style={style.textBtn}>
                            <Pressable
                                style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Obrigado')}}> 
                                <Image
                                    source={require('../image/avatar5.png')}
                                    style={image.avatar5}
                                />
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


const image = StyleSheet.create(
    {
        avatar1:{
            width: 151,
            height: 151,
            marginLeft: 1,
            marginTop: 2,
        },
        avatar2:{
            width: 165,
            height: 165,
        },
        avatar3:{
            width: 151,
            height: 151,
            marginLeft: 1,
            marginTop: 2,
        },
        avatar4:{
            width: 151,
            height: 151,
            marginLeft: 1,
            marginTop: 2,
        },
        avatar5:{
            width: 151,
            height: 151,
            marginLeft: 1,
            marginTop: 2,
        }
    }
)

const texto = StyleSheet.create(
    {
        equipe:{
            textAlign: 'center',
            color: "#fff",
            fontSize: 20,
        },
        nome:{
            color: '#fff',
            marginTop: 50,
            marginLeft: 10,
        },
        cargo:{
            color: '#fff',
            marginLeft: 10,
        }
    }
)

const style = StyleSheet.create(
    {
        button:{
            width: 155,
            height: 155,
            marginLeft: 40,
            backgroundColor:"#1E74C0",
            // alignItems:"center",
            // justifyContent:"center",
            borderRadius: 100,
            borderWidth: 1.2,
            // marginLeft: 160,
        },
        container:{
            margin:30,

        },
        // textBtn:{
        //     color: "#FFF",
        //     fontFamily:"Pixelify Sans",
        //     fontWeight:"bold",
        //     fontSize:15
        // },
    }
)

// const cartao = StyleSheet.create(
//     {
//         adriana1:{
//             // backgroundColor: '#fff',
//             borderRadius: 100,
//             width: 150,
//             height: 150,
//             marginLeft: 20,
//             marginTop: 20,
//             borderColor: '#000',
//             borderWidth:1.2,
//         },
//         adriana2:{
//             // backgroundColor: '#fff',
//             width: 255,
//             height: 80,
//             marginTop: 55,
//             // borderColor: '#000',
//             // borderWidth:1.2,
//         },
//         laryssa1:{
            
//         },
//         laryssa2:{

//         },
//         pedro:{

//         },
//         thiago:{

//         },
//         vitoria:{

//         }
//     }
// )
