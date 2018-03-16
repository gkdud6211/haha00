function menuSlideOn() {
    $('body').prepend('<a id="mask" class="mask" href="javascript:;" onclick="menuSlideOff()"></a>')
    document.getElementById('layout').style.position = 'fixed';
    $('#btnLnb').addClass('on')
    $('.lnb').show()
    $('#lnbArea').css('transform', 'matrix(1,0,0,1,220,0)')
}

function menuSlideOff() {
    $('#lnbArea').css('transform', 'matrix(1,0,0,1,540,0)')
    $('.lnb').animate({
        opacity: 1
    }, 200, function() {
        $(this).hide()
        $('#btnLnb').removeClass('on')
        document.getElementById('layout').style.position = 'relative';
        $('#mask').remove();
    })
}

/* ********************************************************************************************** */
function menuSlideOffHref(thisHref, thisIndex) {
    $('#lnbArea').css('transform', 'matrix(1,0,0,1,540,0)')
    $('.lnb').animate({
        opacity: 1
    }, 200, function(){
        $(this).hide()
        $('#btnLnb').removeClass('on')
        document.getElementById('layout').style.position = 'relative';    
        $('#mask').remove();
        
        
        var _offset = $(thisHref).offset().top,
            _duration = 300 + (300 *thisIndex);
             // console.log(_duration);  // 숫자 확인용
        $('html, body').stop().delay(300).animate({scrollTop : _offset}, _duration);
    });
}
/* ********************************************************************************************** */

$(function() {
    $('#btnLnb').on('click', function() {
        // 햄버거 버튼 ON/OFF
        $(this).attr('class').indexOf('on') == -1 ? menuSlideOn() : menuSlideOff()
    });

    /* ********************************************************************************************** */    
    $('.lnb_sub').on('click', '> li a', function(e) {
        // e.preventDefault();
            var _href = $(this).attr('href').split('html')[1];
            var _index = $(_href).index();


        // 햄버거 버튼 ON/OFF
        if($('#btnLnb').hasClass("on")){
            menuSlideOffHref(_href, _index);
        }
    });
    /* ********************************************************************************************** */

        // 푸터 family site on/off
    $('.fm_site').on('click', function () {
        $(this).attr('class').indexOf('on') == -1 ? $(this).addClass('on') : $(this).removeClass('on');
        $(this).siblings().slideToggle(300);
    });
})
//메인 video-popup
function call_layer() {
    $(function() {
        $('#layer_popup').bPopup({
            content: 'iframe',
            contentContainer: '.content',
            follow: [false, false],
            position: [82.5, 1040],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        });
    });
}
function close_layer() {
    $(function() {
        $('#layer_popup').bPopup().close();
    });
}

//contact-popup
function layer_pop_cont() {
    $(function() {
        $('.popPolicy').bPopup({
            content: 'image',
            contentContainer: '.Privacy_policy',
            follow: [false, false],
            position: [20, 310],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        });
    });
}

//content-popup
$(function(){
    $('.btn_content').on('click',function(e){
        var offset_Y = $(this).parent().offset().top;
        // var content=$('.Playing_content1');
        var content=$(this).children('div');
        $(this).next().bPopup({
         // $('.popContent_1').bPopup({
            content: 'iframe',
            contentContainer:content,
            follow: [false, false],
            position: [20, offset_Y],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        })
    })
})

// content-popup_tab
$(function(){
        $('.btn_still').on('click',function(){
        $('.tab_1').fadeOut();
        $('.tab_2').fadeIn();
        $(this).addClass('on');
        $('.btn_pre').removeClass('on')
    });
    $('.btn_pre').on('click',function(){
        $('.tab_2').fadeOut();
        $('.tab_1').fadeIn();
        $(this).addClass('on');
        $('.btn_still').removeClass('on')
    })
})

//portfolio-popup
$(function(){
    $('.btn_portfolio').on('click',function(e){
		
        var content = "popPortfolio_" + ($(this).index()+1);
			
		$("." + content).bPopup({
            content: 'iframe',
            contentContainer:content,
            follow: [false, false],
            position: [20, 1520],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        });
    });
});



//portfolio-popup
/*
$(function(){
    $('.btn_portfolio').on('click',function(e){
        // var offset_Y = $(this).parent().offset().top;
        var content=$(this).children('div');
        $(this).children().bPopup({
         // $('.popPortfolio_1').bPopup({
            content: 'iframe',
            contentContainer:content,
            follow: [false, false],
            position: [20, 1520],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        })
    })
})
*/


// location-popup1
function layer_pop_location1() {
    $(function() {
        $('.popLocation_1').bPopup({
            content: 'iframe',
            contentContainer: '.Location_1',
            follow: [false, false],
            position: [20, 1850],
            opacity: 0.6,
            speed: 450,
            transition: 'fadeIn',
            transitionClose: 'fadeOut',
        });
    });
}

//popup-close
$(function(){
    $('.layer_cont_close').on('click',function(e){
        $(this).parent().bPopup().close();
    })
})

// content img slide
$(function(){
   var cnt=0,
       n=5;

   function make(){
    cnt++;
    if(cnt>n-1){cnt=0};
    imgurl='images/content/st_cnt'+cnt+'.png';
    $('.Playing_content1 .tab_2 img').attr('src',imgurl).css('opacity','0').animate({opacity:1},400);
   }

   $('.silde_btn .st_pre').on('click',function(e){
    cnt--;
    if(cnt<0){cnt=4};
    imgurl='images/content/st_cnt'+cnt+'.png';
    $('.Playing_content1 .tab_2 img').attr('src',imgurl)
   })
   $('.silde_btn .st_next').on('click',function(e){
    make();
   })
})

