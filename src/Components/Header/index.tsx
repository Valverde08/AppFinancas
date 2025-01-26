import { useNavigation } from "@react-navigation/native"
import { BtnDrawer, Header, Title,ContainerHeader } from "./style"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'


export default function index({title}) {
const navigation = useNavigation()

  return (
    <Header>
        <ContainerHeader>
        <BtnDrawer onPress={()=>navigation.openDrawer()}>
          <SimpleLineIcons name="list" size={24} color="black" />
        </BtnDrawer>
        <Title>{title}</Title>
        </ContainerHeader>
        
          
    </Header>
  )
}