// JavaScript Document
$(function(){	
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
	
	$('.faq_list li').hover(function(){
		$(this).find('dd').css({border:"1px solid #FC9",background:"url(images/faq_icos02.png) 10px 8px no-repeat #ffedd5"})	
	},function(){
		$(this).find('dd').css({border:"1px solid #fff",background:"url(images/faq_icos02.png) 10px 8px no-repeat #fff"})	
	});
	
	 $("#KinSlideshow").KinSlideshow({
		titleBar:{titleBar_height:28,titleBar_bgColor:"#08355c",titleBar_alpha:0.6},
                titleFont:{TitleFont_size:13,TitleFont_color:"#FFFFFF",TitleFont_weight:"normal"},
                btn:{btn_bgColor:"#322725",btn_bgHoverColor:"#fb6002",btn_fontColor:"#fff",
                     btn_fontHoverColor:"#FFFFFF",btn_borderWidth:0}
	 	}
	 );
	 
	 $("#slider").easySlider({
		controlsBefore:	'<p id="controls">',
		controlsAfter:	'</p>',
		auto: true, 
		continuous: true	 
	});	
	
	$('#slides').slides({});
	
});