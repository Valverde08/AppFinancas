import { StatusBar } from "react-native";
import styled from "styled-components";

const StatusBarHeight = StatusBar.currentHeight;

export const Header = styled.SafeAreaView`
    flex: 1;    
    align-items: start;
    justify-content: flex-start;
    margin-left: 15px;
    margin-bottom: 15px; 
    width: 100%;
    max-height: 60px;
    margin-top: ${StatusBarHeight};
`;

export const ContainerHeader = styled.View`
    align-items: center;
    flex-direction: row;
`

export const BtnDrawer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
` 

export const Title = styled.Text`
    font-size: 25px;
    color: #000;
    margin-left: 15px;
    

`
