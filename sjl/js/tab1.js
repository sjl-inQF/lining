$(function(){
    //热卖区专栏
    $(".hot>ul li").mouseover(function(){
        $(".hot>ul li").css({
           background:"#747474",
        })
        $(this).css({
            background:"red",
        })
          
})

    //黑色导图
    $(".black>ul li").mouseover(function(){
        $(".black>ul li").css({
            background:"#000",
        })
        $(this).css({
            background:"red",
        })
    })

    //跑步专栏
    $(".run>ul li").mouseover(function(){
        $(".run>ul li").css({
           background:"#747474",
        })
        $(this).css({
            background:"red",
        })
        $(".run .run_img").css({
            display:"none",
        })
        $(".run .run_img").eq($(this).index()).css({
            display:"block",
        })
})


    // 韦德专栏
    $(".wei>ul li").mouseover(function(){
        $(".wei>ul li").css({
           background:"#747474",
        })
        $(this).css({
            background:"red",
        })
        $(".wei .wei_img").css({
            display:"none",
        })
        $(".wei .wei_img").eq($(this).index()).css({
            display:"block",
        })
})


    // 时尚准兰
    $(".fas>ul li").mouseover(function(){
        $(".fas>ul li").css({
           background:"#747474",
        })
        $(this).css({
            background:"red",
        })
        $(".fas .fas_img").css({
            display:"none",
        })
        $(".fas .fas_img").eq($(this).index()).css({
            display:"block",
        })
})



// 训练专栏
    $(".tra>ul li").mouseover(function(){
        $(".tra>ul li").css({
        background:"#747474",
        })
        $(this).css({
            background:"red",
        })
        $(".tra .tra_img").css({
            display:"none",
        })
        $(".tra .tra_img").eq($(this).index()).css({
            display:"block",
        })
    })

// 乒乓专栏
$(".pin>ul li").mouseover(function(){
    $(".pin>ul li").css({
       background:"#747474",
    })
    $(this).css({
        background:"red",
    })
    $(".pin .pin_img").css({
        display:"none",
    })
    $(".pin .pin_img").eq($(this).index()).css({
        display:"block",
    })
})














})












