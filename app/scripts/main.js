function bindEvents() {
	'use strict';
	$(window).bind('orientationchange', function() {
		setTimeout(function() {
			location.reload();
		},300);
	});


}
function calcDotsPos() {
	'use strict';
	var dotsbgy = ($('.dots_bg').offset()).top;
	dotsbgy = dotsbgy * 0.5 - 6;
	$('.fullPage-slidesNav.top').css('top', dotsbgy+'px');
}
function callfullpage() {
	'use strict';
	var bscroll = ($(window).width() > $(window).height()) ? true : false;
	bscroll = false;
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
			
			setTimeout(function() {
				calcDotsPos();
			}, 300);
			
		}


	});


	
}
function isWeiXin() {
	'use strict';
    var ua = window.navigator.userAgent.toLowerCase();
    var re = /MicroMessenger/gi;
    return re.test(ua);
}
function weixinurl() {
	'use strict';
	if (!isWeiXin()) {
		var noWeixinUrl = $('.down_and').attr('href-nowx');
		$('.down_and').attr('href', noWeixinUrl);
	}
}

$(function() {
	'use strict';
    callfullpage();

    weixinurl();
    bindEvents();
});