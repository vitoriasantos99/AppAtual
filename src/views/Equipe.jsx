import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, Alert, ScrollView, Modal, Button } from "react-native";


export default props =>{


    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);

    const abrirModal1 = () =>{
        setModalVisible1(true);
      }
    
      const fecharModal1 = () =>{
        setModalVisible1(false);
      }

      const abrirModal2 = () =>{
        setModalVisible2(true);
      }
    
      const fecharModal2 = () =>{
        setModalVisible2(false);
      }

      const abrirModal3 = () =>{
        setModalVisible3(true);
      }
    
      const fecharModal3 = () =>{
        setModalVisible3(false);
      }

      const abrirModal4 = () =>{
        setModalVisible4(true);
      }
    
      const fecharModal4 = () =>{
        setModalVisible4(false);
      }

      const abrirModal5 = () =>{
        setModalVisible5(true);
      }
    
      const fecharModal5 = () =>{
        setModalVisible5(false);
      }

      const abrirModal6 = () =>{
        setModalVisible6(true);
      }
    
      const fecharModal6 = () =>{
        setModalVisible6(false);
      }



    return(
        <View style={{flex:1}}>

            <ImageBackground
                source={require('../image/fundodesenho.png')}
                style={{flex:1}}
            >

                <ScrollView>

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

                    <View>
                        <Text style={texto.textoLogo}>Clique na nossa logo para saber mais</Text>
                    <Pressable 
                        onPress={abrirModal1} 
                        style={style.alinhamentoModelo}>

                        <Image
                            source={require('../image/logoGF.png')}
                            style={image.logo}
                        />
                    </Pressable>
                    </View>

                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible1}
                        onRequestClose={fecharModal1}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixalogo}>
                                <Text style={texto.nos}>Sobre nós</Text>
                                <Text style={texto.sobre}>
                                Surgimos no mercado em 2012, somos uma empresa familiar e nosso foco é a impressão em offset, uma gráfica plana.

                                Oferecemos uma ampla gama de serviços gráficos personalizados para atender às suas necessidades específicas. Desde cartões de visita elegantes, blocos e materiais promocionais , nossos serviços são personalizados e de alta qualidade para atender às necessidades específicas dos clientes.

                                Temos uma flexibilidade que nos permite adaptar-nos rapidamente às demandas do mercado, assegurando entregas pontuais e um serviço que você pode confiar.

                                Procuramos mantém tradições familiares, combinando experiência com inovação para competir no mercado gráfico.
                                </Text>
                                    <Pressable
                                        onPress={fecharModal1}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Fechar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View>
                        <Text style={texto.equipe}>Equipe GF</Text>
                    </View>
                    <View>
                        <Text style={texto.foto}>Clique na nossa foto para mais informações</Text>
                    </View>





                    <View style={style.container}>
                        <Pressable
                            onPress={abrirModal2} 
                            style={style.alinhamentoModelo}
                        > 
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../image/adriana.png')}
                                    style={image.avatar1}
                                />
                                <View style={{flexDirection: 'column'}}>
                                </View>
                            </View>
                        </Pressable>
                    </View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible2}
                        onRequestClose={fecharModal2}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixafoto}>
                                <Text style={texto.nome}>Adriana</Text>
                                <Text style={texto.cargo}>CEO e proprietária da GF Gráfica</Text>
                                <Text style={texto.email}>E-mail: adrianacristinasg27@gmail.com</Text>
                                <Text style={texto.telefone}>WhatsApp: (11) 95936-4604</Text>
                                {/* <Text style={texto.sobre}>Instagram:</Text> */}
                                    <Pressable
                                        onPress={fecharModal2}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Voltar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>


                    <View style={style.container}>
                        <Pressable
                            onPress={abrirModal3} 
                            style={style.alinhamentoModelo}
                        > 
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../image/laryssa.png')}
                                    style={image.avatar1}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible3}
                        onRequestClose={fecharModal3}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixafoto}>
                                <Text style={texto.nome}>Laryssa</Text>
                                <Text style={texto.cargo}>Diretora Técnica</Text>
                                <Text style={texto.email}>E-mail: laryssa58647@gmail.com </Text>
                                <Text style={texto.telefone}>Telefone: (11) 98379-6950 </Text>
                                
                                    <Pressable
                                        onPress={fecharModal3}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Voltar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>


                    <View style={style.container}>
                        <Pressable
                            onPress={abrirModal4} 
                            style={style.alinhamentoModelo}
                        > 
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../image/pedro.png')}
                                    style={image.avatar1}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible4}
                        onRequestClose={fecharModal4}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixafoto}>
                                <Text style={texto.nome}>Pedro</Text>
                                <Text style={texto.cargo}>Diretor Administrativo</Text>
                                <Text style={texto.email}>E-mail: pedro@gmail.com</Text>
                                <Text style={texto.telefone}>WhatsApp: (11) 98210-5019 </Text>
                                    <Pressable
                                        onPress={fecharModal4}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Voltar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View style={style.container}>
                        <Pressable
                            onPress={abrirModal5} 
                            style={style.alinhamentoModelo}
                        > 
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../image/thiago.png')}
                                    style={image.avatar1}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible5}
                        onRequestClose={fecharModal5}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixafoto}>
                            <Text style={texto.nome}>Thiago</Text>
                            <Text style={texto.cargo}>Diretor Administrativo</Text>
                            <Text style={texto.email}>E-mail: thiago.gr37@gmail.com</Text>
                            <Text style={texto.telefone}>WhatsApp: (11) 98943-4627 </Text>
                                    <Pressable
                                        onPress={fecharModal5}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Voltar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>

                    <View style={style.container}>
                        <Pressable
                            onPress={abrirModal6} 
                            style={style.alinhamentoModelo}
                        > 
                            <View style={{flexDirection: 'row'}}>
                                <Image
                                    source={require('../image/vitoria.png')}
                                    style={image.avatar1}
                                />
                            </View>
                        </Pressable>
                    </View>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={modalVisible6}
                        onRequestClose={fecharModal6}
                    >
                        <View style={modal.background}>
                            <View style={modal.caixafoto}>
                                <Text style={texto.nome}>Vitória</Text>
                                <Text style={texto.cargo}>Diretora Técnica</Text>
                                <Text style={texto.email}>E-mail: vitoriasantos.cristina@hotmail.com</Text>
                                <Text style={texto.telefone}>Whats: (11) 94806-7870 </Text>
                                    <Pressable
                                        onPress={fecharModal6}
                                        title="Fechar modal"
                                    >
                                        <Text style={texto.fechar}>Voltar</Text>
                                    </Pressable>
                            </View>
                        </View>
                    </Modal>
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
            marginLeft: 120,
            marginTop: 0,
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
        },
        logo:{
            marginLeft: 150,
            marginTop: 20,
            width: 150, //altura
            height: 90, //largura
        }
    }
)

