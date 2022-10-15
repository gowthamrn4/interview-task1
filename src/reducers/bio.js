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


const INITIAL_STATE = { 
    bioDetails : [],
    loading: false,
    isOpenUpdateFormModal: false,
    isOpenDeleteModal: false,
    isOpenViewModal: false
}

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_BIO_INIT:
            return {
              ...state,
              loading: true
        };
        case ADD_BIO_SUCCESS:
            return {
              ...state,
              loading: false,
              bioDetails: [...state.bioDetails, payload ]
        };
        case ADD_BIO_FAILED:
            return {
              ...state,
              loading: false
        };
        case GET_BIO_DETAILS_INIT:
            return {
              ...state,
              loading: true
        };
        case GET_BIO_DETAILS_SUCCESS:
            return {
              ...state,
              loading: false,
              bioDetails: payload
        };
        case GET_BIO_DETAILS_FAILED:
            return {
              ...state,
              loading: false
        };
        case UPDATE_BIO_INIT:
            return {
                ...state,
                loading:true
            }
        case UPDATE_BIO_SUCCESS:
            return {
                ...state,
                loading:false,
                bioDetails: state?.bioDetails.map((detail)=> detail._id == payload?._id ? { ...payload } : detail),
                isOpenUpdateFormModal: false
            }
        case OPEN_UPDATE_MODAL_BOX:
            return {
                ...state,
                isOpenUpdateFormModal: !state?.isOpenUpdateFormModal
            }
        case OPEN_DELETE_MODAL_BOX:
            return {
                ...state,
                isOpenDeleteModal: !state?.isOpenDeleteModal
            }
        case DELETE_BIO_INIT:
            return {
                ...state,
                loading: true
            }
        case DELETE_BIO_SUCCESS:
            return {
                ...state,
                loading: false,
                bioDetails: state?.bioDetails.filter((detail)=> detail?._id !== payload),
                isOpenDeleteModal: false
            }
        case DELETE_BIO_FAILED:
            return {
                ...state,
                loading: false
            }
        case OPEN_VIEW_MODAL_BOX:
            return  {
                ...state,
                isOpenViewModal: !state.isOpenViewModal
            }
        default:
            return state
    }
}