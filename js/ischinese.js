export default function isChinese(str) {
  var reg = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/;
  if (!reg.test(str)) {
    return false;
  } else {
    return true;
  }
}
