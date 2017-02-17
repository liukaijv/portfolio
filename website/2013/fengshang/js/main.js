// JavaScript Document
$(function(){
	//fixie6
	if($.browser.msie && $.browser.version == 6.0){
		$('.container_shadow').css('height',$('.container_shadow').closest('.container').height());
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
	
	//幻灯
	$('#slider').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		effect: 'fade',		
		slideSpeed: 800,		
		play: 5000,
		pause: 2500	
	});
	
	//幻灯2
	$('#slider02').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		effect: 'fade',		
		slideSpeed: 800,		
		play: 5000,
		pause: 2500	
	});
	
	//侧边幻灯
	$('#bar_slide').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		effect: 'slide',		
		slideSpeed: 400,		
		play: 5000,
		pause: 2500	
	});
	
	//input默认值	
	$.clickEmpty = function(obj){		
		var tar = $(obj);		
		var defVal = tar.val();
		tar.focus(function(){
			var curVal = tar.val();			
			if(curVal == defVal){
				tar.val('');
			}	
		}).blur(function(){
			var curVal =tar.val();
			if(curVal == ''){
				tar.val(defVal);	
			}	
		});	
	}
	
	//$('.search_text')||$.clickEmpty('.search_text');
	
	//积分商品变色
	$('.integral_item').hover(function(){
		$(this).css({'background-color':'#c82067','color':'#fff'}).find('.exchang_btn').css('color','#333');	
	},function(){
		$(this).css({'background-color':'#e4ded0','color':'#333'}).find('.exchang_btn').css('color','#fff');;	
	});	
	
	/*分享样式操作*/
	$('.share_list li').hover(function(){
		$(this).find('.share_tit_bg').show().end().find('.share_tit').show().end().find('img').css('border','1px solid #c82067');
	},function(){
		$(this).find('.share_tit_bg').hide().end().find('.share_tit').hide().end().find('img').css('border','1px solid #ddd');
	});
	
	
	//textarea字符统计
	$.fn.countNum = function(opt){		
		var def = {num:200,numObj:'.num'}	
		def = $.extend(def,opt || {});
		var that = $(this);
		var num =$(def.numObj).text(def.num);
		var nowNum = that.val().length;;
			num.text(def.num-nowNum);
		that.bind('keyup',function(){
			nowNum = that.val().length;
			num.text(def.num-nowNum);
			if(nowNum>=def.num){
				that.unbind('keyup');
				return;		
			}		
		});			
	}	
	$('.count_char')|| $('.count_char').countNum({num:300});
	
	/*点击推荐*/
	$('.hit_share').click(function(){		
		/*ajax*/		
		$(this).toggleClass('hit_shared');			
	});
	
	$('.list_hover li').hover(function(){
		$(this).css('background-color','#f4f4f4');	
	},function(){
		$(this).css('background-color','#fff');	
	});
	
	//关于我们图片展示
	$('.prev').find('img').attr('title','最前面了').animate({opacity:0.5});
	var aWrap =	$('.about_slide');
	var aNum = aWrap.find('li').length;
	var aw = aWrap.find('li').outerWidth()*3+60;
	var aPage = Math.ceil(aNum/3);
	var aCurrent =0;	
	$('.prev').click(function(){
		$(this).next().find('img').attr('title','').animate({opacity:1});
		if(aCurrent <= 0){
			$(this).find('img').attr('title','最前面了').animate({opacity:0.5});
			return;
		}else{
			$(this).find('img').attr('title','').animate({opacity:1});
			aWrap.animate({'left':'+='+aw+'px'},500);
			aCurrent--;
		}		
	});
	$('.next').click(function(){
		$(this).prev().find('img').attr('title','').animate({opacity:1});
		if(aCurrent >= aPage-1){
			$(this).find('img').attr('title','最后面了').animate({opacity:0.5});
			return;	
		}else{			
			$(this).find('img').attr('title','').animate({opacity:1});
			aWrap.animate({'left':'-='+aw+'px'},500);
			aCurrent++;
		}
		
	});
	
	//抢购倒计时
    setInterval(function(){ 
      $(".endtime").each(function(){ 
        var obj = $(this); 
        var endTime = new Date(parseInt(obj.attr('value')) * 1000); 
        var nowTime = new Date(); 
        var defTime=endTime.getTime() - nowTime.getTime(); 
        var myD=Math.floor(defTime/(1000 * 60 * 60 * 24))
        var myH=Math.floor(defTime/(1000*60*60)) % 24; 
        var myM=Math.floor(defTime/(1000*60)) % 60;  
        var myS=Math.floor(defTime/1000) % 60; 
        var myMS=Math.floor(defTime/100) % 10;
        if(myD>= 0){ 
            var str = myD+"天"+myH+"小时"+myM+"分"+myS+"."+myMS+"秒"; 
        }else{ 
            var str = "已结束！";     
        } 
        obj.html(str); 
      }); 
    }, 100); 

	//关于我们图片展示	
	var styWrap =	$('.style_l_box');
	var styLeft = $('.style_left');
	var styRight = $('.style_right')
	var styLen = $('.style_item',styWrap).length;
	var styW = $('.style_item',styWrap).width();	
	var styCurrent =0;	
	styLeft.click(function(){	
		if(styCurrent <= 0){
			$(this).attr('title','最前面了');
			return;			
		}else{
			styRight.attr('title','下一页')			
			styWrap.animate({'left':'+='+styW+'px'},500);
			styCurrent--;
		}		
	});
	styRight.click(function(){		
		if(styCurrent >= styLen-1){
			$(this).attr('title','最后面了');
			return;
		}else{
			styLeft.attr('title','上一页');		
			styWrap.animate({'left':'-='+styW+'px'},500);
			styCurrent++;
		}		
	});
	
	$('.style_item ul li').click(function(){
		if($(this).is('.select'))return;		
		$('.style_item ul li').removeClass('select');
		$(this).addClass('select');
		if($.browser.msie && $.browser.version == 6.0)return;
		$('.slide_page').show();	
	});
	$('.slide_page_close').click(function(){
		$('.slide_page').hide();
		$('.style_item ul li').removeClass('select');
		return false;
	});
	
	//banner
	var banner=$('.i_banner');
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
	$('.i_prev,.i_next').bind('click',function(){
		if(interval){
			clearInterval(interval);
		}
		if($(this).attr('class')=='i_prev'){					
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
	
	/*$('#i_about_slide').bxCarousel({		
		display_num: 2, 
		move: 1,
		margin: 11,
		auto:true 
	});	*/
	
	
	//照片分享上传
	var delImg = $('.del');
	var btnComfirm = $('.upload_comfirm_btn');	
	var btn = $(".upload_btn span");
	var files = $(".photo_up_list");
	$('#fileupload').wrap("<form id=\"myupload\" method=\"post\" action=\"action.aspx\" enctype=\"multipart/form-data\"></form>");
	//上传
	$('#fileupload').change(function(){
		$('#myupload').ajaxSubmit({
			dataType:  'json',
			beforeSend: function() {        					
				btn.html("上传中");
    		},    		
			success: function(data) {				
				var img = ""+data.pic;
				files.apend("<li><img src=\"+img+\" height=\"105\" width=\"70\"></li>");				
				btn.html("浏览照片");
			},
			complete:function(){
				$('.photo_up_list li').each(function(){
					var that=$(this);
					var pos=that.find('img').position();
					var delBtn=$("<div class=\"del\">删除</div>").css('left',pos.left);						
					that.append(delBtn);		
				}).hover(function(){
					if($(this).find('.del') != 'undifined'){
						$(this).find('.del').show();
					}
				},function(){
					if($(this).find('.del') != 'undifined'){
						$(this).find('.del').hide();
					}
				});	
			},
			error:function(xhr){
				btn.html("上传失败");				
			}
		});
	});
	//删除
	delImg.live('click',function(){
		var img = $(this).prev('img').attr('src');
		var url = '';
		$.post(url,{img:img},function(msg){
			if(msg==1){
				$(this).parent().remove();	
			}else{
				alert('出错了');	
			}
		});
	});
	
	//确认上传
	btnComfirm.click(function(){
		var arr=new Array();
		$('.photo_up_list li').each(function(i){
			that = $(this);
			var img = that.find('img').attr('src');
			arr.push(img);
		});
		alert(arr);
		//下面的看着办吧
		return false;
	});
	
	//面试
	$(".inter_cb").click(function(){
		name=$(this).attr("name");
		type=$(this).attr("type");
		if($(this).attr("checked")==true||$(this).attr("checked")=='checked'){
			if(type=="radio"){
				$("input[name='"+name+"']").parent(".interview_cb_gou").removeClass("bg_gou").addClass("bg_nogou");	
			}
			$(this).parent(".interview_cb_gou").removeClass("bg_nogou").addClass("bg_gou");
		}else{
			$(this).parent(".interview_cb_gou").removeClass("bg_gou").addClass("bg_nogou");	
		}						  
	});
		
});