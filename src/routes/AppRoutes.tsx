
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import New from '../pages/New'
import Profile from '../pages/Profile'
import CustomDrawer from '../Components/CustomDrawer'
import { StatusBar } from 'react-native'


const statusBarHeight = StatusBar.currentHeight
const Drawer = createDrawerNavigator()


export default function Approutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props)=> <CustomDrawer {...props}/>}
      screenOptions={
        { headerShown: false,

          drawerStyle: {
            backgroundColor: '#FFF',
            marginTop: statusBarHeight,
            
          },
          drawerActiveBackgroundColor: '#3b3dbf',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#121212',
          drawerInactiveBackgroundColor: '#f2f0ff',
          
          
  }      
      }
      
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Registrar" component={New} />
      <Drawer.Screen name="Perfil" component={Profile} />
      
    </Drawer.Navigator>
  )
}