import PasswordStrengthTest from '../src'

const passTest = new PasswordStrengthTest()
describe('PasswordStrengthTest', () => {
  it('should be atleast 8 characters', () => {
    const validate = passTest.validate('small')
    expect(validate).toBe(0)
  })

  it('should be no longer than 25 characters', () => {
    const validate = passTest.validate('M9?:)hF&dybzg>Lw;4#=?qrJ&t')
    expect(validate).toBe(0)
  })

  it('should accept good passwords', () => {
    const validate = passTest.validate('9?:)hF&dybzg>Lw;4#=?')
    expect(validate).toBeGreaterThan(90)
  })

  it('should not accept weak passwords', () => {
    const validate = passTest.validate('stupids4ywhat?')
    expect(validate).toBeLessThan(65)
  })

  it('should not accept really weak passwords', () => {
    const validate = passTest.validate('stupidish')
    expect(validate).toBeLessThan(0)
  })

  it('should not accept bad words', () => {
    const validate = passTest.validate('jesus')
    expect(validate).toBe(0)
  })

  it('should not accept bad words embedded in password', () => {
    const validate = passTest.validate('9?:)hFjesus;4#=?q')
    expect(validate).toBe(0)
  })

  it('should not accept passwords with repeated characters', () => {
    const validate = passTest.validate('9?:);4aaa#=?q')
    expect(validate).toBe(0)
  })

  it('should not accept passwords with repeated numbers', () => {
    const validate = passTest.validate('9?:);333#=?q')
    expect(validate).toBe(0)
  })

  it('should include characters from at least two of these groupings: alpha, numeric, special characters', () => {
    let validate = passTest.validate('NXCDVPrAV1')
    expect(validate).toBeGreaterThan(40)
    validate = passTest.validate('NXCD2VPrAV1!')
    expect(validate).toBeGreaterThan(60)
    validate = passTest.validate('NXCDVPrAV')
    expect(validate).toBeLessThan(0)
  })
})
