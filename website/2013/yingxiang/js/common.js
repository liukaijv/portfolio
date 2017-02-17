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
	eq_height('#bar','#main')
	
	$('#lee2').html($('#lee1').html());
	function marquee1(){
		if($('#lee').scrollLeft()>=$('#lee1').width()){			
			$('#lee').scrollLeft(0);	
		}else{			
			$('#lee').scrollLeft($('#lee').scrollLeft()+1);
		}	
	}
	var t1= setInterval(marquee1,50); 
	$('#lee1 a').hover(function(){
		clearInterval(t1);
	},function(){
		t1 = setInterval(marquee1, 50); 
	});	
	
	$('#mar2').html($('#mar1').html());
	function marquee2(){
		if($('#mar').scrollLeft()>=$('#mar1').width()){			
			$('#mar').scrollLeft(0);	
		}else{			
			$('#mar').scrollLeft($('#mar').scrollLeft()+1);
		}	
	}
	var t2= setInterval(marquee2,80); 
	$('#mar1 a').hover(function(){
		clearInterval(t2);
	},function(){
		t2 = setInterval(marquee2, 80); 
	});	
	
	$('.nav>a').hover(function(){
		if(!$(this).hasClass('nav_active')){
			$('.nav ul[class!="nav_active"]').hide();
			var l=$(this).position().left;
			var p=$(this).next('ul');
			var pos=(p.width()-$(this).width())/2;
			pos=l-pos;
			p.css({left:pos+'px'}).css('height','auto').show();
		}
	},function(){
		if(!$(this).hasClass('nav_active')){
			$('.nav ul[class!="nav_active"]').css('height','0px').hide();
		}
	});	
	
	$('.nav>a').each(function(){
		if($(this).hasClass('nav_active')){
			var l=$(this).position().left;
			var p=$(this).next('ul');
			var pos=(p.width()-$(this).width())/2;
			pos=l-pos;
			p.css({left:pos+'px'}).show();			
			$(this).hover(function(){
				$(this).next('ul').css('height','auto').show();
			},function(){				
				$(this).next('ul').css('height','0px');
			})
		}		
	});
	
	$('.nav ul').hover(function(){
		$(this).css('height','auto').show();
	},function(){
		$('.nav ul').css('height','0px').hide();
		$('.nav ul[class="nav_active"]').show();
	});
	
	var index=0;	
	var timer;
	$('.banner_wrap a:first').fadeIn();
	function auto(){
		var num=$('.banner_wrap a').length;
		index++;	
		if(index>=num){
			index=0;
		}
		$('.banner_wrap a').eq(index).fadeIn(2000).siblings().fadeOut();			
	}
	timer=setInterval(auto,6000);
	$('.banner_wrap a').hover(function(){
		clearInterval(timer);	
	},function(){
		timer=setInterval(auto,6000);
	})			
	
});