import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
// import { toast } from 'react-toastify';

import {
  CalculatorContainer,
  Title,
  Text,
  FormGroup,
  UserInput,
  PercentageContainer,
  CalculateButton,
} from './client_calculator.style';

function ClientCalculator() {
  const schema = yup.object().shape({
    bill: yup.number().required(),
    people: yup.number().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => console.log(data);

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
          <PercentageContainer>
            <option defaultValue="0">-- Choose an % --</option>
            <option value="0.3">30&#37;</option>
            <option value="0.2">20&#37;</option>
            <option value="0.15">15&#37;</option>
            <option value="0.1">10&#37;</option>
            <option value="0.05">5&#37;</option>
          </PercentageContainer>
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

export default ClientCalculator;
