import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectBioDetails, makeSelectUpdateFormModalBox, makeSelectDeleteModalBox, makeSelectViewModalBox } from '../selector';
import TableContent from './table-content';
import ModalBox from './modal-box';
import { UpdateForm } from '../containers';
import { ToggleModalBox, ToggleDeleteModalBox, DeleteBioDetail, ToggleViewModalBox } from '../actions';
import ViewDetail from './view-detail';

function BioTable() {
  const bioDetails = useSelector(makeSelectBioDetails())
  const isOpenUpdateFormModal = useSelector(makeSelectUpdateFormModalBox());
  const isOpenDeleteModal = useSelector(makeSelectDeleteModalBox());
  const isOpenViewModal = useSelector(makeSelectViewModalBox());
  const [ currentObj, setCurrentObj ] = useState({});
  const dispatch = useDispatch();

  function setCurrentValue(detail){
    let phone_number_field_one = '';
    let phone_number_field_two = '';
    let phone_number_field_three = '';
    if (detail?.phoneNumber) {
        let phoneNumber = detail?.phoneNumber?.split('-');
        if (Array.isArray(phoneNumber)) {
            phone_number_field_one = phoneNumber[0];
            phone_number_field_two = phoneNumber[1];
            phone_number_field_three = phoneNumber[2];
        }
    }
    const updateFormInitValue = {
        ...detail,
        phone_number_field_one,
        phone_number_field_two,
        phone_number_field_three
    }
    setCurrentObj(updateFormInitValue)
    dispatch(ToggleModalBox());
  }

  function openDeletModalBox(detail) {
    setCurrentObj(detail);
    dispatch(ToggleDeleteModalBox());
  }

  function openViewModalBox(detail) {
    setCurrentObj(detail);
    dispatch(ToggleViewModalBox());
  }

  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 tabt">
		    <table className="table">
          <thead>
            <tr className="ztxt">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            { Array.isArray(bioDetails) && bioDetails.map((detail,index)=>(
                 <TableContent 
                    key={index} 
                    detail={detail} 
                    openUpdateFormModal={()=>setCurrentValue(detail)} 
                    openDeleteModal={()=>openDeletModalBox(detail)}  
                    openViewModal={()=>openViewModalBox(detail)}
                  />
              )) }
            </tbody>
        </table>
        { isOpenUpdateFormModal &&
            <ModalBox close={()=>dispatch(ToggleModalBox())}>
                  <UpdateForm BioFormInitValue={currentObj}/>
             </ModalBox>
        }

        { isOpenDeleteModal &&
          <ModalBox close={()=>dispatch(ToggleDeleteModalBox())}>
              <div className='row'>
                <div className='col-4 col-sm-4 col-md-4'>
                    <div className="bg-info rounded-circle custom-avatar mb-2">{currentObj?.firstName && currentObj?.firstName.slice(0, 2)}</div>
                </div>
                <div className='col-8 col-sm-8 col-md-8 align-self-center'>
                  { currentObj?.firstName && currentObj?.firstName }
                </div>
              </div>
               <div>Are you sure you want to delete?</div>
               <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>dispatch(ToggleDeleteModalBox())}>No</button>
                <button type="button" className="btn btn-primary" onClick={()=>dispatch(DeleteBioDetail(currentObj))}>Yes</button>
              </div>
          </ModalBox>
        }

        { isOpenViewModal && 
          <ModalBox close={()=>dispatch(ToggleViewModalBox())}>
              <ViewDetail detail={currentObj}/>
          </ModalBox>
        }

        { Array.isArray(bioDetails) && bioDetails.length == 0 && (
            <div className='text-center'>No record found </div>
         )}
    </div>
  )
}

export default BioTable;
