/**
 * Created by 波仔~ on 2017/11/22.
 */
//================ nav begin ============================
//左侧导航栏hover事件
$(function(){
    $('.other-li > a > img').mouseenter(function(){
        var index = $(this).parents('li').index();
        //$(this)[0].src = 'img/nav_btn'+ (index - 2) +'.png';
        $(this)[0].src = 'img/nav_btn'+ (index - 2) +'_hover.png';
    })
    $('.other-li > a > img').mouseout(function(){
        var index = $(this).parents('li').index();
        $(this)[0].src = 'img/nav_btn'+ (index - 2) +'.png';
    })


//============== nav end =============================
//============== section5 begin =====================
    var arr = ["opacity: 0; transition-delay: 400ms; transform: translateY(-50px)",
        "opacity: 0;transition-delay: 500ms; transform: translateY(-80px)",
        "opacity: 0;transition-delay: 900ms; transform: translateY(-500px)",
        "opacity: 0;transition-delay: 800ms; transform: translateY(-200px)",
        "opacity: 0;transition-delay: 700ms; transform: translateX(248px)",
        "opacity: 0;transition-delay: 400ms; transform: translateX(-408px)",
        "opacity: 0;transition-delay: 700ms; transform: translateX(540px)",
        "opacity: 0;transition-delay: 900ms; transform: translateX(-215px)",
        "opacity: 0;transition-delay: 900ms; transform: translateY(-250px)",
        "opacity: 0;transition-delay: 900ms; transform: translateY(-100px)",
        "opacity: 0;transition-delay: 900ms; transform: translateY(-700px)",
        "opacity: 0;transition-delay: 900ms; transform: translateY(-340px)"];

    showUp6();

//左侧导航栏点击事件
    $('.nav .section-btn').click(function(){
        var index = $(this).parent().index() -2;

            for (var i = 0; i < $(this).parents('.father').children('div').length; i++){
                hidedown.call($(this).parents('.father').children('div')[i]);
            }

        if(index == 8){

            $('.section8 .book-box').css({'opacity': 0,
                'transition-delay': '0',
                'transform': 'translateY(500px)'});

        }


        setTimeout(function(){
            for (var i = 0; i < $(this).parents('.father').children('div').length; i++){
                $(this).parents('.father').children('div')[i].style.display = 'none';
            }
            $('.father').children('div')[index].style.display = 'block';
            setTimeout(function(){
                if(index == 0){
                    section0();
                    return;
                }
                if(index == 8){
                    section8();
                  $('footer').css('display','block')
                    return;
                }else {
                  $('footer').css('display','none')
                }
                showUp.call($(this).parents('.father').children('div')[index]);
            }.bind(this),10)
        }.bind(this),1500)
    })

//section0 点击事件
    $('.btn-nav').click(function() {
        var index = $(this).index() + 1;
        for(var i = 0; i < $('.section0').children('div').length; i++){
            $('.section0').children('div')[i].style = '';
        }

        setTimeout(function(){
           $('.section0')[0].style.display = 'none';
           $('.father').children('div')[index].style.display = 'block';
            setTimeout(function () {
                for(var i = 0; i < $($('.father').children('div')[index]).find('.change').length; i++){

                    $($('.father').children('div')[index]).find('.change')[i].style = '';
                }
            }.bind(this), 1000)
       },1000)

    })


    //$('.section-btn6').click(function(){
    //    hidedown6();
    //    setTimeout(function(){
    //        $('.section6')[0].style.display = 'none';
    //        $('.section5')[0].style.display = 'block';
    //    },1000)
    //    setTimeout(function(){
    //        showUp5();
    //    },2000)
    //
    //})

//section显示事件
function showUp(){
        for (var i = 0 ; i <$(this).children('.change').length; i++){
            $(this).children('.change')[i].style = '';
        }
}
    //section隐藏事件
function hidedown(){
    for (var i = 0 ; i < $(this).children('.change').length; i++){
        $(this).children('.change')[i].style = arr[i];
    }

}
//页面默认打开显示section6
    function showUp6(){
        for (var i = 0 ; i < $('.section6 > .change').length; i++){
            $('.section6 > .change')[i].style = '';
        }
    }
    function hidedown6(){
        for (var i = 0 ; i < $('.section6 > .change').length; i++){
            $('.section6 > .change')[i].style = arr[i];
        }

    }


//============== section5 end =====================
//

//================section8 begin ===================


    //section0 跳转事件
function section0() {

    $('.section0 >.game').css({
        'opacity': 1,
        'transition-delay': '0',
        'transform': 'translateY(0px)'
    })
    $('.section0 >.jia').css({
        'opacity': 1,
        'transition-delay': '300ms',

        'transform': 'translateY(0px)'
    })
    $('.section0 >.yuan').css({
        'opacity': '1',
        'transition-delay': '500ms',

        'transform': 'translateX(0px)'
    })
    $('.section0> .flower1').css({
        'opacity': 1,
        'transition-delay': '700ms',
        'transform': 'translateY(0px)'
    })
    $('.section0 >.flower2').css({
        'opacity': 1,
        'transition-delay': '900ms',

        'transform': 'translateY(0px)'
    })
    $('.section0 >.house').css({
        'opacity': 1,
        'transition-delay': '1100ms',

        'transform': 'translateY(0px)'
    })
    $('.section0 >.slogan').css({
        'opacity': 1,
        'transition-delay': '1300ms',

        'transform': 'translateY(0px)'
    })
    $('.section0>.nav-sub').css({
        'opacity': 1,
        'transition-delay': '1300ms',

        'transform': 'translateY(0px)'
    })

}


    //section8 跳转事件
    function section8() {

        $('.section8 >.nav').css({
            'opacity': 1,
            'transition-delay': '400ms',
            'transform': 'translateX(0px)'
        })
        $('.section8 >.book-box').css({
            'opacity': 1,
            'transform': 'translateY(0px)'
        })

    }
    //section8 右侧按钮点击事件
    $('.book-right > a').click(function(){
        var index = $(this).index() + 1;
        for(var i = 0; i < $('.book-box > .book-left').length; i++){
            $($('.book-box > .book-left')[i]).css({'opacity' : 0,'transform' : 'rotate(-60deg)','z-index' : 1});
        }
        //$($('.book-box > .book-left')[index]).css({'display' : 'block'});

        $($('.book-box > .book-left')[index]).css({'opacity' : 1,'transform' : 'rotate(-0deg)','index' : 0,'display' : 'block'});

        setTimeout(function(){

            for(var i = 0; i < $('.book-box > .book-left').length; i++){
                if(i === 0){
                    $('.book-box > .book-left')[0].style.display = 'none';
                    continue;
                }
                $('.book-box > .book-left')[i].style = '';
            }

            for(var i = 0; i < $('.book-box > .book-left').length; i++){
                $('.book-box > .book-left').eq(i).children('.page1').css({display : 'none'});
            }

            $($('.book-box > .book-left')[index]).css({'opacity' : 1,'transform' : 'rotate(-0deg)','z-index' : 0,'display' : 'block'});

            $($('.book-box > .book-left')[index]).children('.page1').fadeIn();
        },1000);

    })




    //section8 里面的 第二页按钮
    $('.jiayuan-nav-li > a').mouseenter(function(){
        $(this).next().css('display','block').parent().siblings().children('div').css('display','none');
    })

    //底部鼠标点击事件
    $('.btn-mouse').click(function(){
        var index = $(this).parent().parent().index() - 1;
        if(index === 0){
            $('.section0 > .nav-sub > .btn-nav1').trigger('click');
        }
        $(this).parent().parent().children('.nav').children('ul').children('.other-li').eq(index + 1).children('.section-btn').trigger('click');
    })


    //var i = 0;
    //window.onmousewheel = function(e){
    //    var t = document.documentElement.scrollTop;
    //    console.log(t);
    //    console.log(document.body.clientHeight);
    //    console.log(document.documentElement.clientHeight);
    //    if(document.documentElement.clientHeight + t >= document.body.clientHeight){
    //            if(i == 0){
    //                if (e.wheelDelta < 0) { //当滑轮向下滚动时
    //                    console.log(11);
    //                    $('.btn-mouse').trigger('click');
    //                }
    //                i++
    //            }
    //        }
    //    i++
    //}

})
//================section8 end ===================
