import { apiGet, apiPost, apiPut } from '../../utils/Axios/axios';
import { AUTH_SERVER_URL } from '../Env';

//auth url
const INDUSTRY_TYPE_ENUM_MULTI_TREE = `${AUTH_SERVER_URL}/enum/get_industries`;

const BASE_AUTH_URL = AUTH_SERVER_URL + '/proxtera';
//Base auth url
const EMAIL_SIGN_UP = `${BASE_AUTH_URL}/registration`;
const EMAIL_VERIFY = `${BASE_AUTH_URL}/verify_token`;
const FORGET_PASSWORD_EMAIL = `${BASE_AUTH_URL}/forgot_password`;
const RESET_PASSWORD = `${BASE_AUTH_URL}/reset_password`;
const REVIEW_PARTNER = `${BASE_AUTH_URL}/review_partner`;

export const emailSignUp = (apiData) => {
  return apiPost(EMAIL_SIGN_UP, apiData);
};

export const emailVerify = (apiData) => {
  return apiPut(EMAIL_VERIFY, apiData);
};
export const forgetPassWordEmail = (apiData) => {
  return apiPost(FORGET_PASSWORD_EMAIL, apiData);
};
export const resetPasswordViaToken = (apiData) => {
  return apiPut(RESET_PASSWORD, apiData);
};
export const getIndustryTypeEnum = () => {
  return apiGet(INDUSTRY_TYPE_ENUM_MULTI_TREE);
};
export const reviewPartner = (apiData) => {
  return apiPut(REVIEW_PARTNER, apiData);
};
