import { View, Text } from 'react-native'
import React from 'react'

import AuthRoutes from './AuthRoutes'

export default function Routes() {
    const laoding = false
    const signed = false



  return (
    signed ? <View></View>:
    
        <AuthRoutes/>
    
  )
}

