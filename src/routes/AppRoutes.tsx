
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'
import New from '../pages/New'
import { StatusBar } from 'react-native'


const statusBarHeight = StatusBar.currentHeight
const Drawer = createDrawerNavigator()


export default function Approutes() {
  return (
    <Drawer.Navigator
      screenOptions={
        { headerShown: false,

          drawerStyle: {
            backgroundColor: '#FFF',
            marginTop: statusBarHeight
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
      
    </Drawer.Navigator>
  )
}