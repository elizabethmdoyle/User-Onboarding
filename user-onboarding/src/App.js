
import React ,{ useState, useEffect}from 'react'
import axios from 'axios'
import * as yup from 'yup' 
import formSchema from "./validation/formSchema"
import './App.css';
import Form from './components/Form'
import User from "./components/User"


const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: "",
};

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: "",
}

const initialUsers = [];
const initialDisabled = true;
 
const App = () => {

  //state
  const [users, setUsers] = useState(initialUsers)
  const[formValues, setFormValues] = useState(initialFormValues)
  //state for errors
  const[formErrors, setFormErrors] = useState(initialFormErrors)
  //for schema
  const [disabled, setDisabled] = useState(initialDisabled)       
//helper functions

const getUsers = () => {
      axios.get(`https://reqres.in/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
}

const postUsers = (newUser) => {
      axios.post(`https://reqres.in/api/users`, newUser)
      .then(res => 
        setUsers([res.data, ...users]), 
        setFormValues(initialFormValues))
      .catch(err => console.error(err))
}


//event handlers

const updateForm = (name, value) => {
  yup
  .reach(name, value)
  .validate(value)

  setFormValues({
    ...formValues, [name]: value
  })
}

const submitForm = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService
    }
    postUsers(newUser)
}

//side effects

useEffect(() => {
  getUsers()
}, [])


useEffect(() => {
  formSchema.isValid(formValues)
    .then(valid => setDisabled(!valid))
}, [formValues])




  return (
    <div className="App">
      The app is rendering
    <Form 
    values={formValues}
    update={updateForm}
    submit={submitForm}
    errors={formErrors}
    
    />

{
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }


    </div>
  );
}

export default App;
