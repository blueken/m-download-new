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
		slidesNavigation: true,
		slidesNavPosition: 'top',
		scrollOverflow: bscroll,
		// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
		// 	console.log(anchorLink, index, slideAnchor, slideIndex);
		// },
		// onSlideLeave: function(anchorLink, index, slideIndex, direction){
		// 	console.log(anchorLink, index, slideIndex, direction)
		// },
		afterRender: function() {

			
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
		$('.down_and').each(function() {
			var noWeixinUrl = $(this).attr('href-nowx');
			$(this).attr('href', noWeixinUrl);
		});
	}
}

function iosWeixin() {
	'use strict';
	//deal ios weinxin cant open itunes.apple.com problem
	if (isIOS() && isWeiXin()) {
		$('.down_ios').on('click', function() {
			$('.overlay').show();
			return false;
		});
		$('.overlay').on('click',function() {
			$(this).hide();
		});

	}
}

function bindEvents() {
	'use strict';

	$(window).on('orientationchange', function() {
		setTimeout(function() {
			location.reload();
		},300);
	});

}
$(function() {
	'use strict';
    callfullpage();
    weixinurl();
    iosWeixin();
    bindEvents();
});