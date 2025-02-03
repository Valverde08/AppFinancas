import styled from "styled-components";


export const Container = styled.View`
    flex: 1;
    width: 300px;
    margin-left: 14px;
    margin-top: 14px;
    justify-content: center;
    align-items: flex-start;
    border-radius: 5px;
    padding-left: 14px;
    background-color: ${props => props.bg};

`

export const Label = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 5px;

`

export const AccountBalance = styled.Text`
    font-size: 28px;
    color: #fff;
    margin-bottom: 5px;


`