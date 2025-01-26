
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'



const Drawer = createDrawerNavigator()


export default function Approutes() {
  return (
    <Drawer.Navigator
      screenOptions={
        { headerShown: false,

          drawerStyle: {
            backgroundColor: '#FFF',
            marginTop:20
          },
          drawerActiveBackgroundColor: '#3b3dbf',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#757373',
          drawerLabelStyle: {
            fontSize: 15,
          },
          drawerHideStatusBarOnOpen: true,
  }      
      }
      
    >
      <Drawer.Screen name="Home" component={Home} />
      
    </Drawer.Navigator>
  )
}