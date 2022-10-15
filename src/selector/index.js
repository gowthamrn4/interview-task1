import { createSelector } from "reselect";

const bioDomain = (state) => state.Bio;

const makeSelectBioDetails = () =>
  createSelector(bioDomain, (subdomain) => subdomain?.bioDetails);

const makeSelectLoading = () =>
  createSelector(bioDomain, (subdomain) => subdomain?.loading);

const makeSelectUpdateFormModalBox = () =>
  createSelector(bioDomain, (subdomain) => subdomain?.isOpenUpdateFormModal);

const makeSelectDeleteModalBox = () =>
  createSelector(bioDomain, (subdomain) => subdomain?.isOpenDeleteModal);

const makeSelectViewModalBox = () =>
  createSelector(bioDomain, (subdomain) => subdomain?.isOpenViewModal);


export {
    makeSelectBioDetails,
    makeSelectLoading,
    makeSelectUpdateFormModalBox,
    makeSelectDeleteModalBox,
    makeSelectViewModalBox
}

