// JavaScript Document
function img_resize(pic,w,h){
	
	var _this=$(pic);	
	var _old_h=_this.height();
	var _old_w=_this.width();
	
	//ȡ��߱���
	var compare_w=_old_w/w;
	var compare_h=_old_h/h;
	
	//ȡ˭��Ϊ����
	
	//�ȱ���������
	if(compare_w==compare_h){
		//���˸�С
		if(_old_w>w){
			_this.width(w);
			_this.height(_old_h*compare_w);
		}
		//С�˸��
		if(_old_w<w){
			
		}		
	}
	
	//��������ˣ�ȡ��Ϊ����
	else if(compare_w>compare_h){
		_this.heigth(compare_w*h);
		_this.width(w);
		alert(11);
	}
	//��������ˣ�ȡ��Ϊ����
	else if(compare_w<compare_h){
		_this.height(h);
		_this.width(compare_h*w);
		alert(11);
		
	}else{
		alert(11);
	}
	
}