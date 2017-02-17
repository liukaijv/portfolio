// JavaScript Document
$(function(){
	//fixie6
	if($.browser.msie && $.browser.version == 6.0){
		//$('.pro_border').height($('.pro_border').closest('.pro_main').height());
	}	
	//不间断左滚动	
	$('#marquee2').html($('#marquee1').html());
	function marquee(){
		if($('#marquee').scrollLeft() >= $('#marquee1').width()){			
			$('#marquee').scrollLeft(0);	
		}else{			
			$('#marquee').scrollLeft($('#marquee').scrollLeft() + 1);
		}	
	}
	var marqueeId = setInterval(marquee,80); 
	$('#marquee').hover(function(){
		clearInterval(marqueeId);
	},function(){
		marqueeId = setInterval(marquee, 80); 
	});	
	
	$('.product_list li').hover(function(){
		$('.product_list li').css('color','#333').find('.overlay').removeClass('hover');
		$(this).css('color','#2758a5').find('.overlay').addClass('hover');
	},function(){		
		$(this).css('color','#333').find('.overlay').removeClass('hover');
	});
	
	$('.news_list li').hover(function(){
		$('.news_list li').css('background','none');
		$(this).css('background','#eaeaea');
	});
	
	$('.bar_pro_nav>li').click(function(){
		if($(this).is('.clicked'))return;		
		$('.bar_pro_nav>li').removeClass('clicked').find('ul').slideUp();
		$(this).addClass('clicked').find('ul').slideDown();	
	}).filter(':first').find('ul').slideDown();	
	

	$('#slider').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		effect: 'fade',		
		slideSpeed: 800,		
		play: 5000,
		pause: 2500	
	});
	
	$('.pro_prev').attr('title','最前面了').animate({opacity:0.5});
	var aWrap =	$('.pro_container');
	var aNum = aWrap.find('li').length;
	var aw = aWrap.find('.pro_slide_item').outerWidth();
	var aPage = Math.ceil(aNum/5);
	var aCurrent =0;	
	$('.pro_prev').click(function(){
		$(this).next().attr('title','').animate({opacity:1});
		if(aCurrent <= 0){
			$(this).attr('title','最前面了').animate({opacity:0.5});
			return;
		}else{
			$(this).attr('title','').animate({opacity:1});
			aWrap.animate({'left':'+='+aw+'px'},500);
			aCurrent--;
		}		
	});
	$('.pro_next').click(function(){
		$(this).prev().attr('title','').animate({opacity:1});
		if(aCurrent >= aPage-1){
			$(this).attr('title','最后面了').animate({opacity:0.5});
			return;	
		}else{			
			$(this).attr('title','').animate({opacity:1});
			aWrap.animate({'left':'-='+aw+'px'},500);
			aCurrent++;
		}		
	});
	
});