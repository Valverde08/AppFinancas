import styled from "styled-components";

export const Container = styled.View`
    background-color:#f0f4ff;
    margin-top:14px;
    margin-right: 14px;
    margin-left: 14px;
    padding:14px;
    gap:14px;
    border-radius:5px;
   



`
export const TypeCOntainer = styled.View`
    flex-direction:row;
    background-color:${props => props.bg};
    width:110;
    gap:5;
    padding:3px;
    border-radius:5px;
    

`

export const HistoricalText = styled.Text`
    font-size:24px;
    font-weight:600;

`

export const TypelText = styled.Text`
    font-size:16px;
    font-weight:600;
    color:#fff;

`


