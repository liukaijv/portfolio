var catalogs = [];
var items = [];
_.forEach(websites_data.children, function(catalog){	
	catalogs.push(catalog.name);	
	if(catalog.children && catalog.children.length){
		_.forEach(catalog.children, function(item){
			var path = item.children.length?websites_data.name+'/'+catalog.name+'/'+item.name+'/index.html':'javascript:;';
			items.push({
				name: item.name,
				catalog: catalog.name,
				path: path
			});
		});
	}
});

var catalog_html = '<li><a href="#" class="active" data-filter="*">ALL</a></li>';	
_.forEach(catalogs, function(v){		
	catalog_html += '<li><a href="#" data-filter=".'+v+'">'+v+'</a></li>'
});

var item_html = '';
_.forEach(_.shuffle(items), function(item){		
	item_html += '<li class="background-'+Math.ceil(Math.random()*42)+' '+item.catalog+'" style="height:'+Math.ceil(Math.random()*200+300)+'px;">'+
	'<a href="'+item.path+'" target="_blank"><span>'+item.name+'</span></a>'+
	'</li>';
});

$('#catalog').html(catalog_html);
$('#grid').html(item_html);

$('#year').html(new Date().getFullYear());

var anim_scroll = new AnimOnScroll( document.getElementById( 'grid' ), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
});

$('#catalog a').click(function(){
	var $me = $(this);
	if($me.hasClass('active')){
		return false;
	}
	var filter_name = $me.data('filter');
	$('#grid').isotope({ filter: filter_name });
	$('#catalog a').removeClass('active');
	$me.addClass('active');
	anim_scroll._scrollPage();
	return false;
});