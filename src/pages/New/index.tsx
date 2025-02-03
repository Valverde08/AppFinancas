
import React,{useState} from 'react'
import { Background, Button, Input, ButtonText } from './style'
import Header from '../../Components/Header/index'
import { SafeAreaView, TouchableWithoutFeedback,Keyboard, Alert } from 'react-native'
import RegisterTypes from '../../Components/RegisterTypes/index'
import api from '../../services/services'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'


export default function New() {   

    const navigation = useNavigation()

    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('receita')

    function register(){
        Keyboard.dismiss()
        if(isNaN(parseFloat(value))  || type === null ){
            alert('Preencha os dados')
            return
        }
           
        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - no valor de R$ ${parseFloat(value)}`,
            [
                {
                    text:'Continuar',
                    onPress: () => createReceipt()
                },
                {
                    text:'cancelar',
                    style:'cancel'
                }
            ]
        )

    }

    async function createReceipt() {

        Keyboard.dismiss()

        const properDate = format(new Date(), 'dd/MM/yyyy')

        await api.post('/receive',{
            description:description,
            value:Number(value),
            type:type,
            date: properDate
        })
        
        setValue('')
        setDescription('')
        navigation.navigate('Home')

    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Background>
            <Header title="Nova Movimentação"/>
            <SafeAreaView style={{alignItems:'center'}}>
                <Input 
                    placeholder="Descrição"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    />
                    
                <Input 
                    placeholder="Valor Desejado"
                    keyboardType="numeric"
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    />

                <RegisterTypes type={type} setTypeChange={(item)=>setType(item)} />
                <Button onPress={register}>
                    <ButtonText>Registrar</ButtonText>
                </Button>
                
            </SafeAreaView>
        
        </Background>
        
    </TouchableWithoutFeedback>

    
  )
}