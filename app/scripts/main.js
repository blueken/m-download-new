function callfullpage() {
	'use strict';
	var bscroll = ($(window).width() > $(window).height()) ? true : false;
	bscroll = true;
	$('#bob').fullpage({
		css3: true,
		// slidesColor: ['#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE'],
		anchors: ['hjmdown', 'page2', 'page3', 'page4', 'page5'],
		// loopBottom: true,
		loopHorizontal: false,
		// slidesNavigation: true,
		// slidesNavPosition: 'top',
		scrollOverflow: bscroll,
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
		// 	console.log(anchorLink, index, slideAnchor, slideIndex);
		// },
		// onSlideLeave: function(anchorLink, index, slideIndex, direction){
		// 	console.log(anchorLink, index, slideIndex, direction)
		// },
		afterRender: function () {


		}


	});



}

function isWeiXin() {
	'use strict';
	var ua = window.navigator.userAgent.toLowerCase();
	var re = /MicroMessenger/gi;
	return re.test(ua);
}

function isIOS() {
	'use strict';
	var ua = window.navigator.userAgent.toLowerCase();
	var re = /ipad|iphone/gi;
	return re.test(ua);
}

function weixinurl() {
	'use strict';
	if (!isWeiXin()) {
		//not weixin
		var source = getQueryString('source');
		source = source ? source : 'allstar';
		$('.down_and').each(function () {
			var noWeixinUrl = $(this).attr('href-nowx');
			var realUrl = noWeixinUrl.replace(/source/, source);;
			$(this).attr('href', realUrl);
		});
	}
}

function iosWeixin() {
	'use strict';
	//deal ios weinxin cant open itunes.apple.com problem
	if (isIOS() && isWeiXin()) {
		$('.down_ios').on('click', function () {
			$('.overlay').show();
			return false;
		});
		$('.overlay').on('click', function () {
			$(this).hide();
		});

	}
}

function bindEvents() {
	'use strict';

	$(window).on('orientationchange', function () {
		setTimeout(function () {
			location.reload();
		}, 300);
	});
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return "";
}

function trackEvents() {
	//沪江网校
	$('#foot_hjwx .down_ios').on('click', function () {
		var source = getQueryString('source');
		var hjwxSource = 'm_hj_apps_' + source;
		ga_track_event(hjwxSource, 'clickIos', '沪江网校', 0);
	});

	$('#foot_hjwx .down_and').on('click', function () {
		var source = getQueryString('source');
		var hjwxSource = 'm_hj_apps_' + source;
		ga_track_event(hjwxSource, 'clickAnd', '沪江网校', 0);
	});

	//CCTalk
	$('#foot_cctalk .down_ios').on('click', function () {
		var source = getQueryString('source');
		var cctalkSource = 'm_hj_apps_' + source;
		ga_track_event(cctalkSource, 'clickIos', 'CCTalk', 0);
	});

	$('#foot_cctalk .down_and').on('click', function () {
		var source = getQueryString('source');
		var cctalkSource = 'm_hj_apps_' + source;
		ga_track_event(cctalkSource, 'clickAnd', 'CCTalk', 0);
	});

	//沪江开心词场
	$('#foot_kxcc .down_ios').on('click', function () {
		var source = getQueryString('source');
		var kxccSource = 'm_hj_apps_' + source;
		ga_track_event(kxccSource, 'clickIos', '沪江开心词场', 0);
	});

	$('#foot_kxcc .down_and').on('click', function () {
		var source = getQueryString('source');
		var kxccSource = 'm_hj_apps_' + source;
		ga_track_event(kxccSource, 'clickAnd', '沪江开心词场', 0);
	});

	//沪江听力酷
	$('#foot_tlk .down_ios').on('click', function () {
		var source = getQueryString('source');
		var tlkSource = 'm_hj_apps_' + source;
		ga_track_event(tlkSource, 'clickIos', '沪江听力酷', 0);
	});

	$('#foot_tlk .down_and').on('click', function () {
		var source = getQueryString('source');
		var tlkSource = 'm_hj_apps_' + source;
		ga_track_event(tlkSource, 'clickAnd', '沪江听力酷', 0);
	});

	//沪江小D
	$('#foot_hjxd .down_ios').on('click', function () {
		var source = getQueryString('source');
		var hjxdSource = 'm_hj_apps_' + source;
		ga_track_event(hjxdSource, 'clickIos', '沪江小D', 0);
	});

	$('#foot_hjxd .down_and').on('click', function () {
		var source = getQueryString('source');
		var hjxdSource = 'm_hj_apps_' + source;
		ga_track_event(hjxdSource, 'clickAnd', '沪江小D', 0);
	});
}

$(function () {
	'use strict';
	callfullpage();
	weixinurl();
	iosWeixin();
	bindEvents();
	trackEvents();
});