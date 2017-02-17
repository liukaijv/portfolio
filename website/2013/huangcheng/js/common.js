// JavaScript Document
$(function(){
	//导航
	/*$('.nav li a').hover(function(){
		var pid=$(this).parent().index()+1;
		if($(this).parent().hasClass('nav_active')){			
		}else{	
			$(this).css({background:"url(images/nav_active_bg0"+pid+".jpg)"});	
		}
	},function(){
		if($(this).parent().hasClass('nav_active')){			
		}else{
			$(this).css({background:""});
		}
	});
	$('.nav li').each(function(){
		var pid=$(this).index()+1;
		if($(this).hasClass('nav_active')){			
			$(this).find('a:first').css({background:"url(images/nav_active_bg0"+pid+".jpg)"});	
		}	
	});
	$(".nav li a").each(function(){
		if($(this).hasClass('nav_active')){
			var ll=$(this).position().left;
			$(this).css({"background":"url(images/header_bg_nav.jpg) -"+ll+"px"});
		}
	});
	var timerId;
	$(".nav li a").live('mouseenter',function(){
		var sub_num=$(this).parent().index();
		var off=$(this).position().left;		
		var mw=$(this).width();
		var my=$(this);		
		if(!my.hasClass('nav_active')){
			my.css({"background":"url(images/header_bg_nav.jpg) -"+off+"px"});	
		}		
		$('.sub_nav ul').hide();
		var _this=$('.sub_nav').find('ul#nav'+sub_num);
		var pw=_this.width();				
		off=off-(pw-mw)/2;		
		_this.css('left',off+'px').show();
		timerId=setTimeout(function(){
			_this.hide();			
		},2500);
	}).live('mouseleave',function(){		
		if(!$(this).hasClass('nav_active')){
			$(this).css({"background":"none"});
		}		
	});	
	$('.sub_nav ul').mouseenter(function(){
		clearTimeout(timerId);	
	});
	$('.sub_nav ul').mouseleave(function(){
		$(this).hide();
	});*/
		
	

	$.myfloat=function(obj,w){			
		var my=$(obj);
		var ww=$(window).width();
		if(ww<900){
			my.hide();	
		}			
		var mytop=my.position().top;		
		$(window).scroll(function(){			
			var wtop=$(window).scrollTop();	
			my.animate({top:(mytop+wtop)+"px"},40);
		});
		my.find('h1').toggle(function(){
			$(this).parent().width(w+'px');
			$(this).next().show();
		},function(){
			$(this).parent().width(30);
			$(this).next().hide();
		});
		my.find('a.gotop_btn').live('click',function(){
			$('body ,html').animate({scrollTop:"0px"},100);			
			return false;
		})
		$(window).resize(function(){
			var ww=$(window).width();
			if(ww<900){
				my.hide();	
			}else{
				my.show();
			}	
		})
	}
	$.myfloat('.right_float',200);
	
	
	
	/*$("#slide02").html($("#slide01").html());	
	function scrollLeft(){
		if($("#slide").scrollLeft()>=$("#slide01").width()){
			$("#slide").scrollLeft(0);			
		}else{
			$("#slide").scrollLeft($("#slide").scrollLeft()+1);
			
		}
	}
	var leftTimer=setInterval(scrollLeft,50);
	$("#slide").hover(function(){
		clearInterval(leftTimer);
	},function(){
		leftTimer=setInterval(scrollLeft,50);
	});
	
	$(".bar_nav li[class='sub_nav_fcs']>a").css({'border-bottom':'1px dotted #18100d','color':'#ffdaad'});
	$(".bar_nav li a[class!='sub_nav_active']").hover(function(){
		$(this).parent().addClass('sub_nav_fcs');
	},function(){		
		$(this).parent().removeClass('sub_nav_fcs');
	});
	
	$('.mian_content').jScrollPane();
	
	$.floatLeft=function(obj){
		var my=$(obj);
		var mytop=my.position().top;		
		$(window).scroll(function(){			
			var wtop=$(window).scrollTop();	
			my.animate({top:(mytop+wtop)+"px"},80);
		});
		my.find('a.gotop_btn').live('click',function(){
			$('body ,html').stop(true,true).animate({scrollTop:"0px"},100);			
			return false;
		});
	}

	$('.div_select em').click(function(e){
		$('.div_select ul').hide();
		$(this).next().slideToggle();		
	});
	$('.div_select ul li').click(function(){
		var txt=$(this).text();
		$(this).parent().slideUp().prev().html(txt);	
	});
	$(document).click(function(e){
		var tar=$(e.target);		
		if(!tar.parents().hasClass('div_select')){
			$('.div_select ul').slideUp();
		}
	});
	
*/
});