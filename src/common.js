/* eslint-disable no-undef */
/*
 * @Author: batman
 * @Date: 2019-12-14 01:17:18
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-16 13:48:28
 * @Description: 一些常用工具函数
 */
/* const slugify = require('slugify');

slugify.extend({ '/': '-' });

exports.slugify = function (input) {
	return slugify(input);
};

exports.wait = function (ms = 0) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}; */

//Some weired phone brands with weired browser features support
// 一些支持奇怪的浏览器功能的奇怪的手机品牌
const weiredBrands = ['webOS', 'BlackBerry'];

//some UA related utilities, and some simple device check
// 一些UA相关的实用程序，和一些简单的设备检查
const normalizeUA = (ua) => {
	return String(ua || '').toLowerCase();
};

// 杂牌手机
const isPhone = (ua) => {
	ua = normalizeUA(ua);
	for (const phone of weiredBrands) {
		if (ua.indexOf(phone) >= 0) {
			return true;
		}
	}
	return false;
};

// ios终端
const isIOS = (ua) => {
	ua = normalizeUA(ua);
	return ua.indexOf('iphone') >= 0 || ua.indexOf('ipad') >= 0;
};

// 安卓终端
const isAndroid = (ua) => {
	ua = normalizeUA(ua);
	return ua.indexOf('android') >= 0;
};

// 判断设备是否处于移动端
const isMobile = () => {
	const ua = navigator.userAgent;
	return this.isIOS(ua) || this.isAndroid(ua) || this.isPhone(ua);
};

// 返回一个数组截断前n个元素组成的数组，从索引0开始截断。
const slasher = (arr, howMany) => {
	var arr1 = [];
	if (arr.length === howMany) {
		return arr;
	} else {
		arr1 = arr.splice(0, howMany);
	}
	return arr1;
};

const wait = (ms = 0) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

// 提取对象中的一些属性成为一个新的对象，类似 lodash 的 pick
const pickProperty = (obj, array) => {
	let inclusivePick = (obj, ...keys) => Object.fromEntries(keys.map((key) => [key, obj[key]]));
	let subset = inclusivePick(obj, ...array);
	return subset;
};

export { isPhone, isIOS, isAndroid, isMobile, slasher, wait, pickProperty };
