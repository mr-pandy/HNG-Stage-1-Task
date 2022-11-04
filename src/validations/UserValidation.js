import * as yup from 'yup';

export const userSchema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    // password: yup.string().min(4).max(10).required(),
    email: yup.string().email("input a valid email address").required("email is required"),
    message: yup.string().required("Please enter a message"),
    checkbox: yup.boolean().oneOf([true], "please check the box")
})