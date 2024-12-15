import React from 'react'
import useForm from '../hooks/useForm'
import Validate from '../util/Validate'
const Formsignup = () => {
   const {handleChange,values,handleSubmmit,errors}=useForm(Validate)
  return (
    <div className='form-content-right'>
      <form action="" className="form" onSubmit={handleSubmmit}>
        <h1>Get Started with us today create your Account</h1>
        <div className="form-inputs">
            <label htmlFor="user" className="form-label">
                Username
            </label>
            <input 
            id='user'
            type="text"
            name='Username'
            className='form-input'
            placeholder='Username'
            onChange={handleChange}
            value={values.Username} />
            {errors.Username && <p>{errors.Username}</p>}
            
        </div>

        <div className="form-inputs">
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input 
            type="text"
            name='Email'
            className='form-input'
            placeholder='Email' 
            id='email'
            onChange={handleChange}
            value={values.Email}
            />
            {errors.Email && <p>{errors.Email}</p>}
        </div>

        <div className="form-inputs">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input 
            type="text"
            name='Password'
            className='form-input'
            placeholder='Passwords' 
            id='password'
            onChange={handleChange}
            value={values.Password}
            />
            {errors.Password && <p>{errors.Password}</p>}
        </div>

        <div className="form-inputs">
            <label htmlFor="confirm-password" className="form-label">
                Confirm Password
            </label>
            <input 
            type="text"
            name='cPassword'
            className='form-input'
            placeholder=' Confirm Passwords' 
            id='confirm-password'
            onChange={handleChange}
            value={values.cPassword}
            />
            {errors.cPassword && <p>{errors.cPassword}</p>}
        </div>

        <button className='form-input-button ' type='submit'>SignUp</button>
        <span className='form-input-login'>
            Already have an account ? Login <a href="www.google.com">here</a>
        </span>

      </form>
    </div>
  )
}

export default Formsignup
