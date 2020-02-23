/*
 * @Author: batman
 * @Date: 2020-02-13 10:11:04
 * @LastEditors  : batman
 * @LastEditTime : 2020-02-14 09:48:39
 * @Description: 检查传入的数据是否是“类对象”
 */
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
	return value != null && typeof value == 'object';
}

export default isObjectLike;
