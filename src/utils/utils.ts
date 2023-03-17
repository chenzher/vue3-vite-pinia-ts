/* eslint-disable */

interface IFormatterToFloatParams {
  str: string;
  formatType?: number;
  len?: number;
}
/**
 * @description 数字输入框限制输入浮点数
 * @param {string} str 输入值
 * @param {number} formatType 0:浮点数,1:正浮点数,2:负浮点数
 */
export const formatterToFloat = ({
  str,
  formatType = 0,
  len = 18,
}: IFormatterToFloatParams): string => {
  if (str === '') return '';
  let result = '';
  result = str
    .replace(/[^\d\.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/[\.]/g, function (match, offset, all) {
      return match === '.' ? (all.indexOf('.') === offset ? '.' : '') : '';
    })
    .replace(/(^0+)([0-9]+)/, '$2');
  let type = '';
  if (formatType === 2 || (formatType === 0 && str.charAt(0) === '-')) {
    type = '-';
  }

  if (result.charAt(0) === '.') {
    result = '0' + result;
  }
  result = type + result;
  result = result.substring(0, len);
  return result;
};

// 获取location.href中指定search参数
export const getUrlParams = (name: string) => {
  const result = new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(
    location.href
  ) || [, ''];
  if (result[1]) {
    return decodeURIComponent(result[1].replace(/\+/g, '%20')) || null;
  } else {
    return null;
  }
};
