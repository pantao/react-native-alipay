import { NativeModules } from 'react-native';
import { Buffer } from 'buffer';
import RSASign from 'jsrsasign';

const { Alipay } = NativeModules;

Alipay.sign = (object, privateKey) => {

  // 添加默认 signType
  if (!object.signType || object.signType.length === 0) {
    object.signType = 'RSA'
  }

  // 删除 sign 字段
  delete object.sign;

  // 删除空的字段
  Object.keys(object).forEach((key) => {
    if (String(object[key]).length === 0) {
      delete object[key]
    }
  })

  // 按 query string 排序
  var sortedQuery = '';
  let sortedKeys = Object.keys(object).sort((a, b) => a > b)
  for (var i = 0; i < sortedKeys.length; i++) {
    let key = sortedKeys[i]
    let value = object[key]
    sortedQuery += `${(i === 0) ? '' : '&'}${encodeURIComponent(key)}=${encodeURIComponent(value)}`
  }

  // 创建签名
  let alg = {RSA: 'SHA1withRSA', RSA2: 'SHA256withRSA'}[object.signType]
  let sig = new RSASign.KJUR.crypto.Signature({alg})
  sig.init(RSASign.KEYUTIL.getKey(privateKey))
  sig.updateString(sortedQuery)
  let sign = Buffer.from(sig.sign(), 'hex').toString('base64')

  sortedQuery += `&sign=${encodeURIComponent(sign)}`
  return sortedQuery
}

export default Alipay