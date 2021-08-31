import React, {useState} from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles/style';

export default function Content(){
    const [numeros, setNumeros] = useState({
        a: '',
        b:''
    });
    const [resultado, setResultado] = useState('');
    return(
        <ScrollView>
            <View style={styles.visor}>
                <Text style={styles.visortext}>{`a = ${numeros.a}, b = ${numeros.b}\n Resultado: ${resultado}`}</Text>
                <View style={ {width:'90%', flexDirection:'row'} }>
                    <TextInput
                    style={styles.input}
                    placeholder='Digite um número'
                    keyboardType='numeric'
                    onChangeText={
                        (a) => setNumeros({...numeros, a:parseInt(a)})
                    } />
                    <TextInput
                    style={styles.input}
                    placeholder='Digite um número'
                    keyboardType='numeric'
                    onChangeText={
                        (b) => setNumeros({...numeros, b:parseInt(b)})
                    } />
                </View>
                <View style={ {width:'90%'} }>
                    <Button
                    color='#aaaaaa'
                    title='+'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} + ${numeros.b} = ${numeros.a + numeros.b}`)
                        }
                    } />
                    <Button
                    color='#999999'
                    title='-'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} - ${numeros.b} = ${numeros.a - numeros.b}`)
                        }
                    } />
                    <Button
                    color='#aaaaaa'
                    title='*'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} * ${numeros.b} = ${numeros.a * numeros.b}`)
                        }
                    } />
                    <Button
                    color='#999999'
                    title='/'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} / ${numeros.b} = ${numeros.a / numeros.b}`)
                        }
                    } />
                    <Button
                    color='#aaaaaa'
                    title='%'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} % ${numeros.b} = ${numeros.a % numeros.b}`)
                        }
                    } />
                    <Button
                    color='#999999'
                    title='**'
                    onPress={
                        () => {
                            setResultado(`${numeros.a} ** ${numeros.b} = ${numeros.a ** numeros.b}`)
                        }
                    } />
                </View>
            </View>
        </ScrollView>
    )
}