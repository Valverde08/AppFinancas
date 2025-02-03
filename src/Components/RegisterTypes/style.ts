import styled from "styled-components";

export const RegisterTypesContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left:5% ;
    padding-right:5%;
    justify-content: space-between;
    margin-bottom: 20px;

`

export const RegisterType = styled.TouchableOpacity`
    width: 48%;
    height: 40px;
    background-color: ${props => props.checked ? '#fff' : '#e7e7e7'};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    box-shadow: 0px 0px 5px #000;
    elevation: 5;
    flex-direction: row;
    border-width: ${props => props.checked ? '2px' : '0px'};

`
export const RegisterTypeText = styled.Text`
    font-size: 20px;
    color: #000;
`