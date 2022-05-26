export default function isChinese(str) {
  var reg = /^[\u4E00-\u9FA5]+$/;
  if (!reg.test(str)) {
    return false;
  } else {
    return true;
  }
}
