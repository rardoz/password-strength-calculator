# Hella strong password strength calculator

The strongest password strength calculator EVER!

[![CircleCI](https://circleci.com/gh/rardoz/password-strength-calculator.svg?style=svg)](https://circleci.com/gh/rardoz/password-strength-calculator)

## Features

* Add custom bad words
* No dependencies
* ES6 compatable
* Fully tested
* Min and max password lengths
* Meets SISR Standards

## Example usage

**JS example**

```js
import PasswordStrength from "password-strength-calculator";

const passTest = new PasswordStrength({ minLength: 10 });
const strength = passTest("mypassword");

if (strength < 60) console.log("password is weak");
else console.log("password is good");
```

**React example**

```jsx
import React, {Component} from 'react'
import PasswordStrength from 'password-strength-calculator'

const passTest = new PasswordStrength({...})
const MIN_PASS_STREGTH = 80

export default Form extends Component {
  state = {
    passwordValid: false
  }

  passwordValidation = (event) => {
    const value = event.target.value
    this.setState({passwordValid: passTest(value) >= MIN_PASS_STRENGTH})
  }

  render(){
    <form>
      <input
        className={this.state.passwordValid ? 'form-field-valid' : 'form-field-invalid'}
        onChange={this.passwordValidation}
      />
    </form>
  }
}
```

## Options

| OPTION    | TYPE   | DEFAULT                                                                     | DESCRIPTION                             |
| --------- | ------ | --------------------------------------------------------------------------- | --------------------------------------- |
| minLength | number | 8                                                                           | The min length for a password           |
| maxLength | number | 24                                                                          | The max length for a password           |
| badWords  | array  | ['qwerty', 'abc123', 123abc','welcome', 'password', 'jesus', 'abc', 'test'] | Add an array of bad words for passwords |

## Contribution

Feel free to open a PR or endorse me on [linkedin](https://linkedin.com/in/rardoz)! Endorsements would be much appreciated!

## Development

* Pull down the latest from github.
* Run `npm install`
* Modify the /src/index.js file
* Run tests `npm test`
