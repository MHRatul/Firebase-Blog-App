import React, { useState } from 'react';
import { toast } from 'react-toastify';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  passsword: "",
  confirmPassword: ""
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

   const handleAuth =async (e) => {
    e.preventDefault();
    if(!signUp) {

    } else {
      if (password !== confirmPassword){
        return toast.error("passsword don't match")''
      }
    }
   }

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div className="text-center heading py-2">
            {!signUp ? "Sign-In" : "Sign-Up"}
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className='col-10 col-md-8 col-lg-6'>
            <form className='row' onSubmit={handleAuth}>
              {signUp && (
                <>
                  <div className='col-6 py-3'>
                    <input
                      type='text'
                      className="form-control input-rext-box"
                      placeholder="First Name"
                      name='firstName'
                      value={firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className='col-6 py-3'>
                    <input
                      type='text'
                      className="form-control input-rext-box"
                      placeholder="Last Name"
                      name='lastName'
                      value={lastName}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}
              <div className='col-12 py-3'>
                <input
                  type='email'
                  className="form-control input-rext-box"
                  placeholder="Email"
                  name='email'
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className='col-12 py-3'>
                <input
                  type='password'
                  className="form-control input-rext-box"
                  placeholder="password"
                  name='password'
                  value={password}
                  onChange={handleChange}
                />
              </div>
              {signUp &&(
                <div className='col-12 py-3'>
                <input
                  type='password'
                  className="form-control input-rext-box"
                  placeholder="Confirm password"
                  name='confirmpassword'
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
              )}
          
              <div className='col-12 py-3 text-center'>
                <button className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`} type='submit'>
                  {!signUp ? "sign-in" : "Sign-up"}
                </button>
              </div>
            </form>
            <div>
              {!signUp ? (
                <>
                  <div className='text-center justify-content-center mt-2 pt-2'>
                    <p className='small fw-bold mt-2 p-1 mb-0'>
                      Don't have an account ?&nbsp;
                      <span className='link-danger' style={{ textDecoration: "none", cursor: "pointer" }}
                        onClick={() => setSignUp(true)}
                      >
                        Sign Up
                      </span>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className='text-center justify-content-center mt-2 pt-2'>
                    <p className='small fw-bold mt-2 p-1 mb-0'>
                      Already have an account ?&nbsp;
                      <span
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                          color: "#298af2",
                        }}
                        onClick={() => setSignUp(false)}
                      >
                        Sign in
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth;