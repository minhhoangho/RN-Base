export const PATTERN_NAME = /[a-z ,.'-]+/;
export const PATTERN_DOB = /\d{1,2}\/\d{1,2}\/\d{4}/;
export const PATTERN_EMAIL = /\S+@\S+\.\S+/;
export const PATTERN_PASSWORD = /[a-z0-9]{5,}/;
export const PATTERN_PHONE = /((09|03|07|08|05|023)+([0-9]{8})\b)/;
export const PATTERN_SMS_CODE = /\d{4}/;
export const PATTERN_CARD_NUMBER = /\d{4} \d{4} \d{4} \d{4}/;
export const PATTERN_CARD_EXPIRE_DATE = /\d{2}\/\d{2}/;
export const PATTERN_CARD_CVV = /\d{3}/;
export const PATTERN_FULLNAME = /^$|^[a-zA-ZčČćĆđĐšŠžŽ-]+ [a-zA-ZčČćĆđĐšŠžŽ-]+$/;
export const PATTERN_ID = /([0-9]{9}\b)/;
export const PATTERN_VERIFIED_EMAIL_CODE = /^[0-9]{6}$/;

const RegExpValidator = (regexp, value) => regexp.test(value);

export const NameValidator = (value) => RegExpValidator(PATTERN_NAME, value);

export const DOBValidator = (value) => RegExpValidator(PATTERN_DOB, value);

export const EmailValidator = (value) => RegExpValidator(PATTERN_EMAIL, value);

export const PasswordValidator = (value) =>
  RegExpValidator(PATTERN_PASSWORD, value);

export const PhoneNumberValidator = (value) =>
  RegExpValidator(PATTERN_PHONE, value);

export const SMSCodeValidator = (value) =>
  RegExpValidator(PATTERN_SMS_CODE, value);

export const CardNumberValidator = (value) =>
  RegExpValidator(PATTERN_CARD_NUMBER, value);

export const ExpirationDateValidator = (value) =>
  RegExpValidator(PATTERN_CARD_EXPIRE_DATE, value);

export const CvvValidator = (value) => RegExpValidator(PATTERN_CARD_CVV, value);

// export const CardholderNameValidator = (value) => {
//   return RegExpValidator(PATTERN_FULLNAME, value);
// };

export const StringValidator = (value) => !!value && value.length > 0;

export const IDValidator = (value) => RegExpValidator(PATTERN_ID, value);

export const VerifiedEmailCodeValidator = (value) =>
  RegExpValidator(PATTERN_VERIFIED_EMAIL_CODE, value);
