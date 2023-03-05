import React from 'react';
import './SignUpForm.css';
const SignUpForm = () => {
  return(  
    <div className='auth-inner'>
    <form>
      <h3 className='d-flex justify-content-center mb-4'>Sign Up</h3>
      <div class=" mb-3">
        <label for="validationServer01">First name</label>
        <input type="text" class="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required/>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class=" mb-3">
        <label for="validationServer02">Last name</label>
        <input type="text" class="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required/>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class=" mb-3">
        <label for="validationServer04">Email</label>
        <input type="text" class="form-control is-invalid" id="validationServer04" placeholder="Email" required/>
        <div class="invalid-feedback">
          Please provide a valid email.
        </div>
      </div>
      <div class=" mb-3">
        <label for="validationServerUsername">Username</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
          </div>
          <input type="text" class="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
          <div class="invalid-feedback">
            Please choose a username.
          </div>
        </div>
      </div>
      <div class=" mb-3">
        <label for="validationServer03">Password</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" placeholder="Password" required/>
        <div class="invalid-feedback">
          Please provide a valid Password.
        </div>
      </div>
    <div class="form-group">
      <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
        <label class="form-check-label" for="invalidCheck3">
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback mb-3">
          You must agree before submitting.
        </div>
      </div>
    </div>
    <div className='d-grid'>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </div>   
  </form>
  </div>
  )
}

export default SignUpForm