
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../pages/Home'



const Drawer = createDrawerNavigator()


export default function Approutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      
    </Drawer.Navigator>
  )
}