import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  CalculatorContainer,
  Title,
  Text,
  FormGroup,
  UserInput,
  CalculateButton,
} from './CustomerCalculator.style';

function CustomerCalculator() {
  const schema = yup.object().shape({
    bill: yup.number().required(),
    percentage: yup.number(),
    people: yup.number().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = InputResult => {
    const CalculationResult =
      (InputResult.bill * (InputResult.percentage / 100) + InputResult.bill) /
      InputResult.people;
    toast(`💵  ${CalculationResult} per person`);
  };

  return (
    <div>
      <CalculatorContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Split The Bill</Title>
        <Text>How much is the bill?</Text>
        <FormGroup>
          <UserInput
            name="bill"
            type="text"
            ref={register}
            placeholder="Bill Amount"
          />
          {errors.bill && 'Please, inform the total of your bill'}
        </FormGroup>
        <Text>How much is the bill?</Text>
        <FormGroup>
          <UserInput
            name="percentage"
            type="text"
            placeholder="% of the waiter"
            ref={register}
          />
          {errors.people && 'No tips for the waiter?'}
        </FormGroup>
        <Text>How many people are sharing the bill?</Text>
        <FormGroup>
          <UserInput
            name="people"
            type="text"
            ref={register}
            placeholder="Bill Amount"
          />
          {errors.people && 'How many people?'}
        </FormGroup>
        <CalculateButton type="submit" onSubmit={onSubmit}>
          Calculate!
        </CalculateButton>
      </CalculatorContainer>
    </div>
  );
}

export default CustomerCalculator;
