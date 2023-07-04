
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
    <Form />
    </div>
  );
}

export default App;
