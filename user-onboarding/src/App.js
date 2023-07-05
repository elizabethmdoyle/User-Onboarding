
import React ,{ useState, useEffect}from 'react'
import axios from 'axios'
import * as yup from 'yup' 
import './App.css';
import Form from './components/Form'


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
 
 
const App = () => {

  const [user, setUser] = useState()
  const[formValues, setFormValues] = useState(initialFormValues)

  const[formErrors, setFormErrors] = useState(initialFormErrors)


const getUsers = () => {
      axios.get(`https://reqres.in/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
}

const postUsers = () => {
      axios.post(`https://reqres.in/api/users`, users)
      .then(res => 
        setUsers(res.data)
        setFormValues(initialFormErrors))
      .catch(err => console.error(err))
}




const submitForm = () => {

}

const updateForm = () => {
  
}



  /* 
We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [ ] Name (first_name, last_name)
- [ ] Email
- [ ] Password
- [ ] Terms of Service (checkbox)
- [ ] A Submit button to send our form data to the server.
*/




  return (
    <div className="App">
    <Form 
    values={formValues}
    // update={updateForm}
    // submit={submitForm}
    
    />
    </div>
  );
}

export default App;
