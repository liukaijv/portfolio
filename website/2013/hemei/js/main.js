// JavaScript Document
$(function(){

	//导航
	var arr=new Array(40,78,82,82,82,81,76,66);		
	$('.nav li').each(function(i){
		$(this).width(arr[i]);								
		if($(this).hasClass('nav_active')){
			var _that=i;
			var arr1 = arr.slice(0,_that);
			var w=0;
			for(var i=0;i<arr1.length;i++){
				w+=arr1[i];									
			}											
			$(this).css({background:'url(images/nav_bg.jpg) -'+w+'px 38px'});			
		}		
	});	
	$(".nav li[class != 'nav_active']").hover(function(){	
		var index = $(this).index();		
		var arr1 = arr.slice(0,index);
		var pos=0;
		for(i=0;i<arr1.length;i++){
			pos+=arr1[i];			
		}		
		$(this).css({background:'url(images/nav_bg.jpg) -'+pos+'px 38px'});
	},function(){
		$(this).css({background:'none'});
	});
	
	/*城市选择*/
	$('.other_city').click(function(e){
		$('.citys').toggle();
		e.stopPropagation;
		return false;		
	});
	$(document).click(function(){
		$('.citys').hide();
	});
	
	//合作伙伴左跑	
	function marquee2(){
		if($('#lee').scrollLeft()>=$('#lee1').width()){			
			$('#lee').scrollLeft(0);	
		}else{			
			$('#lee').scrollLeft($('#lee').scrollLeft()+1);
		}	
	}
	
	if($('#lee ul li:first').width()>980){
		$('#lee2').html($('#lee1').html());
		var t2= setInterval(marquee2,80);
		$('#lee1 a').hover(function(){
			clearInterval(t2);
		},function(){
			t2 = setInterval(marquee2, 80); 
		});
	}
	
	$('.news_list dt a').hover(function(){
		$('.news_list dt a').removeClass('active');
		$('.news_list dd').hide();
		$(this).addClass('active').parent().next().show();
	}).first().addClass('active').parent().next().show();;
	
	var case_w=$('.case_show_wrap ul li:first').outerWidth()+10;
	var case_p=$('.case_show_wrap ul');
	//alert(case_w);
	var case_time=setInterval(function(){
		case_p.animate({"margin-left":"-"+case_w+"px"},1000,function(){
			case_p.css({"margin-left":"0px"}).find("li:first").appendTo(case_p);
		});
	},4000);
	
	case_p.hover(function(){
		clearInterval(case_time);	
	},function(){
		case_time=setInterval(function(){
			case_p.animate({"margin-left":"-"+case_w+"px"},1000,function(){
				case_p.css({"margin-left":"0px"}).find("li:first").appendTo(case_p);
			});
		},4000);
	});
	
	$('.banner').slides({
		preload: true,
		//effect:"slide",
		effect:"fade",
		//preloadImage: 'img/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true				
	});
	
	$("#KinSlideshow").KinSlideshow({	
			intervalTime:8,
			mouseEvent:"mouseover",
			isHasTitleBar:false,			
			titleFont:{TitleFont_size:10,TitleFont_color:"#FFF"},
			btn:{btn_bgAlpha:1,btn_bgColor:"#5b5b5b",btn_borderWidth:0,btn_bgHoverColor:"#ff2a00",btn_fontHoverColor:"#fff"}
	});

	$.trun_LR=function(){
		$('.gift_animait_tit span').html($('.gift_animait_wrap ul li').eq(0).find('a').attr('title'));
		var gift_len=$('.gift_animait_wrap ul li').length;				
		var gift_num=1;
		$('.trun_r_btn').click(function(){
			if(gift_num==gift_len){
				$(this).attr('title','后面没有了哦');					
			}else{
				$(this).attr('title','');									
				$('.gift_animait_wrap ul').animate({left:'-=220px'},500);
				$('.gift_animait_tit span').html($('.gift_animait_wrap ul li').eq(gift_num).find('a').attr('title'));
				gift_num++;
			}
			return false;						
		})
		$('.trun_l_btn').click(function(){
			if(gift_num==1){
				$(this).attr('title','前面没有了哦');	
			}else{
				$(this).attr('title','');
				$('.gift_animait_wrap ul').animate({left:'+=220px'},500);
				gift_num--;					
				$('.gift_animait_tit span').html($('.gift_animait_wrap ul li').eq(gift_num-1).find('a').attr('title'));					
				
			}
			return false;						
		});
	}
	$.trun_LR();
	
	$.case_show=function(){
	var curren1=1;	
	var _allpage1=$('.small_thums_wrapper ul li').length;
	$('.big_photo').find('img').attr('src',$('.small_thums_wrapper ul li').eq(0).find('img').attr('src')).hide().fadeIn(500);				
	$('.thubm_left').click(function(){		
		if(!$('.small_thums_wrapper ul').is(':animated')){
			if(curren1==1){
				$(this).attr('title','最前一张了');
				$('.small_thums_wrapper ul li').find('img').removeClass('fcous');
				$('.small_thums_wrapper ul li').eq(curren1-1).find('img').addClass('fcous');			
				$('.big_photo').find('img').attr('src',$('.small_thums_wrapper ul li').eq(curren1-1).find('img').attr('src')).hide().fadeIn(500);						
			}else{
				$(this).attr('title','');
				$('.small_thums_wrapper ul').animate({left:'+=125px'},500);										
				curren1--;
				$('.small_thums_wrapper ul li').find('img').removeClass('fcous');
				$('.small_thums_wrapper ul li').eq(curren1-1).find('img').addClass('fcous');
				$('.big_photo').find('img').attr('src',$('.small_thums_wrapper ul li').eq(curren1-1).find('img').attr('src')).hide().fadeIn(500);							
			}		
			return false;
		}		
	})
	$('.thubm_right').click(function(){	
		if(!$('.small_thums_wrapper ul').is(':animated')){
			if(curren1==_allpage1){
				$(this).attr('title','最后一张了');
				$('.small_thums_wrapper ul li').find('img').removeClass('fcous');
				$('.small_thums_wrapper ul li').eq(curren1-1).find('img').addClass('fcous');			
				$('.big_photo').find('img').attr('src',$('.small_thums_wrapper ul li').eq(curren1-1).find('img').attr('src')).hide().fadeIn(500);					
			}else{
				$(this).attr('title','');
				$('.small_thums_wrapper ul').animate({left:'-=125px'},500);						
				curren1++;
				$('.small_thums_wrapper ul li').find('img').removeClass('fcous');
				$('.small_thums_wrapper ul li').eq(curren1-1).find('img').addClass('fcous');
				$('.big_photo').find('img').attr('src',$('.small_thums_wrapper ul li').eq(curren1-1).find('img').attr('src')).hide().fadeIn(500);				
			}		
			return false;
		}
		
	});
	$('.small_thums_wrapper ul li a').click(function(){
		$('.small_thums_wrapper ul li').find('img').removeClass('fcous');		
		curren1=$(this).parent().index()+1;
		$(this).find('img').addClass('fcous');
		$('.big_photo').find('img').attr('src',	$(this).find('img').attr('src')).hide().fadeIn(500);		
		return false;
	});
	}
	$.case_show();
	
	//浮动QQ
	$.qqFloat=function(){
		$(window).resize(function(){
			if($(this).width()<1000){				
				$('.qq_wrap').hide();	
			}else{
				$('.qq_wrap').show();
			}
		});
		if($.browser.msie && $.browser.version == 6.0){
			var h=$('.qq_wrap').position().top;
			$(window).scroll(function(){				
				var st=$(window).scrollTop();
				st = h+st;
				$('.qq_wrap').stop().animate({top:st+'px'},100);
			});
		}
	}
	$.qqFloat();
});
