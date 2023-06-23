import * as yup from 'yup';

const emailRules = yup
  .string('Enter_your_email')
  .email('Enter_a_valid_email')
  .trim()
  .required('Email_is_required');

const passwordRules = yup
  .string('Enter_your_password')
  .trim()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.[{}()"%/,><':;|_~`+=]).{8,}$/,
    'Password_policy'
  )
  .required('Password_is_required');

const confirmPasswordRules = yup
  .string('Enter_your_password')
  .trim()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.[{}()"%/,><':;|_~`+=]).{8,}$/,
    'Password_policy'
  )
  .required('Confirm_password_is_required');

const designationRules = yup
  .string('Designation_is_required')
  .trim()
  .required('Designation_is_required');

const firstNameRules = yup
  .string('First_name_is_required')
  .trim()
  .required('First_name_is_required');

const lastNameRules = yup
  .string('Last_name_is_required')
  .trim()
  .required('Last_name_is_required');

const codeRules = yup
  .string('Profile_Code_is_required')
  .trim()
  .required('Profile_Code_is_required');

const phoneRules = yup
  .string('Phone_number_is_required')
  .trim()
  .required('Phone_number_is_required')
  .matches(new RegExp('[0-9]{7}'), 'Phone_number_is_not_valid');

const urlRules = yup
  .string()
  .trim()
  .required('URL_is_required')
  // eslint-disable-next-line
  .matches(
    // eslint-disable-next-line
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
    'Link_should_be_a_valid_URL'
  );
// const primaryIndustryRules = yup
//   .object('Primary_Industry_is_required')
//   // .trim()
//   .required('Primary_Industry_is_required');
const taxIdRules = yup
  .string('TaxId_is_required')
  .trim()
  .required('TaxId_is_required');
const corporateNameRules = yup
  .string('Corporate_name_is_required')
  .trim()
  .required('Corporate_name_is_required');

const registrationRules = yup
  .string('Registration_is_required')
  .trim()
  .required('Registration_is_required');

const acceptCreateAccountRules = yup
  .bool()
  .oneOf([true], 'Accept_create_account_is_required');

const acceptPrivacyPolicyRules = yup
  .bool()
  .oneOf([true], 'Accept_privacy_policy_is_required');

const acceptTermsAndConditionsRules = yup
  .bool()
  .oneOf([true], 'Accept_terms_and_condtions_is_required');

const acceptTermsOfUseRules = yup
  .bool()
  .oneOf([true], 'Accept_terms_of_use_is_required');

const countryRules = yup
  .string('Enter_your_country')
  .required('Country_is_required')
  .typeError('Country_type');
const stateRules = yup
  .string('Enter_your_state')
  .required('State_is_required')
  .typeError('State_type');
const cityRules = yup
  .string('Enter_your_city')
  .required('City_is_required')
  .typeError('City_type');
const postalCodeRules = yup
  .string('Enter_your_postCodee')
  .required('postCode_is_required')
  .matches(/^[0-9 ]+$/, 'postCode_type');

const locationRules = yup
  .string('Enter_your_location')
  .required('Location_is_required');
const addressLineOneRules = yup
  .string('Enter_your_addressLineOne')
  .required('AddressLineOne_is_required');
const toLatitudeRules = yup.number().required(`${'Latitude_is_required'}`);
const toLongitudeRules = yup.number().required(`${'Longitude_is_required'}`);

export const LoginValidationSchema = yup.object({
  email: emailRules,
  password: passwordRules,
});

export const ForgetPasswordValidationSchema = yup.object({
  email: emailRules,
});

export const SignUpValidationSchema = yup.object({
  email: emailRules,
  password: passwordRules,
  confirmPassword: confirmPasswordRules,
  firstName: firstNameRules,
  lastName: lastNameRules,
  designation: designationRules,
  code: codeRules,
  phone: phoneRules,
  corporateName: corporateNameRules,
  registration: registrationRules,
  taxId: taxIdRules,
  url: urlRules,
  acceptTermsOfUse: acceptTermsOfUseRules,
  acceptTermsAndConditions: acceptTermsAndConditionsRules,
  acceptPrivacyPolicy: acceptPrivacyPolicyRules,
  acceptCreateAccount: acceptCreateAccountRules,
  country: countryRules,
  state: stateRules,
  latitude: toLatitudeRules,
  longitude: toLongitudeRules,
  address: locationRules,
  addressLineOne: addressLineOneRules,
  postalCode: postalCodeRules,
  city: cityRules,
  //primaryIndustry: primaryIndustryRules,
});

export const ResetPasswordValidationSchema = yup.object({
  password: passwordRules,
  confirmPassword: confirmPasswordRules,
});
