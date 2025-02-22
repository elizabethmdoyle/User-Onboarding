import React from 'react'

const Form = (props) => {

  console.log(props)
  //props from App
 const {update, submit, errors} = props;

//prop values for the form
  const {firstName, lastName, email, password, tos} = props.values

const onChange = (evt) => {
    const {name, value, checked, type } = evt.target;
  
    const valueToUse = type === "checkbox" ? checked : value
  
    update(name, valueToUse)
    
   }

  const onSubmit = (evt) => {
  evt.preventDefault()
  submit()

 }



  return (
    <div>
  
      <p>{errors.firstName}</p>
      <p>{errors.lastName}</p>
      <p>{errors.email}</p>
      <p>{errors.passWord}</p>
      <p>{errors.tos}</p>
    
    <form onSubmit={onSubmit}>
      <label> First Name
        <input 
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label>
      <label> Last Name
        <input 
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Email Address
        <input 
            type="text"
            name="email"
            value={email}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Password
        <input 
            type="text"
            name="password"
            value={password}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Terms Of Service
        <input 
            type="checkbox"
            name="tos"
            value={tos}
            onChange={onChange}
            checked={tos}
        
        />
      </label>  
     
    <input type="submit" value="Add a User"/>

    </form>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  );
}

export default Form;