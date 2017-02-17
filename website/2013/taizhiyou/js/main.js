// JavaScript Document
$(function(){
	//fix ie6
	/*if($.browser.msie && $.browser.version == 6.0){	
		$(document).pngFix();		
	}*/
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
	
});