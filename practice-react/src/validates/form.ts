// Constants
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_NUMBER_REGEX,
  NAME_REGEX,
  MESSAGES,
  EMPTY_TEXT
} from '@/constants';

// Interfaces
import {
  PartialStudent,
  PartialConfigValidation,
  PartialUser,
} from '@/types';

// Enum
import { ValidationType } from '@/types';

/**
 * Checks for an empty value
 *
 * @param {string} value - Comparative value
 */
const isEmpty = (value: string): boolean => {
  return !value;
}

/**
 * Email check function is not valid
 *
 * @param {string} value - Comparative value
 */
const isValidEmail = (value: string): boolean => {
  return EMAIL_REGEX.test(value);
}

/**
 * Check password rules
 *
 * @param {string} value - Comparative value
 */
const isValidPassword = (value: string): boolean => {
  return PASSWORD_REGEX.test(value);
}

/**
 * Check names contain only characters and no numbers
 *
 * @param {string} value - Comparative value
 */
const isValidName = (value: string): boolean => {
  return NAME_REGEX.test(value);
}

/**
 * Check the length of the phone number
 *
 * @param {string} value - Comparative value
 */
const isValidPhoneNumber = (value: string): boolean => {
  return PHONE_NUMBER_REGEX.test(value);
}

/**
 * Filter out elements in the array to return duplicate elements
 *
 * @param {*} data - array
 * @param {*} key - The value is in the array
 * @param {*} value - Values in input fields
 * @returns
 */
const checkDuplicateData = <Type>(data: Type[], key: string, value: string) => {
  return data.find((item) => item[key] === value);
}

/**
 * Function to check for empty input
 *
 * @param {object} data - The data object contains all the input elements
 * @param {object} config - EX: config = { name: ['empty'], password: ['passwordFormat'] }
 */
const validateForm = (data: PartialStudent | PartialUser, config: PartialConfigValidation) => {
  const formValidation: {
    isValid: boolean,
    errors: PartialUser
  } = {
    isValid: true,
    errors: {},
  };

  // Point to the key in the data object
  Object.keys(data).forEach((key: string) => {
    const value: string = data[key];

    // There is a key in the config
    if (config[key]) {
      config[key].forEach((validationType: string) => {
        // If there are emptyEmail words, continue to consider the isEmpty condition
        if (validationType === ValidationType.Empty && isEmpty(value)) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.EMPTY;

          return;
        }

        // If there are emptyEmail words, continue to consider the isEmpty condition
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.EmptyEmail &&
          isEmpty(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.EMPTY_EMAIL;

          return;
        }

        // If there are emptyPassword words, continue to consider the isEmpty condition
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.EmptyPassword &&
          isEmpty(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.EMPTY_PASSWORD;

          return;
        }

        // If there is an formatEmail word, continue to consider the isValidEmail condition
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.FormatEmail &&
          !isValidEmail(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.EMAIL_WRONG_FORMAT;

          return;
        }

        // If there is an passwordRule word, continue to consider the isValidPassword condition
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.PasswordRule &&
          !isValidPassword(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.PASSWORD_WRONG_FORMAT;

          return;
        }

        // If there is a number in the name, an error message will be output
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.Name &&
          !isValidName(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.NAME_INVALID;

          return;
        }

        // If the length of the phone number is not equal to 10 or the format is wrong, an error message will be output
        if (
          !formValidation.errors[key] &&
          validationType === ValidationType.Phone &&
          !isValidPhoneNumber(value)
        ) {
          formValidation.isValid = false;
          formValidation.errors[key] = MESSAGES.PHONE_NUMBER_INVALID;

          return;
        }

        // If the above conditions are not met, the notification will not appear
        if (!formValidation.errors[key]) {
          formValidation.errors[key] = EMPTY_TEXT;
        }
      });
    }
  });

  return formValidation;
}

export {
  checkDuplicateData,
  validateForm
};
