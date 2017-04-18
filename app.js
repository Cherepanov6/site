$(document).ready(function(){
            setTimeout(function(){
                $('.backlogo>img').css('opacity', 1)
                setTimeout(function(){
                    $('.backlogo>img').css('filter', 'blur(5px)')
                }, 2000)
                $('.f-p-logo>img').css('opacity', 1)
            }, 100)
})