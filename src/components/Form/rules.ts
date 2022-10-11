export function rulePhone(rule, value) {//手机号码
  if (!value) return true
  if (/^1[3-9]\d{9}$/.test(value)) return true
  return false;
}