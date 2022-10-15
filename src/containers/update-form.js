import React from 'react'
import { BioForm } from '../components';
import { useDispatch } from 'react-redux';
import { UpdateBioDetail } from '../actions';

export default function UpdateForm({  BioFormInitValue }) {

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
      dispatch(UpdateBioDetail(input))
      action.resetForm()
    }

  return (
   <div>
     <BioForm BioFormInitValue={BioFormInitValue} _handleSubmit={_handleSubmit} isUpdateForm={true}/>
   </div>
  )
}
