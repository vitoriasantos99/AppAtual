import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./views/Inicio";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Senha from "./views/Senha";
import Compra from "./views/Compra";
import Pagamento from "./views/Pagamento";
import Pix from "./views/Pix";
import Contacts from "./views/Contatos";
import Avaliar from "./views/Avaliar";
import Equipe from "./views/Equipe";
import Cartao from "./views/Cartao";
import Boleto from "./views/Boleto";
import Carrinho from "./views/Carrinho";
import Cadastro from "./views/Cadastro";
import CarrinhoCompras from "./views/teste";
import testeAdd from "./views/telaCarrinho"
import testeView from "./views/telaAdd"
import TelaCarrinho from "./views/telaCarrinho";
import MeuModal from "./views/testeModal";

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex: 1}}>
           <NavigationContainer>
                <Stack.Navigator>
                    {/* <Stack.Screen name="Inicio" component={Inicio} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Home" component={Home} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Compra" component={Compra} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Login" component={Login} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Register" component={Register} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Senha" component={Senha} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Pagamento" component={Pagamento} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Pix" component={Pix} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Cartao" component={Cartao} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Boleto" component={Boleto} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Contato" component={Contacts} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Avaliar" component={Avaliar} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Equipe" component={Equipe} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Carrinho" component={Carrinho} options={{
                      title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Cadastro" component={Cadastro} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Teste" component={CarrinhoCompras} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Teste1" component={testeAdd} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Teste2" component={testeView} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    {/* <Stack.Screen name="Teste3" component={TelaCarrinho} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/> */}
                    <Stack.Screen name="Teste4" component={MeuModal} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    )
}