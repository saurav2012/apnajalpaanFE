import React, { useState ,useEffect} from "react";
import "./SignUpForm.css";

const SignUpForm = () => {

  const initialValues = {firstname: "", lastname: "", email: "", username: "", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({ ...formValues, [name]: value});
    console.log(formValues);

  }
    const handleSubmit = async (e) => {
    e.preventdefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.username) {
      errors.username = "Firstname is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
    {isSubmit && <div class="alert alert-success" role="alert">
    This is a success alert—check it out!
   </div>}
      
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3 className="d-flex justify-content-center mb-4">Sign Up</h3>
            <div className=" mb-3">
              <label className="mb-1" for="validationServer01">
                First name
              </label>
              <input
                type="text"
                className="form-control is-valid"
                name="firstname"
                id="validationServer01"
                placeholder="First name"
                value={ formValues.firstname}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">{formErrors.firstname}</div>
            </div>
            <div className=" mb-3">
              <label className="mb-1" for="validationServer02">
                Last name
              </label>
              <input
                type="text"
                className="form-control is-valid"
                name="lastname"
                id="validationServer02"
                placeholder="Last name"
                value={ formValues.lastname}
                onChange={handleChange}
                required
              />
              {/* <div className="valid-feedback">Looks good!</div> */}
            </div>
            <div className=" mb-3">
              <label className="mb-1" for="validationServer04">
                Email
              </label>
              <input
                type="text"
                className="form-control is-invalid"
                name="email"
                id="validationServer04"
                placeholder="Email"
                value={ formValues.email}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">{formErrors.email}</div>
            </div>
            <div className=" mb-3">
              <label className="mb-1" for="validationServerUsername">
                Username
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control is-invalid"
                  name="username"
                  id="validationServerUsername"
                  placeholder="Username"
                  value={ formValues.username}
                  onChange={handleChange}
                  aria-describedby="inputGroupPrepend3"
                  required
                />
                <div className="invalid-feedback">{formErrors.username}</div>
              </div>
            </div>
            <div className=" mb-3">
              <label className="mb-1" for="validationServer03">
                Password
              </label>
              <input
                type="text"
                className="form-control is-invalid"
                name="password"
                onChange={handleChange}
                id="validationServer03"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">
                {formErrors.password}
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  value=""
                  id="invalidCheck3"
                  required
                />
                <label className="form-check-label" htmlFor ="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback mb-3">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="d-grid mb-2">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
          <div className="d-flex ">
            <p>Already Registered?</p>
            <span className="signin">
              <a href="#">Sign In</a>
            </span>
          </div>
        </div>
      </>
      )}

      

  
  


export default SignUpForm;
