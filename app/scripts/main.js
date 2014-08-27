$(function() {
	callfullpage();
	weixinurl();
});

function callfullpage() {
	$("#bob").fullpage({
		css3: true,
		// slidesColor: ['#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE', '#19AEEE'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		loopBottom: true,
		slidesNavigation: true,
		slidesNavPosition: "top",
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log(anchorLink, index, slideAnchor, slideIndex);
			if(slideIndex == 2){
			  
			}
		},
		onSlideLeave: function(anchorLink, index, slideIndex, direction){

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