const texto = StyleSheet.create(
    {
        equipe:{
            textAlign: 'center',
            color: "#fff",
            fontSize: 25,
            marginTop: 20,
        },
        nome:{
            color: '#fff',
            marginTop: 50,
            marginLeft: 10,
        },
        cargo:{
            color: '#fff',
            marginLeft: 10,
        },
        nos:{
            textAlign: 'center',
            color: '#fff',
            fontSize: 25,
        },
        sobre:{
            fontSize: 15,
            textAlign: 'center',
            marginLeft: 3,
            marginRight: 3,
            color: '#fff',
            marginTop: 10,
        },
        fechar:{
            marginTop: 10,
            fontSize: 20,
            color: "#000",
        },
        foto:{
            marginLeft: 80,
            color: '#000',
            marginTop: 20,
        },
        textoLogo: {
            marginLeft: 90,
            color: '#000',
            marginTop: 15,
        },
        nome:{
            color: '#fff',
            // marginTop: 50,
            marginLeft: 10,
            fontSize: 30,
        },
        cargo:{
            color: '#000',
            marginLeft: 10,
            fontSize: 20,
            
        },
        telefone:{
            color: '#fff', 
            marginLeft: 10, 
            fontSize: 18,
        },
        email:{
            color: '#fff',
            marginLeft: 10,
            fontSize: 18,
        },
    }
)

const style = StyleSheet.create(
    {
        button:{
            width: 155,
            height: 155,
            marginLeft: 40,
            // backgroundColor:"#1E74C0",
            // alignItems:"center",
            // justifyContent:"center",
            // borderRadius: 100,
            // borderWidth: 1.2,
            // marginLeft: 160,
        },
        container:{
            margin: 30,
            marginLeft: 20,
        },
        fundoSobre:{
            backgroundColor: '#fff',
            height: 200, //altura
            width: 430, //largura
            marginLeft: 9,
            marginTop: 10,
        },
        alinhamentoFormato:{
            flexDirection:"row",
            alignItems:"center",
            borderRadius: 5,   
            borderColor:"#000",
            backgroundColor: 'white',
            borderWidth: 1.2,
            color: "#000",
            height: 35,
            width: 280,
            marginTop: 15,
            marginLeft: 67,
        },
    }
)

const modal = StyleSheet.create(
    {
        background:{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semi-transparente para simular o desfoque
            justifyContent: 'center',
            alignItems: 'center',
        },
        caixalogo:{
            backgroundColor: '#1E74C0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 380, //largura
            height: 360, //altura
            borderColor: '#000',
            borderWidth: 1,
            fontSize: 15,
        },
        caixafoto:{
            backgroundColor: '#1E74C0',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            width: 380, //largura
            height: 250, //altura
            borderColor: '#000',
            borderWidth: 1,
            // fontSize: 15,
        },
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
