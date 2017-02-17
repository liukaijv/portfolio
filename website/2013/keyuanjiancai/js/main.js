$(function(){
	//fixie6
	if($.browser.msie && $.browser.version == 6.0){}
	
	//banner
	var bannerNav = $('.banner_slide_nav');
	var bannerWrap = $('.slides');
	var bannerLen = bannerWrap.find('a').length;
	var str ="";
	for(var j=0; j<bannerLen;j++){
		str +="<li><a>"+j+"</a></li>"
	}	
	bannerNav.html(str).hide();
	var bannerW = bannerNav.width();
	bannerNav.css('margin-left','-'+bannerW/2+'px').show();		
	var start =0;
		play(start);
	var bannerTime = setInterval(function(){
		play(start);
		start++;				
		if(start>=bannerLen){
			start=0;
		}
	},5000);		
	function play(i){
		bannerWrap.find('a').eq(i).fadeIn(800).siblings().fadeOut('fast');
		bannerNav.find('li').eq(i).addClass('current').siblings().removeClass('current');
	}	
	bannerNav.find('li').bind('click',function(){
		if($(this).hasClass('current'))return;
		var curIndex = $(this).index();
		if(bannerTime){
			clearInterval(bannerTime);
		}
		play(curIndex);
		start=curIndex+1;
		bannerTime = setInterval(function(){
			play(start);			
			start++;			
			if(start>=bannerLen){
				start=0;
			}
		},5000);
	});
	
	var proSlide = $('.pro_pos');
	var proW = proSlide.find('ul').width();	
	$('.pro_cate li').click(function(){
		if($(this).find('a').hasClass('select'))return;
		var curIndex = $(this).index();
		$('.pro_cate li a').removeClass('select');
		$(this).find('a').addClass('select');
		proSlide.animate({'margin-left':'-'+proW*curIndex+'px'},500);	
	}).filter(':first').trigger('click');
	
	$('.news_list li').hover(function(){
		$('.news_list li').find('a').removeClass('hover').end().find('.time').removeClass('hover');
		$(this).find('a').addClass('hover').end().find('.time').addClass('hover');
	},function(){
		$('.news_list li').find('a').removeClass('hover').end().find('.time').removeClass('hover');
	}).filter(':first').trigger('mouseover');
});