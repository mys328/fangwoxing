/**
 * Created by Administrator on 2016/12/12.
 */
$(function () {
    $('.prev').on('tap',function () {
        window.history.go(-1);
    });
    $('.quit').on('tap',function () {
        location.href = './me.html';
    });
    var flag = true;;
    $('.button_flag').on('tap',function () {
        if(flag){
            $(this).animate({
                left:22
            },100,function () {
                flag = false;
            })
        }else{
            $(this).animate({
                left:0
            },100,function () {
                flag = true;
            })
        }
    });
    $('#about').on('tap',function () {
        location.href = './about.html';
    });
    $('.click').on('tap',function () {
        if($('.items .cookie').text()=='0M'){
            alert('您已清除缓存');
        }else{
            $('.mark').css('background','rgba(0,0,0,0.2)').css('display','block');
            $('.confirm').fadeIn(100);
        }
    });
    $('.confirm .bottom .left').on('tap',function () {
        $('.mark').css('display','none');
        $('.confirm').fadeOut(100);
    });
    $('.confirm .bottom .right').on('tap',function () {
        $('.mark').css('display','none');
        $('.confirm').fadeOut(100);
        $('.items .cookie').text('0M');
    });
});