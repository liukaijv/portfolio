// JavaScript Document
$(function(){
	
	//等高
	function eq_height(obj1,obj2){			
		var obj1=$(obj1);		
		var obj2=$(obj2);						
		if(obj1.height()>=obj2.outerHeight()){
			obj2.height(obj1.outerHeight());			
		}else{			
			obj1.height(obj2.outerHeight());			
		}		
	}
	//你懂的	
	eq_height('.bar','.main');
	eq_height('.content','.right_border');	
	eq_height('.left_border','.right_border');	
		
	//祝福向上跑
	$("#colee2").html($("#colee1").html());
	function marquee1() {
		if($("#colee").scrollTop()>=$("#colee1").height()){
			$("#colee").scrollTop(0);
		}else{
			$("#colee").scrollTop($("#colee").scrollTop()+1);
		}
	}	
	var t = setInterval(marquee1,80); 
	$("#colee1 ul li a").hover(function(){
		clearInterval(t);
	},function(){
		t = setInterval(marquee1, 80); 
	});
	
	//合作伙伴左跑
	$('#lee2').html($('#lee1').html());
	function marquee2(){
		if($('#lee').scrollLeft()>=$('#lee1').width()){			
			$('#lee').scrollLeft(0);	
		}else{			
			$('#lee').scrollLeft($('#lee').scrollLeft()+1);
		}	
	}
	var t2= setInterval(marquee2,80); 
	$('#lee1 a').hover(function(){
		clearInterval(t2);
	},function(){
		t2 = setInterval(marquee2, 80); 
	});
	
	$('.banner').slides({
		preload: true,
		//effect:"slide",
		effect:"fade",
		preloadImage: 'img/loading.gif',
		play: 5000,
		pause: 2500,
		hoverPause: true				
	});
	
	$('.nav>a').hover(function(){
		var my=$(this);
		var pos=my.index();
		var offl=my.position().left;
		var w=(my.parent().find('.nav0'+pos).width()-my.width())/2;			
		var l=parseInt(offl)-w;
		my.parent().find('.nav0'+pos).css({top:'48px',left:l+'px'}).show();
	},function(){
		$('.nav ul').hide();
	});	
	
	$('.nav ul').hover(function(){				
		$(this).show();	
	},function(){
		$(this).hide();	
	})
			
	
});