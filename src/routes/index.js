
import React,{useContext} from 'react'

import AuthRoutes from './AuthRoutes'
import AppRoutes from './AppRoutes'
import { AuthContext } from '../Context/AuthContext'

export default function Routes() {
    const {signed} = useContext(AuthContext)
    



  return (
    signed ? <AppRoutes/>:
    
        <AuthRoutes/>
    
  )
}

