// JavaScript Document
$(function(){	
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
	
	$(".sub_nav_list>li").hover(function(){		
		if($(this).find('ul').length<1)return;			
		$(".sub_nav_list li ul").hide();
		$(".sub_nav_list>li").children('a').removeClass('active');
		$(this).children('a').addClass('active');
		$(this).find('ul').show();
	}).filter(':first').mouseover();
	
	$(".scrollable").scrollable(); 
	$('.items img').click(function(){
		if($(this).hasClass('.active')){
			return;	
		}
		var tit=$(this).attr('title');
		var url=$(this).attr('src');
		var wrap=$('.image_wrap').fadeTo(200,0.5);
		var img=new Image();
		img.onload = function(){
			wrap.fadeTo('fast',1);
			wrap.find('img').attr('src',url);
		}
		img.src=url;
		$('.image_tit').html(tit);
		$('.items img').removeClass('active');
		$(this).addClass('active');
	}).filter(':first').click();
	
});