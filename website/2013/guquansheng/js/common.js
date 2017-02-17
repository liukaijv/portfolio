// JavaScript Document
$(function(){
	
	//相等高度
	function eq_height(obj1,obj2){			
		var obj1=$(obj1);		
		var obj2=$(obj2);						
		if(obj1.height()>=obj2.outerHeight()){
			obj2.height(obj1.outerHeight());			
		}else{			
			obj1.height(obj2.outerHeight());			
		}		
	}
	
	//搞定左侧浮动的位置		
	var offl=$('.contianer').offset().left;	
	var wh=$(window).height();
	$('.bar').css({left:offl+'px',height:(wh-50)+'px'});	
	$(window).resize(function(){
		var offl=$('.contianer').offset().left;
		var wh=$(window).height();
		$('.bar').css({left:offl+'px',height:(wh-50)+'px'});
	});
	
	//ie6 fixed
	if($.browser='MSIE'&&$.browser.version=='6.0'){
		var top=$('.bar').position().top;				
		$(window).scroll(function(){			
			var s=$(window).scrollTop();
			$('.top').css({top:s+"px"});
			$('.bar').css({top:top+s+"px"});		
		})		
	}
	
	//搜索focus and blur
	$.focusBlur=function(parent){
		var _my=$(parent).find('.search_text');		
		var defval=_my.val();			
		_my.focus(function(){		
			if($(this).val()==defval){			
				$(this).val('');	
			}
		});	
		_my.blur(function(){		
			if($(this).val()==''){
				$(this).val(defval);	
			}
		});
	}
	$.focusBlur('.header');
	$.focusBlur('.search_box01');
	//bar 的鼠标的滑轮事件
	$('.bar').jScrollPane();
	
	//提示人物资料
	$.mytip=function(obj,content){
		var tt;
		var obj=$(obj);				
		var content=$(content);		
		content.show();	
		var offt=obj.offset().top+obj.height()-10;		
		var offl=obj.offset().left+obj.width()-10;
		var tip=$('<div class="mytip"></div>').empty().wrapInner(content);			
			tip.css({left:offl+'px',top:offt+'px'});		
		obj.live('mouseenter',function(){
			tip.appendTo('body').show();		
		});
		obj.live('mouseleave',function(){
			tt=setTimeout(function(){
				tip.hide();
			},1500)
		});
		tip.bind('mouseenter',function(){
			clearTimeout(tt);
			console.log(tt);
			$(this).show();	
		});
		tip.bind('mouseleave',function(){
			$(this).hide();
		});
	}
	
	//为头像绑定提示资料事件
	$.init_li=function(){
		var my=$('.goods_list_hastip ul li');
		var num=my.length;	
		my.each(function(i){								
			$.mytip('.show'+i,'.show_det'+i);
		});
	}
	
	//记得每次有数据更新时调用一次
	$.init_li();
	
	//商品鼠标划过	
	$('.good_big_img').hover(function(){
		$(this).nextAll('p').show();		
	},function(){
		$(this).nextAll('p:visible').hide();	
	});	
	$('.good_big_img_tit_bg,.good_big_img_tit').each(function(){
		$(this).hover(function(){			
			$(this).show().siblings('p').show();	
		},function(){
			$(this).hide().siblings('p').hide();	
		});
	});
	
	//侧边栏AJAX请求好友
	/*var page=1;
	var totalPage;
	function get_friend(page){		
		$.ajax({
			type:'post',
			url:'处理页面',
			dataType:'json',
			beforeSend:function(){							
				$('#friend_list').append("<li id='loading'>loading…</li>");
			},
			success:function(data){
				//自己组装data数组吧
				$('#friend_list').empty();
				page=data.page;
				totalPage=data.total;
				//剩余的你懂的
			},
			complete:function(){
				init_page();
			},
			error:function(){
				//alert("数据加载失败…");
			}
		});	
	}	
	//好友生成上下翻页
	function init_page(){
		var pagestr='';
		if(page<0){page=1;};
		if(page>totalPage){page=totalPage;}		
		if(page==1){
			pagestr+="<span>上一页</span>";	
		}else{
			pagestr+="<span><a href='javascript:' rel="+(page-1)+">上一页</a></span>";
		}		
		if(page==totalPage){
			pagestr+="<span>下一页</span>";
		}else{
			pagestr+="<span><a href='javascript:' rel="+(page+1)+">下一页</a></span>";
		}
		$('#pagebar').html(pagestr);
	}
	//载入好友
	get_friend(1);	
	$('#pagebar span a').on('click',function(){
		var rel=$(this).attr('rel');
		if(rel){
			get_friend(rel);
		}				
	});*/
	
	//我的社区滚动效果
	function community_reco(){
		var my=$('#community_reco');
		my.animate({'margin-top':'-92px'},2000,function(){			
			my.css({'margin-top':'0'}).find("li:first").appendTo(my);	
		})
	}
	var reco_time=setInterval(community_reco,4000);
	$('#community_reco').hover(function(){
		window.clearInterval(reco_time);
	},function(){
		reco_time=setInterval(community_reco,4000);
	});
	
	$.fn.myslide=function(opt){
		var defaults={size:3,btn_up:"#btn_up",btn_down:"#btn_down"};	
	}
	
	$('#pro_cat').hover(function(){
		$(this).css('border-bottom','none').next('ul').show();	
	});
	$('#pro_catgroy').hover(function(){
		
	},function(){
		$(this).hide();
		$('#pro_cat').css('border','1px solid #bbb');
	})
	
});