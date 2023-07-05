import React from 'react'

const Form = (props) => {

 const {value, update, submit, errors, disabled} = props;


const onChange = (evt) => {
  const {name, value, checked, type } = evt.target;

  const valueToUse = type === checked ? true : value

  update(name, valueToUse)
  
 }

 const onSubmit = (evt) => {
  evt.preventDefault()
  submit()

 }



  return (
    <div>
    The form is rendering

    <button disabled={disabled}>submit</button>

    <div>
      <div>{errors.firstName}</div>
      <div>{errors.lastName}</div>
      <div>{errors.email}</div>
      <div>{errors.passWord}</div>
      <div>{errors.termsOfService}</div>
    </div>
    <form onSubmit={onSubmit}>
      <label> First Name
        <input 
            type="text"
            value={value.firstName}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label>
      <label> Last Name
        <input 
            type="text"
            value={value.lastName}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Email Address
        <input 
            type="text"
            value={value.email}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Password
        <input 
            type="text"
            value={value.password}
            placeholder="Please type your First Name"
            onChange={onChange}
        
        />
      </label> 
      <label> Terms Of Service
        <input 
            type="checkbox"
            value="termOfService"
            onChange={onChange}
            checked={value.termsOfService}
        
        />
      </label>  
     


    </form>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  );
}

export default Form;