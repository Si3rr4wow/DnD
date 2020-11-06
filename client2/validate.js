import { formAnswerTypes } from '@salon-app/core'

import moment from 'moment'

const getYearOptionalValidity = (value, isMandatory) => {
  if(value.day, value.month) { return true }
  if(isMandatory && !value.day) { return false }
  if(isMandatory && !value.month) { return false }
  if(value.year && String(value.year).length !== 4 && !moment(value).isValid()) { return false }
  return true
}

const validateText = (value, { options: { isMandatory, maxLength } }) => {
  if(isMandatory && !value.length) {
    return false
  }
  if((value.length || 0) > maxLength) {
    return false
  }
  return true
}

const validateDate = (value, { options: { isMandatory, yearOptional } }) => {
  if(yearOptional && !value.getTime?.()) {
    return getYearOptionalValidity(value, isMandatory)
  }
  if(isMandatory && !value.getTime?.()) {
    return false
  }
  if(!moment(value).isValid()) {
    return false
  }
  return true
}

const validateNumber = (value, { options: { min, max } }) => {
  if(isNaN(Number(value))) {
    return false
  }
  if(Number(value) < min || Number(value) > max) {
    return false
  }
  return true
}

const validateMultipleChoice = (value, { options: { isMandatory } }) => {
  if(isMandatory && !value?.length) {
    return false
  }
  return true
}

const validateCheckbox = (value, { options: { isMandatory } }) => {
  if(isMandatory && value === false) {
    return false
  }
  if(value === null || value === undefined) {
    return false
  }
  return true
}

const validateSignature = (value) => {
  if(value === null || value === undefined || value.length === 0) {
    return false
  }
  return true
}

const validate = (value, question) => {
  switch(question.answerType) {
    case(formAnswerTypes.TEXT): {
      return validateText(value, question)
    }
    case(formAnswerTypes.DATE): {
      return validateDate(value, question)
    }
    case(formAnswerTypes.MULTIPLE_CHOICE): {
      return validateMultipleChoice(value, question)
    }
    case(formAnswerTypes.NUMBER): {
      return validateNumber(value, question)
    }
    case(formAnswerTypes.CHECKBOX): {
      return validateCheckbox(value, question)
    }
    case(formAnswerTypes.SIGNATURE): {
      return validateSignature(value, question)
    }
    // case(formAnswerTypes.IMAGE): {
    //   return validateImage(value, question)
    // }
    default: return null
  }
}

export default validate
