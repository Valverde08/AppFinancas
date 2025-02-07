import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #f0f4ff;
    align-items: center;
    gap:5px;
    

`

export const ContentConteiner = styled.View`
   align-items: center;
   gap: 10px;
   margin-bottom: 14px;

`

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
`
export const StandardLabel = styled.Text`
    font-size: 20px;
    color:${props=> props.cl};
    
    text-align:center;



`
export const Btn= styled.TouchableOpacity`

    width:300px;    
    background-color: ${props=>props.bg};
    border-color: ${props=>props.bc};
    border-width:1px;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 14px;
    padding: 5px;
    
    

`