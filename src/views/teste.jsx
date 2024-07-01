import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { CheckBox, } from '@rneui/themed';

const CarrinhoCompras = () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    const precoUnitarioCartao = 10;
    const precoUnitarioEnvelope = 20;

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
            total += num1 * precoUnitarioCartao + num2 * precoUnitarioEnvelope;
        }

        // Define o valor total no estado
        setValorTotal(total);
    };

    const toggleCheckbox1 = () => {
        setChecked1(!checked1);
        updateTotal();
    };

    const aumentarNum1 = () => {
        setNum1(num1 + 1);
        updateTotal();
    };

    const diminuirNum1 = () => {
        if (num1 > 0) {
            setNum1(num1 - 1);
            updateTotal();
        }
    };

    const toggleCheckbox2 = () => {
        setChecked2(!checked2);
        updateTotal();
    };

    const aumentarNum2 = () => {
        setNum2(num2 + 1);
        updateTotal();
    };

    const diminuirNum2 = () => {
        if (num2 > 0) {
            setNum2(num2 - 1);
            updateTotal();
        }
    };

    const toggleCheckbox3 = () => {
        setChecked3(!checked3);
        updateTotal();
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Item 1: Cartão</Text>
            <Text>Valor Unitário R$10,00</Text>
            <CheckBox
                checked={checked1}
                onPress={toggleCheckbox1}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}/>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button title="-" onPress={diminuirNum1} />
                <Text>{num1}</Text>
        
                <Button title="+" onPress={aumentarNum1} />
            </View>
            <Text>Total Cartão R${(num1 * precoUnitarioCartao).toFixed(2)} </Text>

            <Text style={{ marginTop: 20 }}>Item 2: Envelope</Text>
            <Text>Valor Unitário R$10,00</Text>
            <CheckBox
                checked={checked2}
                onPress={toggleCheckbox2}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}/>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button title="-" onPress={diminuirNum2} />
                <Text>{num2}</Text>
                <Button title="+" onPress={aumentarNum2} />
            </View>
            <Text>Total Cartão R${(num2 * precoUnitarioEnvelope).toFixed(2)} </Text>
            
            <CheckBox
                checked={checked3}
                onPress={toggleCheckbox3}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}/>
            <Text style={{ marginTop: 20 }}>Valor Total: R$ {valorTotal.toFixed(2)}</Text>
        </View>
    );
};

export default CarrinhoCompras;