import React from 'react'

const Form = (props) => {

  console.log(props)
  //props from App
 const {update, submit} = props;

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
   <h1>The form is rendering</h1> 

    {/* <button disabled={disabled}>submit</button>

    <div>
      <div>{errors.firstName}</div>
      <div>{errors.lastName}</div>
      <div>{errors.email}</div>
      <div>{errors.passWord}</div>
      <div>{errors.tos}</div>
    </div> */}
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