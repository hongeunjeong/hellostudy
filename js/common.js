$(function(){
   	//1. 버튼 클릭 이벤트(이전, 다음 버튼 클릭 이벤트)
   	//2. 슬라이드 움직임(이전 슬라이드 보여주기, 다음 슬라이드 보여주기)

   	var $button = $('.slider_default .btn_control');

   	$button.on('click', function(e){
   		e.preventDefault();

   		if($(this).is('.btn_prev')){ //이전버튼
   			//이전 슬라이드 보여주기
   			moving('prev');
   		} else { //다음버튼
   			//다음 슬라이드 보여주기
   			moving('next');
   		}
   	})

   	var box = $('.slider_container .inner');
   	var list = box.find('.slider_list');
   	var listWidth = list.outerWidth(true);
   	var listLength = list.length;
   	var boxWidth = listWidth * listLength;

	box.css('width', boxWidth);

	function moving(control){
		var box = $('.slider_container .inner');
	   	var list = box.find('.slider_list');
	   	var listWidth = list.outerWidth(true);
	   	var listLength = list.length;
	   	var boxWidth = listWidth * (listLength - 1);

	   	if(control == 'prev' && parseInt(box.css('margin-left')) < 0){
	   		box.not(':animated').animate({
	   			'margin-left':'+=' + listWidth
	   		})
	   	} else if(control == 'next' && parseInt(box.css('margin-left')) > -boxWidth){
	   		box.not(':animated').animate({
	   			'margin-left':'-=' + listWidth
	   		})
	   	}
	}
})