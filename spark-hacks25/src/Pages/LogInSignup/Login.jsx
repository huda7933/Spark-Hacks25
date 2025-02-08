import React from 'react';

import './Login.css';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer className="my-5 gradient-form" style={{ backgroundColor: '#f0f0f0' }}>
      <MDBRow className="d-flex justify-content-center">
      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-5 p-4" style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <div className="text-center">
            <img src="https://png.pngtree.com/png-vector/20221206/ourmid/pngtree-world-earth-logo-vector-design-png-image_6514310.png"
              style={{width: '185px'}} 
               alt="logo"  />
             <h4 className="mt-1 mb-5 pb-1 black-text" style={{ fontSize: '20px' }}>
              Support your fellow local businesses.
            </h4>
          </div>

          <p className ="black-text">Please login to your account.</p>
          
          <MDBInput wrapperClass="mb-4" 
             placeholder="Email address" 
             id="form1" 
             type="email" 
             style={{ width: '230px', backgroundColor: 'white', color: 'gray'}}
             />
          <MDBInput wrapperClass="mb-4" 
             placeholder="Password" 
             id="form2" 
             type="password" 
             style={{ width: '230px', backgroundColor: 'white', color: 'gray'}}
             />
            
            <div className="text-center mb-4">
              <MDBBtn className="long-gradient-box"
              tag="a" href="#!"
              >Login</MDBBtn>
            </div>

            <div className="text-center mb-4">
              <a href="#!" className="gray-text-link">Forgot password?</a>
            </div>

            <div className="text-center pt-1 mb-5 pb-1">
              <p className="text-muted black-text">Don't have an account?</p>
              <MDBBtn className="gradient-outline">Create an account for your business.</MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-box h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
            <h4 className="mb-4" style={{ fontSize: '20px' }}>You are more than an entrepreneur.
            </h4>
              <p class="small mb-0"> You are a valuable member of the community; part of an intrinsic web of culture and history. We value your service and hard work,
                and wish to provide resources to facilitate collaboration within the local scene. Please join us in our mission to reduce waste and support our fellow businesses. 
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;