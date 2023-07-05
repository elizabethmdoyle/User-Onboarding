import React ,{ useState, useEffect}from 'react'

const Form = (props) => {

 const {value, update, submit} = props;


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
    <>
    <div>
    The form is rendering
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
            value={value.termsOfService}
            onChange={onChange}
            checked={checked}
        
        />
      </label>  
      <input type="submit" value="Submit"></input>


    </form>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Y  
       </>
  );
}

export default Form;