import * as yup from 'yup';

// The Schema Checker

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    extra: yup
        .string()
        .trim(),
    size: yup
    .string()
    .trim(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    cheese: yup.boolean(),
    chicken: yup.boolean()
})

export default schema;
