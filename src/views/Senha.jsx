import React from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet, Alert, ImageBackground} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
// import { Picker } from "@react-native-picker/picker";


export default props => {


    // const ResetPasswordScreen = (props) => {
    // const [email, setEmail] = useState('');
    // const [selectedValue, setSelectedValue] = useState('option1'); // Estado para armazenar o valor selecionado no Picker

    // const handleResetPassword = () => {
    //     // Lógica para redefinir a senha com o email e o valor selecionado no Picker
    //     Alert.alert('Senha Redefinida');
    // };

    return(
        <View style={style.body}>
            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={fundo.papelFundo}
            >

                <View style={{flexDirection: 'row'}}>
                    <Pressable onPress={()=> props.navigation.navigate('Login')}>
                        <Image
                        source={require('../image/voltar.png')}
                        style={topo.usuario}/>
                    </Pressable>
                </View>

            <Pressable style={style.container}>
                <Text style={texto.senha}>Redefinir senha</Text>
                
                    <Pressable style={style.containerAlinhamento}>
                        <Icon name="at" size={18} color="#000"/>
                        <TextInput
                        textAlign="left"
                        label="Email"
                        keyboardType="email-address"
                        placeholder="Email"
                        placeholderTextColor="#000"
                        />
                    </Pressable>

                     {/* Picker para selecionar a opção de redefinição */}
                     {/* <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        // style={style.picker}
                    >
                        <Picker.Item label="Opção 1" value="option1" />
                        <Picker.Item label="Opção 2" value="option2" />
                        <Picker.Item label="Opção 3" value="option3" />
                    </Picker> */}

                    <View style={style.textBtn}>
                        <Pressable
                            style={({pressed}) => [
                                {
                                    backgroundColor: pressed,
                                },
                                style.button, 
                            ]}
                            onPress={() => {Alert.alert('Bem Vindo')}}>   
                            <Text style={texto.redefinir}>Redefinir senha</Text>
                        </Pressable>
                    </View>

            </Pressable>


            <Pressable style={style.contAlinhamentoText} onPress={()=> props.navigation.navigate('Login')}>
                <Text  style={texto.voltar}>Voltar ao login</Text>
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
    }
)


const style = StyleSheet.create(
    {
        body:{
            flex:1,
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
            height:40,
            width: 360,
            marginTop: 15,
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

const fundo = StyleSheet.create(
    {
        papelFundo: {
            flex: 1,
        },
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
        senha:{
            fontSize:25,
            fontFamily: "Pixelify Sans",
            fontWeight:"bold",
            color:"#fff",
            marginTop: 40,
            marginBottom: 70,
            marginLeft: 105,
        },
        redefinir:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 25,
        },
        voltar:{
            textAlign: 'center',
            color: '#fff'
        },
        primeiroAcesso:{
            textAlign: 'center',
            color: '#fff'
        },
    }
)