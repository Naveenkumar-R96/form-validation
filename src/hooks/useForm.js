import React, { useState } from 'react'

const useForm = (Validate) => {
  const [values,setValues]=useState({
    Username:'',
    Email:'',
    Password:'',
    cPassword:'',
  })
  const [errors,setErrors]=useState({});

  const handleChange=(e)=>{
    
    const {name,value}=e.target;

    setValues((preveValues)=>{
        return{
            ...preveValues,
            [name]:value,
        }
    })

}

const handleSubmmit = (e)=>{
    e.preventDefault()

    setErrors(Validate(values))
}
return {handleChange,values,handleSubmmit,errors}
}

export default useForm
