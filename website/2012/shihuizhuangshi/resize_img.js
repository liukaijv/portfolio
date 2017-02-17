// JavaScript Document
function img_resize(pic,w,h){
	
	var _this=$(pic);	
	var _old_h=_this.height();
	var _old_w=_this.width();
	
	//取宽高比例
	var compare_w=_old_w/w;
	var compare_h=_old_h/h;
	
	//取谁作为参照
	
	//等比例随便你搞
	if(compare_w==compare_h){
		//大了搞小
		if(_old_w>w){
			_this.width(w);
			_this.height(_old_h*compare_w);
		}
		//小了搞大
		if(_old_w<w){
			
		}		
	}
	
	//宽拉伸多了，取宽为参照
	else if(compare_w>compare_h){
		_this.heigth(compare_w*h);
		_this.width(w);
		alert(11);
	}
	//高拉伸多了，取高为参照
	else if(compare_w<compare_h){
		_this.height(h);
		_this.width(compare_h*w);
		alert(11);
		
	}else{
		alert(11);
	}
	
}