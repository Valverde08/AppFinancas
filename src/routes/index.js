
import React,{useContext} from 'react'

import AuthRoutes from './AuthRoutes'
import AppRoutes from './AppRoutes'
import { AuthContext } from '../Context/AuthContext'
import { ActivityIndicator, View } from 'react-native'

export default function Routes() {
    const {signed,loadingIn} = useContext(AuthContext)
    
  if(loadingIn){
      return(
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size="large" color="#131313"/>
          </View>
      )
  }


  return (
    signed ? <AppRoutes/>:
    
        <AuthRoutes/>
    
  )
}

