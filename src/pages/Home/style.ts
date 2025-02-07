import styled from "styled-components";

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
    align-items: start;
`;
export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 70px;
`

export const Title = styled.Text`
    margin-bottom: 28px;
    
`;

export const BtnLogOut = styled.TouchableOpacity`
    background-color: #ff0000;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    
    margin-top: 10px;
`

export const BalanceList = styled.FlatList`
    max-height: 190px;

`
export const Area = styled.View`
    
    background-color: #fff;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    padding-top: 14px;
    padding-left: 14px;
    margin-top: 14px;
    
    flex-direction: row;
    justify-items: center;
    align-items: baseline;

`

export const List = styled.FlatList`
    flex: 1;
    background-color: #fff;

`
