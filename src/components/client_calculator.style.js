import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

export const CalculatorContainer = styled(Form)`
  height: 525px;
  width: 360px;
  margin: 100px auto;
  background: rgb(247, 247, 247);
  box-shadow: 0 0 3px rgb(2, 0, 36, 1) 0%;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: ;
`;
export const Title = styled.p`
  background: rgb(36, 35, 35);
  color: white;
  margin: 0;
  padding: 10px 100px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: normal;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const Text = styled.p`
  padding-left: 20px;
`;
export const FormGroup = styled(Form.Group)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  color: rgb(255, 0, 0);
`;

export const UserInput = styled(Form.Control)`
  font-size: 14px;
  color: rgb(0, 0, 0);
  background-color: rgb(247, 247, 247);
  width: 60%;
  padding: 5px 5px 8px 8px;
  margin-left: 5px;
`;
export const PercentageContainer = styled.select`
  padding: 13px 13px 20px 20px;
  margin-left: 35px;
  font-size: 16px;
`;
export const CalculateButton = styled(Button)`
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  margin: 20px auto;
  background: rgb(245, 160, 90);
  border-radius: 5px;
  width: 200px;
  height: 50px;
  font-size: 17px;
  color: rgb(255, 255, 255);
  :hover {
    background: rgb(76, 40, 39);
  }
`;
