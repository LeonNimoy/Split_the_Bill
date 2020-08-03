import styled from 'styled-components';

export const CalculatorContainer = styled.div `
height: 525px;
    width: 360px;
    margin: 100px auto;
    background: rgb(247,247,247);
    box-shadow: 0 0 3px rgb(2,0,36,1) 0%;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius:
`;
export const Title = styled.p `
background:#242323;
color: white;
margin: 0;
padding: 10px 100px;
text-transform: uppercase;
font-size: 18px;
font-weight: normal;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`;
export const Text = styled.p `
padding-left: 20px;
`;
export const UserInput = styled.input `
font-size: 14px;
/*color: #2980b9;*/
color: red;
background-color: #f7f7f7;
width: 60%;
padding: 5px 5px 8px 8px;
margin-left: 5px;
`;
