import { 
    ADD_BIO_INIT,
    ADD_BIO_SUCCESS,
    ADD_BIO_FAILED,
    GET_BIO_DETAILS_INIT,
    GET_BIO_DETAILS_SUCCESS,
    GET_BIO_DETAILS_FAILED,
    UPDATE_BIO_INIT,
    UPDATE_BIO_SUCCESS,
    UPDATE_BIO_FAILED,
    DELETE_BIO_INIT,
    DELETE_BIO_SUCCESS,
    DELETE_BIO_FAILED,
    OPEN_UPDATE_MODAL_BOX,
    OPEN_DELETE_MODAL_BOX,
    OPEN_VIEW_MODAL_BOX
} from '../action-type';
import { BASE_URL } from '../service/constant';
import { Post, Get, Put, Delete } from '../service'
import { notify } from '../helper/utils';

export const AddBioDetail = (value) => (dispatch) => {
    dispatch({ type: ADD_BIO_INIT });
    Post(value,BASE_URL.ADD_BIO).then((response)=>{
        if (response?.status == 201) {
            notify("success","Added successfully")
            dispatch({ type: ADD_BIO_SUCCESS, payload:response?.data });
        }
    }).catch((error)=>{
        dispatch({ type: ADD_BIO_FAILED });
    })
}

export const GetBioDetails = () => (dispatch) => {
    dispatch({ type: GET_BIO_DETAILS_INIT });
    Get(BASE_URL.GET_BIO).then((response)=>{
        if (response.status == 200) {
            dispatch({ type: GET_BIO_DETAILS_SUCCESS, payload:response?.data });
        }
    }).catch((error)=>{
        dispatch({ type: GET_BIO_DETAILS_FAILED });
    })
}

export const UpdateBioDetail = (value) => (dispatch) => {
    dispatch({ type: UPDATE_BIO_INIT });
    Put(value,`${BASE_URL.UPDATE_BIO}${value?._id}`).then((response)=>{
        if (response?.status == 200) {
            notify("success","Updated successfully")
            dispatch({ type: UPDATE_BIO_SUCCESS, payload:response?.data });
        }
    }).catch((error)=>{
        dispatch({ type: UPDATE_BIO_FAILED });
    })
}

export const ToggleModalBox = () => (dispatch) => {
    dispatch({ type:OPEN_UPDATE_MODAL_BOX })
}

export const ToggleDeleteModalBox = () => (dispatch) => {
    dispatch({ type:OPEN_DELETE_MODAL_BOX })
}

export const DeleteBioDetail = (value) => (dispatch) => {
    dispatch({ type: DELETE_BIO_INIT });
    Delete(`${BASE_URL.DELETE_BIO}${value?._id}`).then((response)=>{
        if (response?.status == 204) {
            notify("success","Deleted successfully")
            dispatch({ type: DELETE_BIO_SUCCESS, payload:value?._id });
        }
    }).catch((error)=>{
        dispatch({ type: DELETE_BIO_FAILED });
    })
}


export const ToggleViewModalBox = () => (dispatch) => {
    dispatch({ type:OPEN_VIEW_MODAL_BOX })
}