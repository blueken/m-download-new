function bindEvents() {
	$(window).bind("orientationchange", function() {
		g_timeout_handler = setTimeout(function() {
			location.reload();
		},300);
	})


}
function calcDotsPos() {
	var dotsbgy = ($(".dots_bg").offset()).top;
	console.log("dotsbgy:"+dotsbgy);
	dotsbgy = dotsbgy * 0.5 - 6;
	$(".fullPage-slidesNav.top").css("top", dotsbgy+"px");
}
function callfullpage() {
	var bscroll = ($(window).width() > $(window).height()) ? true : false;
	bscroll = false;
	$("#bob").fullpage({
		css3: true,
		// slidesColor: ['#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE'],
		anchors: ['hjmdown', 'page2', 'page3', 'page4', 'page5'],
		// loopBottom: true,
		slidesNavigation: true,
		slidesNavPosition: "top",
		scrollOverflow: bscroll,
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log(anchorLink, index, slideAnchor, slideIndex);
			if(slideIndex == 2){
			  
			}
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){

		},
		afterRender: function() {
			
			setTimeout(function() {
				calcDotsPos();
			}, 300);
			
		}


	});


	
}
function weixinurl() {
	if (!isWeiXin()) {
		var no_weixin_url = $(".down_and").attr("href-nowx");
		$(".down_and").attr("href", no_weixin_url);
	};
}
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}