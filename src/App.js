import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import Form from "./components/Pizza";
import Home from "./components/Home";
import Order from "./components/Order";
import * as yup from 'yup';
import schema from './validation/formSchema';
import axios from "axios";

const App = () => {
  const initialFormValues = {
    name: '',
    extra: '',
    size: '',
    pepperoni: false,
    sausage: false,
    cheese: false,
    chicken: false,
  }

  const url = 'http://localhost:3000'

  const initialFormErrors = {
    name: '',
    extra: '',
    size: '',
  }

  const initialData = [];
  const initialDisabled = true

  const [data, setData] = useState(initialData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues])

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const postNewData = newData => {
    axios.post(url, newData)
      .then(res => {
        setData([res.data, ...data]);
        console.log(res)
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const formSubmit = () => {
    const newData = {
      name: formValues.name.trim(),
      extra: formValues.extra.trim(),
      size: formValues.password,
      toppings: ['pepperoni', 'sausage', 'cheese', 'chicken'].filter(topping => !!formValues[topping])
    }
    postNewData(newData);
  }

  return (
    <>
      <h1>Mountain Eats</h1>

      <div id="magicForm">
      <p>
      <Route path="/" >
          <Home />
      </Route>
      </p>

      <p>
      <Route path="/pizza" >
          <Form
            values={formValues}
            disabled={disabled}
            errors={formErrors}
            change={inputChange}
            submit={formSubmit} />
          {
            data.map(order => {
              return (
                  <Order key={order.id} details={order} />
              )
            })
          }
      </Route>
      </p>
      </div>
    </>

  );
};
export default App;
