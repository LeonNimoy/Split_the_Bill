import React from 'react';

import {
  CalculatorContainer,
  Title,
  Text,
  UserInput,
} from './client_calculator.style';

function ClientCalculator() {
  return (
    <CalculatorContainer>
      <Title>Split The Bill</Title>
      <Text>How much is the bill?</Text>
      <Text>
        $
        <UserInput placeholder="Bill Amount" />
      </Text>
    </CalculatorContainer>
  );
}

export default ClientCalculator;
