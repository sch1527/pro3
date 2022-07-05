$(function () {
    $('.ham').click(function () {
        $('nav').toggleClass('on')
    })
    $('.ham_close').click(function () {
        $('nav').toggleClass('on')
    })
    $('.book1').click(function(){
        $('.sub').eq(0).toggleClass('on')
        $('.sub').eq(0).css({zIndex:100})
    })
    $('.book2').click(function(){
        $('.sub').eq(1).toggleClass('on')
        $('.sub').eq(1).css({zIndex:100})
    })
    $('.book3').click(function(){
        $('.sub').eq(2).toggleClass('on')
        $('.sub').eq(2).css({zIndex:100})
    })
    $('.book4').click(function(){
        $('.sub').eq(3).toggleClass('on')
        $('.sub').eq(3).css({zIndex:100})
    })
    $('.book5').click(function(){
        $('.sub').eq(4).toggleClass('on')
        $('.sub').eq(4).css({zIndex:100})
    })
    $('.book6').click(function(){
        $('.sub').eq(5).toggleClass('on')
        $('.sub').eq(5).css({zIndex:100})
    })
    $('.book7').click(function(){
        $('.sub').eq(6).toggleClass('on')
        $('.sub').eq(6).css({zIndex:100})
    })
    $('.book8').click(function(){
        $('.sub').eq(7).toggleClass('on')
        $('.sub').eq(7).css({zIndex:100})
    })
    setInterval(function () {
        $('.main').animate({
            marginLeft: -100 + '%'
        }, 700, function () {
            $('.main>li').eq(0).appendTo($('.main'))
            $('.main').css({
                marginLeft: 0
            })
            $('.dot_con span').eq(-1).prependTo('.dot_con')
        })
    }, 15000)
    var swiper = new Swiper(".mySwiper", {
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false
        }
      });
})