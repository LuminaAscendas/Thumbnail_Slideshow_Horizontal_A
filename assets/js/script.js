$(document).ready(function(){
	for(j=0;j<slider.length;j++){
		$('#text_container').append('<div role="none" class="text_container" id="textcont_'+(j+1)+'">'+slider[j].slide_text+'</div>');	
	}	
	//
	for(i=0;i<slider.length;i++){
			$('#bullet_'+((i+1))).append('<img class="thumb_Img" src="assets/images/thumb_'+((i+1))+'.png">');
//			$('#bullet_'+((i+1))).append('<div class="arrow" id="arrow_'+(i+1)+'"></div>')
			$('#textcont_'+(i+1)).attr('aria-label',$('#textcont_'+(i+1)).text());
			$('#imgCont_'+(i+1)+' img').attr('aria-label',slider[i].img_alt_text);
			$('#imgCont_'+(i+1)+' img').attr('alt','Slider '+(i+1));
			$('#bullet_'+(i+1)+' img').attr('alt','Slider '+(i+1));
			$('#arrow_top').append('<div class="arrow" id="arrow_'+(i+1)+'"></div>')
			
			
		
	}	
	document.body.onkeyup = function(e){
		if(e.keyCode == 32 || e.keyCode == 13){
			//alert()
			e.preventDefault();
			$('#'+document.activeElement.id).trigger('click');
			console.log(e.target.id)
			$('#'+e.target.id).focus();
			//$('#'+document.activeElement.id).focus();
		}
	}
	$('#click_popup').off('click').on('click',function(){
		$('#pop_up').css('display','inline-block')//.animate('width','123px');	
		set_tab();
//		alert()
		
	})
	
	$(".slideImg").mouseenter(function(){
		for(i=0;i<slider.length;i++){
  			$('#imgCont_'+(i+1)+' img').attr('title',slider[i].img_alt_text);
		}
	});
	
	$(".slideImg").mouseleave(function() {
  		$( ".slideImg" ).removeAttr('title');
	});
	
	
	
	$('#next_btn,#prev_btn').off('click').on('click',function(){
		$('.swiper-pagination-bullet').attr('aria-label',thumb_label[0]);
		
	});
	$('#close_btn').off('click').on('click',function(){
		$('#pop_up').css('display','none')//.animate('width','123px');	
//		$('#pop_up').hide()//.animate('width','0px');		
		set_tab()
	})
	$('#imgCont_2').append('<div class="slide_text" id="text_1">flanera</div><div class="slide_text" id="text_2">fuente para el baño María</div>')
	/*----------------------------------------tab_functionality-----------------------------------*/
	
	$('#extra_tab').on('focus', function() {
		$('.tab_index').eq(0).focus();
		//$('#whole_container,#head_ing').attr('role','');
		
	});

	$('#reverse_extra_tab').on('focus', function() {
		$('.tab_index').eq(1).focus();
		//$('#whole_container,#head_ing').attr('role','');
	});
	$('.swiper-pagination-bullet-active').removeClass('tab_index').css('pointer-events','none').removeAttr('tabindex');
	set_tab();
	resizeApp();
	$('#whole_container').attr('aria-label','Figure 5.2 thumbnail slidshow');
	$('#direction_text').attr('aria-label',$('#direction_text').text());
	setTimeout(function(){
		$('.swiper-pagination-bullet').attr('aria-label',thumb_label[0]);
		$('.swiper-button-next').attr('id','next_btn')
		$('.swiper-button-prev').attr('id','prev_btn')
	},100)
	
	
if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
	//$('#direction_text,.text_container').attr('role','text')
	//$('#textcont_4').removeAttr('role');
}
	
})
window.onresize = function() {
	resizeApp(); 
}

//$(window).scroll(function(){
//   // document.webkitExitFullscreen();
//   // document.exitFullscreen();
//});
setTimeout(function(){
		$('#textcont_4').attr('aria-label','(d) El baño María7 consiste en poner el molde con el flan dentro de otro recipiente que contiene agua.')
},100)
function set_tab(){
	$('.text_container').removeClass('fade_in')
	$('#textcont_'+(swiper.activeIndex+1)).addClass('fade_in')
	console.log(swiper.activeIndex+1)
	$('.tab_index,.text_container').removeClass('tab_index').removeAttr('tabindex');
	$('#textcont_'+(swiper.activeIndex+1)).addClass('tab_index');
	$('#direction_text').addClass('tab_index');
	$('#head_ing').addClass('tab_index');
	$('.dummy_div').addClass('tab_index');
	/* $('#whole_container').addClass('tab_index'); */
	$('.swiper-slide-active .text_container').addClass('tab_index');
	if(swiper.activeIndex+1 == 4){
		$('.clickable_1').addClass('tab_index');
		$('#pop_up').addClass('tab_index');
		$('#close_btn').addClass('tab_index').attr('role','button');
	}
	$('.swiper-slide-active img').addClass('tab_index');
	$('.swiper-button-prev,.swiper-button-next,.swiper-pagination-bullet').addClass('tab_index').css('pointer-events','auto');;
	$('.swiper-pagination-bullet-active').removeClass('tab_index').css('pointer-events','none');
	$('#extra_tab,#reverse_extra_tab').addClass('tab_index');
	//setTimeout(function(){
		$('.tab_index').each(function( index ) {
			$('.tab_index').attr('tabindex',0);
		});
	//},10)
	
	
	
	
}