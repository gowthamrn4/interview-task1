import React from 'react';
import { Formik, Form, ErrorMessage } from "formik";
import { BioFormValidationSchema } from '../helper/validation';
import { PropTypes } from "prop-types";

function BioForm({ BioFormInitValue, _handleSubmit, isUpdateForm = false  }) {

  return (
    <div className={`${isUpdateForm && 'p-4'}`}>
        <Formik
            initialValues={BioFormInitValue} 
            validationSchema={BioFormValidationSchema}
            onSubmit={_handleSubmit}>
            {(formik) => (
              <Form role="form"> 
                    <div className="form-group">
                    <label className="reg_txt">Name <span>*</span></label>
                    <div className="controls form-inline">
                      <div className='row'>
                          <div className='col-md-6 col-sm-12 col-12 mb-4 mb-md-2 mb-lg-0'>
                              <input type="text" 
                                className={`input-name ${formik.errors.firstName && formik.touched.firstName && 'border-danger'}`} 
                                placeholder="First" 
                                name="firstName" 
                                value={formik.values.firstName}
                                onChange={formik.handleChange} />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="color-danger f-16 mt-10"
                              />
                          </div>
                          <div className='col-md-6 col-sm-12'>
                              <input type="text" 
                                className={`input-name ${formik.errors.lastName && formik.touched.lastName && 'border-danger'}`} 
                                placeholder="Last" 
                                name="lastName" 
                                value={formik.values.lastName}
                                onChange={formik.handleChange} />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="color-danger f-16 mt-10"
                              />
                          </div>
                      </div>       
                    </div>                        
                    </div>

                    <div className="clearfix"></div>

                    <div className="form-group">
                       <label className="reg_txt">Email  <span>*</span></label>
                       <div className='row'>
                          <div className='col-md-12 col-sm-12'>
                                  <input type="text" 
                                    className={`input-name ${formik.errors.email && formik.touched.email && 'border-danger'}`}
                                    placeholder="Email" 
                                    name="email" 
                                    value={formik.values.email}
                                    onChange={formik.handleChange} />
                                  <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="color-danger f-16 mt-10"
                                  />
                          </div>
                       </div>
                    </div>

                    <div className="clearfix"></div>
                    <label className="reg_txt">Phone Number  <span>*</span></label>
                    <div className="form-group">
                      <div className='row'>
                          <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                              <input 
                                type="text" 
                                className={`text input-name1 text-center ${formik.errors.phone_number_field_one && formik.touched.phone_number_field_one && 'border-danger'}`}
                                placeholder='XXXX' 
                                name='phone_number_field_one' 
                                maxLength={4}
                                value={formik.values.phone_number_field_one}
                                onChange={formik.handleChange} />
                          </div>
                          <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                             <input 
                                type="text" 
                                className={`text input-name1 text-center ${formik.errors.phone_number_field_two && formik.touched.phone_number_field_two && 'border-danger'}`}
                                placeholder='XXXX' 
                                name='phone_number_field_two' 
                                maxLength={3}
                                value={formik.values.phone_number_field_two}
                                onChange={formik.handleChange} />
                          </div>
                          <div className='col-4 col-sm-4 col-md-4 col-lg-4'>
                             <input 
                                type="text" 
                                className={`text input-name1 text-center ${formik.errors.phone_number_field_three && formik.touched.phone_number_field_three && 'border-danger'}`}
                                placeholder='XXXX' 
                                name='phone_number_field_three' 
                                maxLength={3}
                                value={formik.values.phone_number_field_three}
                                onChange={formik.handleChange} />
                          </div>
                      </div>
                        <>
                          {
                            formik.errors.phone_number_field_one && formik.touched.phone_number_field_one || formik.errors.phone_number_field_two && formik.touched.phone_number_field_two || formik.errors.phone_number_field_three && formik.touched.phone_number_field_three ? (
                              <div className="color-danger f-16 mb-2">Phone number is invalid</div>
                            ) : ""
                          }
                        </>
                    </div>
                    <div className="clearfix"></div>

                    <div className="form-group">
                    <label className="reg_txt">Address  <span>*</span></label>

                    <div className='row'>
                          <div className='col-md-12 col-sm-12 mb-4'>
                             <input type="text" 
                              className={`form-register text ${formik.errors.address1 && formik.touched.address1 && 'border-danger'}`}
                              placeholder="Line 1" 
                              name="address1"
                              value={formik.values.address1}
                              onChange={formik.handleChange} />
                              <ErrorMessage
                                    name="address1"
                                    component="div"
                                    className="color-danger f-16 mt-10"
                              />
                          </div>
                          <div className='col-md-12 col-sm-12'>
                          <input type="text" 
                              className={`form-register text ${formik.errors.address2 && formik.touched.address2 && 'border-danger'}`}
                              placeholder="Line 1" 
                              name="address2"
                              value={formik.values.address2}
                              onChange={formik.handleChange} />
                              <ErrorMessage
                                    name="address2"
                                    component="div"
                                    className="color-danger f-16 mt-10"
                              />
                          </div>
                    </div>                    
                    </div>

                    <div className="form-group">                    
                        <div className="controls form-inline">       
                            <div className='row'>
                                  <div className='col-md-6 col-sm-12 col-12 mb-4 mb-md-2 mb-lg-0'>
                                      <input type="text" 
                                        className={`input-name ${formik.errors.city && formik.touched.city && 'border-danger'}`} 
                                        placeholder="City" 
                                        name="city" 
                                        value={formik.values.city}
                                        onChange={formik.handleChange} />
                                      <ErrorMessage
                                        name="city"
                                        component="div"
                                        className="color-danger f-16 mt-10"
                                      />
                                  </div>
                                  <div className='col-md-6 col-sm-12'>
                                      <input type="text" 
                                        className={`input-name ${formik.errors.state && formik.touched.state && 'border-danger'}`} 
                                        placeholder="State" 
                                        name="state" 
                                        value={formik.values.state}
                                        onChange={formik.handleChange} />
                                      <ErrorMessage
                                        name="state"
                                        component="div"
                                        className="color-danger f-16 mt-10"
                                      />
                                  </div>
                              </div>
                        </div>                        
                    </div>

                    <div className="form-group">                    
                        <div className="controls form-inline">       
                            <div className='row'>
                                  <div className='col-md-6 col-sm-12 col-12 mb-4 mb-md-2 mb-lg-0'>
                                      <input type="text" 
                                        className={`input-name ${formik.errors.zipCode && formik.touched.zipCode && 'border-danger'}`} 
                                        placeholder="Zip Code" 
                                        name="zipCode" 
                                        value={formik.values.zipCode}
                                        onChange={formik.handleChange} />
                                      <ErrorMessage
                                        name="zipCode"
                                        component="div"
                                        className="color-danger f-16 mt-10"
                                      />
                                  </div>
                                  <div className='col-md-6 col-sm-12'>
                                      <input type="text" 
                                        className={`input-name ${formik.errors.country && formik.touched.country && 'border-danger'}`} 
                                        placeholder="Country" 
                                        name="country" 
                                        value={formik.values.country}
                                        onChange={formik.handleChange} />
                                      <ErrorMessage
                                        name="country"
                                        component="div"
                                        className="color-danger f-16 mt-10"
                                      />
                                  </div>
                              </div>
                        </div>                        
                    </div>


                    <div className="form-group">
                       <label className="reg_txt">Write Your qualification <span>*</span></label>
                       <div className='row'>
                          <div className='col-md-12 col-sm-12'>
                                  <input type="text" 
                                    className={`input-name ${formik.errors.qualification && formik.touched.qualification && 'border-danger'}`}
                                    placeholder="Qualification" 
                                    name="qualification" 
                                    value={formik.values.qualification}
                                    onChange={formik.handleChange} />
                                  <ErrorMessage
                                    name="qualification"
                                    component="div"
                                    className="color-danger f-16 mt-10"
                                  />
                          </div>
                       </div>
                    </div>


                    <div className="form-group">
                       <label className="reg_txt">Comment  <span>*</span></label>                        
                       <div className='row'>
                          <div className='col-md-12 col-sm-12'>
                                  <input type="text" 
                                    className={`input-name ${formik.errors.comments && formik.touched.comments && 'border-danger'}`}
                                    placeholder="Comments" 
                                    name="comments" 
                                    value={formik.values.comments}
                                    onChange={formik.handleChange} />
                                  <ErrorMessage
                                    name="comments"
                                    component="div"
                                    className="color-danger f-16 mt-10"
                                  />
                          </div>
                       </div>
                    </div>

                    <div className="form-group">
                         <button type="submit" className="btn btn-default submit" style={{ width:"100%"}}>
                               { isUpdateForm ? 'Update' : "Submit" }
                         </button>
                    </div>
                </Form> 
               )}
        </Formik>
      </div>
  )
}


BioForm.propTypes = {
  BioFormInitValue : PropTypes.object,
  isUpdateForm: PropTypes.bool,
  _handleSubmit: PropTypes.func
}

export default BioForm;
