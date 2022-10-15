import React from 'react';
import { PropTypes } from "prop-types";


function ViewDetail({ detail }) {
  return (
    <div className='view-detail'>
        <div className='row p-0 p-md-5'>
              <div className='d-flex justify-content-center'> 
                  <div className="bg-info rounded-circle custom-avatar-lg mb-2">{detail?.firstName && detail?.firstName.slice(0, 2)}</div>
              </div>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Name
                    <span className=" rounded-pill">{detail?.firstName}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                     Email
                    <span className=" rounded-pill">{detail?.email}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Phone
                    <span className=" rounded-pill">{detail?.phoneNumber}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  City
                    <span className=" rounded-pill">{detail?.city}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  State
                    <span className=" rounded-pill">{detail?.state}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Country
                    <span className=" rounded-pill">{detail?.country}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Pin code
                    <span className=" rounded-pill">{detail?.zipCode}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                Qualification
                    <span className=" rounded-pill">{detail?.qualification}</span>
                </li>
                </ul>
              <div className='mt-4'><b>Address</b></div>
              <div>{detail?.address1}</div>
              <br/>
              <div>{detail?.address2}</div>
              <br/>
              <br/>
              <div><b>Comments</b></div>
              <div>{detail?.comments}</div>
              <br/>
        </div>
    </div>
  )
}


ViewDetail.propTypes = {
    detail: PropTypes.object, 
}

export default ViewDetail
