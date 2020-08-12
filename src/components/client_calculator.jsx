import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import {
  CalculatorContainer,
  Title,
  Text,
  UserInput,
  PercentageContainer,
  CalculateButton,
} from './client_calculator.style';

// function calculateBill() {
//   const billAmt = document.getElementById('billamt').value;
//   const garcomPerc = document.getElementById('garcomPerc').value;
//   let numOfPeople = document.getElementById('peopleamt').value;

//   // validate input
//   if (billAmt === '' || garcomPerc == 0) {
//     alert('Please enter values');
//     return;
//   }
//   // Check to see if this input is empty or less than or equal to 1
//   if (numOfPeople === '' || numOfPeople <= 1) {
//     numOfPeople = 1;
//     document.getElementById('each').style.display = 'none';
//   } else {
//     document.getElementById('each').style.display = 'block';
//   }

//   // Calculate tip
//   let total = (Number(billAmt) + billAmt * garcomPerc) / numOfPeople;
//   // round to two decimal places
//   // total = Math.round(total * 100) / 100;
//   // next line allows us to always have two digits after decimal point
//   total = total.toFixed(2);
//   // Display the tip
//   document.getElementById('totalBill').style.display = 'block';
//   document.getElementById('tip').innerHTML = total;
// }

// // Hide the tip amount on load
// document.getElementById('totalBill').style.display = 'none';
// document.getElementById('each').style.display = 'none';

// // click to call function
// document.getElementById('calculate').onclick = function () {
//   calculateBill();
// };

function ClientCalculator() {
  const schema = yup.object().shape({
    bill: yup.number().required(),
    percentage: yup.string().required(),
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
        <CalculateButton type="submit" onSubmit={onSubmit}>
          Calculate!
        </CalculateButton>
      </CalculatorContainer>
    </div>
  );
}

export default ClientCalculator;
