// JavaScript Document
$(function(){	
	$('.case_list li').hover(function(){
		$(this).find('.case_show').show().end().find('.case_item').css({'border':'2px solid #dc34e3'});
	},function(){
		$(this).find('.case_show').hide().end().find('.case_item').css({'border':'2px solid #fff'});
	});
	//banner
	var banner=$('.banner');
	var len = banner.find('img').length;
	var current=0;
	var interval=null;
	interval=setInterval(autoplay,5000);
	function autoplay(){
		current++;
		current=current>=len-1?-1:current;	
		play(current);
	}
	function play(i){	
		banner.find('img').stop().fadeOut('fast');
		banner.find('img').eq(i).stop().fadeIn(1500);
	}
	$('.prev,.next').bind('click',function(){
		if(interval){
			clearInterval(interval);
		}
		if($(this).attr('class')=='prev'){					
			current--;
			current=current<=-1?len-1:current;
			play(current);			
		}else{
			current++;
			current=current>=len-1?-1:current;
			play(current);			
		}
		interval=setInterval(autoplay,6000);
		return false;
	});	
	
	$('#lee2').html($('#lee1').html());
	function marquee2(){
		if($('#lee').scrollLeft()>=$('#lee1').width()){			
			$('#lee').scrollLeft(0);	
		}else{			
			$('#lee').scrollLeft($('#lee').scrollLeft()+1);
		}	
	}
	var t2= setInterval(marquee2,80); 
	$('#lee a').hover(function(){
		clearInterval(t2);
	},function(){
		t2 = setInterval(marquee2, 80); 
	});
	
	$('#mar2').html($('#mar1').html());
	function marquee1(){
		if($('#mar').scrollLeft()>=$('#mar1').width()){			
			$('#mar').scrollLeft(0);	
		}else{			
			$('#mar').scrollLeft($('#mar').scrollLeft()+1);
		}	
	}
	var t3= setInterval(marquee1,80); 
	$('#mar').hover(function(){
		clearInterval(t3);
	},function(){
		t3 = setInterval(marquee1, 80); 
	});
	
	$('.bar_case_small_img img').click(function(){
		$('.bar_case_small_img img').removeClass();
		$(this).addClass('active');
		var url = $(this).attr('src');
		//alert(url);	
		$('.bar_case_big_img').fadeTo(200,0.5).find('img').attr('src',url).end().fadeTo(200,1);	
	})
	
});