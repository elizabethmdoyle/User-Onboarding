import * as yup from 'yup';

const formSchema = yup.object().shape({
        firstName: yup
            .string()
            .required("Please Enter Your First Name")
            .min(3, "A minimum of 3 characters is required"),
        lastName: yup
            .string()
            .required("Please Enter Your First Name")
            .min(3, "A minimum of 3 characters is required"),
        email: yup
            .string()
            .email("Please Enter A Valid Email Address ")
            .required("Please Enter A Valid Email Address "),
        password: yup
            .string()
            .password("A password is Required ")
            .min(8, "Password mist be at least 8 characters long"),
        termsOfService: yup.boolean()
            
        
})

export default formSchema