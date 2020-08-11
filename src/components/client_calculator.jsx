import React from 'react';

import {
  CalculatorContainer,
  Title,
  Text,
  UserInput,
  PercentageContainer,
  CalculateButton,
} from './client_calculator.style';

function ClientCalculator() {
  return (
    <div>
      <CalculatorContainer>
        <Title>Split The Bill</Title>
        <Text>How much is the bill?</Text>
        <Text>
          $
          <UserInput placeholder="Bill Amount" />
        </Text>
        <Text>How much is the bill?</Text>
        <PercentageContainer>
          <option disabled selected value="0">
            -- Choose an % --
          </option>
          <option value="0.3">30&#37;</option>
          <option value="0.2">20&#37;</option>
          <option value="0.15">15&#37;</option>
          <option value="0.1">10&#37;</option>
          <option value="0.05">5&#37;</option>
        </PercentageContainer>
        <Text>How many people are sharing the bill?</Text>
        <Text>
          <UserInput placeholder="Bill Amount" />
          people
        </Text>
        <CalculateButton type="button">Calculate!</CalculateButton>
      </CalculatorContainer>
    </div>
  );
}

export default ClientCalculator;
