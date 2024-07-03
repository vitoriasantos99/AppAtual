import React from "react";
import { Text, View,Image, Pressable,StyleSheet, ImageBackground} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';



export default props => {

    return(
        <View style={style.body}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={style.fundo}    
                    >
            
            <Text style={style.text}>GF Gráfica</Text>

            <Pressable style={style.button} onPress={()=> props.navigation.navigate('Login')}>
                <Text style={style.textBtn}>ENTRAR</Text>
                <Icon name="arrow-forward-circle-sharp" size={25} color="#FFF"/>
            </Pressable>
            </ImageBackground>
        </View>
    )
}


const style = StyleSheet.create(
    {   
        body:{
            backgroundColor:"#fff",
            flexGrow:1
        },
        text:{
            fontSize:40,
            fontWeight:"bold",
            color: "black",
            fontFamily:"Pixelify Sans",
            textAlign:"center",
            justifyContent:"center",
            alignItems:"center",
            marginTop: 100,
        },
        button:{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop: 350,
            marginLeft:45,
            paddingLeft:20,
            paddingRight:20,
            width: 350,
            height: 50,
            borderRadius:5,
            backgroundColor:"#1E74C0",
            borderColor: '#000',
            borderWidth: 1.2,
        },
        textBtn:{
            color:"#FFF",
            fontSize:15,
            fontStyle: 'italic',            
        },
        fundo:{
            flex:1,
        },
    }
)