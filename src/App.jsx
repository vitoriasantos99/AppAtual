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

const Stack = createNativeStackNavigator();

export default props =>{
    return(
        <SafeAreaView style={{flex: 1}}>
           <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Inicio" component={Inicio} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Home" component={Home} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Login" component={Login} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Register" component={Register} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Senha" component={Senha} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                    <Stack.Screen name="Compra" component={Compra} options={{
                        title:'',
                        headerTransparent: true,
                        headerShown: false,
                    }}/>
                </Stack.Navigator>
           </NavigationContainer>
        </SafeAreaView>
    )
}