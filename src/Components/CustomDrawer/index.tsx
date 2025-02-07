import { View,Image,Text} from 'react-native'
import React,{useContext} from 'react'
import { DrawerItemList,DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { AuthContext } from '../../Context/AuthContext'


export default function CustomDrawer(props) {
    const {user} = useContext(AuthContext)
  return (
    <DrawerContentScrollView style={{gap:14}}>
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:10, gap:5}}>
            <Image
            source={require('../../Assets/Logo.png')}
            style={{width:90,height:90}}
            resizeMode='contain'
            />
            <Text style={{fontWeight:600,fontSize:17}}>Bem-Vindo</Text>
            <Text numberOfLines={1}  style={{fontSize:17}}>{user && user.name}</Text>
        </View>
        
        <View style={{gap:14}}>
            <DrawerItemList {...props}/>
        </View>
        {/* <DrawerItem
        {...props}
        label={'Sair'}
        onPress={()=> alert('teste')}
        /> */}
    </DrawerContentScrollView>
  )
}