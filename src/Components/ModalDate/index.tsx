import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { Background, ModalContent,BtnFilterText } from './style'

export default function ModalDate({setVisible}) {
  return (
    <Background>
        <TouchableWithoutFeedback onPress={setVisible}>
            <View style={{flex:1}}></View>
        </TouchableWithoutFeedback>
        <ModalContent>
          <BtnFilterText>Teste</BtnFilterText>
        </ModalContent>



    </Background>
  )
}