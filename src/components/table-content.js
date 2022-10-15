import React from 'react';
import { PropTypes } from "prop-types";


function TableContent({ detail, openUpdateFormModal, openDeleteModal, openViewModal }) {

  return (
        <tr>
            <td className='text-start'>{detail?.firstName}</td>
            <td className='text-start'>{detail?.email}</td>
            <td className='text-start'>{detail?.phoneNumber ? detail?.phoneNumber.replaceAll('-','') : '-'}</td>
            <td><button className="ed" onClick={openUpdateFormModal}>Edit</button></td>
            <td><button className="ed" onClick={openDeleteModal} style={{ background: "#f00" }} >Delete</button></td>
            <td><button className="ed" onClick={openViewModal} style={{ background: "#000" }}>View</button></td>
        </tr>
  )
}

TableContent.propTypes = {
    detail: PropTypes.object,
    openUpdateFormModal: PropTypes.func,
    openDeleteModal: PropTypes.func,
    openViewModal: PropTypes.func
}

export default TableContent