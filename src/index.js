/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-cond-assign */
/* eslint-disable no-sequences */
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz',
  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers = '0123456789',
  badWords = [
    'qwerty',
    'abc123',
    '123abc',
    'welcome',
    'password',
    'jesus',
    'abc',
    'test',
  ]

export default class PasswordStrengthTest {
  constructor(props = {
    badWords: [],
    minLength: 8,
    maxLength: 24,
  }) {
    this.badWords = badWords.concat(props.badWords || [])
    this.minLength = props.minLength || 8
    this.maxLength = props.maxLength || 25
  }

  correctLength = value => value.length >= this.minLength && value.length <= this.maxLength

  hasJunk = (value) => {
    const lowerValue = value.toLowerCase()
    for (let i = 0; i < badWords.length; i += 1) {
      if (lowerValue.indexOf(badWords[i]) > -1) return 1
    }
    return 0
  }

  isNull(value) {
    return value === null && value === ''
  }

  repeatedCharacters = value => value.match(/([a-zA-Z0-9])\1{1,}/g)

  passwordStrength = (value) => {
    const i = value.length
    let currentIndex = 0,
      subString = '',
      duplicateCount = 0,
      strengthValue = 0

    if (i >= 6 && i <= 24) {
      value.match(/^[a-zA-Z]+$/) || value.match(/^\d+$/)
        ? (strengthValue = -39)
        : i < 11
          ? (strengthValue = 5)
          : i >= 11 && i <= 14 ? (strengthValue = 15) : i > 14 && (strengthValue = 25)
      for (currentIndex = 0; currentIndex < i; currentIndex += 1) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            lowercaseLetters.indexOf(subString) >= 0)
        ) {
          (strengthValue += 5), !0
          break
        }
      }

      for (currentIndex = 0; currentIndex < i; currentIndex += 1) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            uppercaseLetters.indexOf(subString) >= 0)
        ) {
          (strengthValue += 5), !0
          break
        }
      }

      for (currentIndex = 0; currentIndex < i; currentIndex += 1) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            numbers.indexOf(subString) >= 0)
        ) {
          (strengthValue += 5), !0
          break
        }
      }

      for (duplicateCount = 0, currentIndex = 0; currentIndex < i; currentIndex += 1) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            lowercaseLetters.indexOf(subString) >= 0 || uppercaseLetters.indexOf(subString) >= 0)
        ) {
          duplicateCount += 1
        } else {
          if (duplicateCount > 3) break
          duplicateCount = 0
        }
      }

      duplicateCount < 4 && ((strengthValue += 10), !0)

      for (duplicateCount = 0, currentIndex = 0; currentIndex < i; currentIndex += 1) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            numbers.indexOf(subString) >= 0)
        ) {
          duplicateCount += 1
        } else {
          if (duplicateCount > 3) break
          duplicateCount = 0
        }
      }

      for (
        duplicateCount < 4 && ((strengthValue += 10), !0), currentIndex = 0;
        currentIndex < i;
        currentIndex += 1
      ) {
        if (
          ((subString = `${value.substring(currentIndex, currentIndex + 1)}`),
            !(
              lowercaseLetters.indexOf(subString) >= 0 ||
            uppercaseLetters.indexOf(subString) >= 0 ||
            numbers.indexOf(subString) >= 0
            ))
        ) {
          strengthValue += 5
          break
        }
      }
      const characters = {}
      for (currentIndex = 0; currentIndex < i; currentIndex += 1) {
        const k = value.charAt(currentIndex)
        !0 !== characters[k] && ((strengthValue += 2), (characters[k] = !0))
      }
    }
    return strengthValue
  }

  validate = (value) => {
    if (
      this.isNull(value) ||
      this.repeatedCharacters(value) ||
      !this.correctLength(value) ||
      this.hasJunk(value)
    ) {
      return 0
    }
    return this.passwordStrength(value)
  }
}

/* eslint-enable no-unused-expressions */
/* eslint-enable no-nested-ternary */
/* eslint-enable no-cond-assign */
/* eslint-enable no-sequences */
