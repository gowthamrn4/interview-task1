import React from 'react'
import { BioForm } from '../components';
import { BioFormInitValue } from '../helper/validation';
import { useDispatch } from 'react-redux';
import { AddBioDetail } from '../actions';

export default function AddFrom() {

    const dispatch = useDispatch();

    const _handleSubmit = (value,action) => {
      let phoneNumber = '';
      if (value) {
        phoneNumber = `${value?.phone_number_field_one}-${value?.phone_number_field_two}-${value?.phone_number_field_three}`
      }
      let input = {
          ...value,
          phoneNumber
      }
      dispatch(AddBioDetail(input))
      action.resetForm()
    }

  return (
   <div className="register col-12 col-sm-12 col-md-5 col-lg-5">
      <h1 className="title"><strong>Bio Data</strong></h1>
     <BioForm BioFormInitValue={BioFormInitValue} _handleSubmit={_handleSubmit}/>
   </div>
  )
}
