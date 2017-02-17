// JavaScript Document
$(function(){		
	//menu
	var tar_con = $('.nav_tab li a').filter('.actived').attr('rel');
	if(tar_con){
		$(tar_con).show().closest('.nav_panel').show();
	}	
	$('.nav_tab li a').each(function(){
		var that = $(this);
		var tar_con = that.attr('rel');		
		that.hover(function(){			
			$('.nav_panel').hide();
			$('.sub_nav_con').hide();
			if(tar_con){
				$('.nav_panel').show();
				$(tar_con).show();
			}
		});
	});
	
	$('#pro_slide').bxCarousel({		
		display_num: 3, 
		move: 4,
		margin: 10 
	});
	
	$('#gg_slide').bxCarousel({		
		display_num: 1, 
		move: 1,
		margin: 0,
		auto:true 
	});
	//banner
	$('#pro_slide li').live('click',function(){
		var img = $(this).find('img').attr('src');
		$('.product_big_img').find('img').attr('src',img).hide().fadeIn();
	}).filter(':first').trigger('click');
	
	$('#i_pro_slide').bxCarousel({		
		display_num: 4, 
		move: 1,
		margin: 12,
		auto:true 
	});	
	
	var bannerLen = $('.banner .slide a').length;
	var str ="";
	for(var j=0; j<bannerLen;j++){
		str +="<li><a>"+j+"</a></li>"
	}	
	$('.pagination').html(str);
	
	var start =0;
		play(start);
	var bannerTime = setInterval(function(){
		play(start);
		start++;				
		if(start>=bannerLen){
			start=0;
		}
	},4000);		
	function play(i){
		$('.banner .slide a').eq(i).fadeIn(800).siblings().fadeOut('fast');
		$('.pagination li').eq(i).addClass('current').siblings().removeClass('current');
	}	
	$('.pagination li').bind('click',function(){
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
		},4000);
	})
	
});