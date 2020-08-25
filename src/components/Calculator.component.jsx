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
} from './Calculator.style';

function CustomerCalculator() {
  const schema = yup.object().shape({
    bill: yup.number().required(),
    percentage: yup.number(),
    people: yup.number().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    const result =
      (data.bill * (data.percentage / 100) + data.bill) / data.people;
    toast(`💵  ${result} por pessoa`);
    e.target.reset();
  };

  return (
    <div>
      <CalculatorContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Divida a conta</Title>
        <Text>Qual o valor da conta?</Text>
        <FormGroup>
          <UserInput
            name="bill"
            type="text"
            ref={register}
            placeholder="Valor da conta"
          />
          {errors.bill && 'Por favor, informe o valor da conta'}
        </FormGroup>
        <Text>Qual o valor da gorjeta?</Text>
        <FormGroup>
          <UserInput
            name="percentage"
            type="text"
            placeholder="% do garçon"
            ref={register}
          />
          {errors.people && 'Nenhuma gorjeta para o garçon?'}
        </FormGroup>
        <Text>Quantas pessoas estão dividindo a conta?</Text>
        <FormGroup>
          <UserInput
            name="people"
            type="text"
            ref={register}
            placeholder="Quantidade de pessoas"
          />
          {errors.people && 'Quantas pessoas?'}
        </FormGroup>
        <CalculateButton type="submit" onSubmit={onSubmit}>
          Calcular!
        </CalculateButton>
      </CalculatorContainer>
    </div>
  );
}

export default CustomerCalculator;
