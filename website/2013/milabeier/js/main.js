// JavaScript Document
$(function(){	
	//导航
	var nav_arr=['婚纱礼服','定制服务','活动套餐','案例展示','关于我们','联系我们'];
	$('.nav_l li a').each(function(i){		
		$(this).not('.nav_focus').before($(this).clone().html(nav_arr[i]).removeClass().addClass('nav_hover'));
	});
	$('.nav_l li').hover(function(){
		$(this).find('.nav_hover').stop().animate({'margin-top':'0px'});
	},function(){
		$(this).find('.nav_hover').stop().animate({'margin-top':'-37px'});
	});
	$('.nav_l li').each(function(i){				
		$(this).find('.nav_focus').html(nav_arr[i]);
	});	
	var timmer=null;
	var sub_nav=$('.sub_nav');
	$('.has_sub_nav').live('mouseenter',function(){
		var l=$(this).position().left;
		var w=($(this).outerWidth()-sub_nav.outerWidth())/2;		
		var p=l+w;		
		sub_nav.css({'left':p+'px','z-index':'999'}).slideDown();
		timmer=setTimeout(function(){
			sub_nav.stop().slideUp();
		},1500)
	});
	sub_nav.hover(function(){
		if(timmer){
			clearTimeout(timmer);	
		}		
	},function(){
		sub_nav.stop().slideUp('slow');
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
	
	var sub_img=$('.sub_banner img');
	var sub_len=sub_img.length;
	var sub_cur=0;
	function sub_paly(i){			
		sub_img.stop().fadeOut('fast');
		sub_img.eq(i).stop().fadeIn(1500);	
	}
	setInterval(function(){
		sub_cur++;
		//alert(sub_cur);
		sub_cur=sub_cur>=sub_len-1?-1:sub_cur;
		sub_paly(sub_cur);
	},6000);
	
	var show_img_wrap=$('.img_show_wrap ul');
	var show_img_wrap_w=show_img_wrap.find('li:first').width();
	$('.img_show_wrap ul li').click(function(){
		show_img_wrap.stop().animate({"margin-left":"-"+show_img_wrap_w+"px"},800,function(){
			show_img_wrap.css({'margin-left':'0px'}).find('li:first').appendTo(show_img_wrap);
		});
	});	
	
	$('.art_list li').hover(function(){
		$(this).css('background-color','#e8e7e7');
	},function(){
		$(this).css('background-color','');
	});	

	$('.work_list li').hover(function(){	
		$(this).find('.work_item_con').show();	
	},function(){
		$(this).find('.work_item_con').hide();	
	});
	
	$(".ntegral_list_ani dt:first").hide();
	$(".ntegral_list_ani dd:first").show();
	$(".ntegral_list_ani dt").hover(function(){
		$(".ntegral_list_ani dd").hide();
		$(".ntegral_list_ani dt").show();
		$(this).hide().next().show();
	});
	
	$('.ques_list dt:first').css({color:"#9d1609"}).next().show();
	$('.ques_list dt').hover(function(){
		$('.ques_list dd').hide();
		$('.ques_list dt').css({color:"#2d2d2d"});
		$(this).css({color:"#9d1609"}).next().show();			
	});
	
	$('.dress_slide li').click(function(){
		var _this= $(this);
		var url = _this.find('img').attr('src');
			//如果要小图看着办
			url == url.replace('','');
		var wrap = $('.big_img');
		wrap.fadeTo(200,0.5);
		var img=new Image();
		img.onload=function(){
			wrap.fadeTo(200,1);
			wrap.find('img').attr('src',url);
		}
		img.src=url;
		$('.dress_slide li').removeClass('active');
		$(this).addClass('active');
	}).filter(':first').click();
	
	var num_text=$('.num_text');
	num_text.val(1);	
	num_text.bind('keyup',function(){
		var reg=/^[1-9]{1,4}$/;
		var num_val=num_text.val();					
		if(!reg.test(num_val)){
			alert("亲，数量必须为整数！");
			$(this).focus().val(1).select();
		}
	});
	$('.add').click(function(){
		var num_val=parseInt(num_text.val())+1;
		if(num_val.length>4){
			return;
		}
		num_text.val(num_val);
	});
	$('.cut').click(function(){
		var num_val=parseInt(num_text.val())-1;
		if(num_val<1){
			return;
		}
		num_text.val(num_val);
	});
	
});