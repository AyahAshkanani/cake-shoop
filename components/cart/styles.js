import styled from "styled-components";
import { Entypo } from '@expo/vector-icons'; 

export const TotalPrice = styled.Text`
color: ${(props)=> props.theme.pink};
font-size: 15px;
font-weight: bold;
margin-left: 10px;
`;

export const CartButtonStyled = styled(Entypo)`
padding-left: -50px;
`;