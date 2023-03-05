import React from 'react'
import './SignInForm.css'
const SignInForm = () => {
    return(
      <div className='auth-wrapper container'>
      <div className='auth-inner'>
        <form>
          <h3>Log In</h3>
          <div className='mb-2'>
            <label className='mb-1'>Email Address</label>
            <input
            type="email"
            className='form-control'
            placeholder='Enter Email'
            />
          </div>
          <div className='mb-2'>
            <label className='mb-1'>Password</label>
            <input
            type="password"
            className="form-control"
            placeholder='Enter Password'
            />
          </div>
          <div className="mb-2">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label m-1" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
      </div>

    )
  }

export default SignInForm