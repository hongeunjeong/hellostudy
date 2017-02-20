$(function(){
	$('.tab_menu a').on('click',function(){
		var _self = $(this);
		var tabClass = _self.parent();
		var currentIdx = _self.parent().index();

		_self.parents('.tab_menu').find('li').removeClass('on');

		if(tabClass.hasClass('on') == false){
			tabClass.addClass('on');
			$('.tab_cont_wrap').find('.tab_cont').eq(currentIdx).show().siblings().hide();
		}
	})
	$('.gnb_cont').on('mouseenter',function(){
		$(this).parents('.gnb_sub').css('height','320px');
	})
	
	$('.gnb_cont').on('mouseleave',function(){
		$(this).parents('.gnb_sub').css('height','50px');
	})

	/* placeholder */
	$('.input_area label').on('click',function(){
		$(this).hide();
	})

	$('.input_area input').on('blur',function(){
		if($(this).val().length==false){
			$('.input_area label').show();
		}
	})

});