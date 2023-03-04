import React from 'react'

const signInForm = () => {
    return(
      <div className=' container'>
      <div className='row justify-content-md-center   bg-light'>
        <form className='col col-lg-2'>
          <h3>Sign In</h3>
          <div className='mb-3'>
            <label>Email Address</label>
            <input
            type="email"
            className='form-control'
            placeholder='Enter Email'
            />
          </div>
          <div className='mb-3'>
            <label>Password</label>
            <input
            type="password"
            className="form-control"
            placeholder='Enter Password'
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
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

export default signInForm