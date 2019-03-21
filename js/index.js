$(document).ready(function () {
    var win = (parseInt($(".couten").css("width"))) - 60;
    $(".mo").css("height", $(document).height());
    $(".couten").css("height", $(document).height());
    $(".backward").css("height", $(document).height());
    $("li").css({});
    // 点击确认的时候关闭模态层
    $(".sen a").click(function () {
        $(".mo").css("display", "none")
    });
    // 存钱的数组
    var moneyArr = [];
    var addmoneyNum;
    var del = function () {
        nums++;
        $(".li" + nums).remove();
        setTimeout(del, 200)
    }
    var add = function () {
        var hb = parseInt(Math.random() * (3 - 1) + 1);
        var Wh = parseInt(Math.random() * (70 - 30) + 20);
        var Left = parseInt(Math.random() * (win - 0) + 0);
        var rot = (parseInt(Math.random() * (45 - (-45)) - 45)) + "deg";

        // 随机钱数
        var money = (parseInt(Math.random() * (100 - 1) + 1) / 100).toFixed(2);
        num++;
        $(".couten").append("<li class='li" + num + "' data-money='" + money +
            "'><a href='javascript:;'><img src='images/hb_" + hb + ".png'></a></li>");
        $(".li" + num).css({
            "left": Left,
        });
        $(".li" + num + " a img").css({
            "width": Wh,
            "transform": "rotate(" + rot + ")",
            "-webkit-transform": "rotate(" + rot + ")",
            "-ms-transform": "rotate(" + rot + ")",
            /* Internet Explorer */
            "-moz-transform": "rotate(" + rot + ")",
            /* Firefox */
            "-webkit-transform": "rotate(" + rot + ")",
            /* Safari 和 Chrome */
            "-o-transform": "rotate(" + rot + ")" /* Opera */
        });
        $(".li" + num).animate({
            'top': $(window).height() + 20
        }, 5000, function () {
            //删掉已经显示的红包
            this.remove()
        });
        //点击红包的时候弹出模态层
        $(".li" + num).click(function () {
            // $(".mo").css("display", "block")
            var money = $(this).data("money");
            $('.isShow').html("+" + money)
            $('.isShow').css({
                "top": "-32%"
            })
            moneyArr.push(money);
        });
        $('.isShow').css({
            "top": "30%"
        })
        addmoneyNum = setTimeout(add, 200)
    }

    //增加红包
    var num = 0;
    var addmoney = setTimeout(add, 3000);

    //倒数计时
    var backward = function () {
        numz--;
        if (numz > 0) {
            $(".backward span").html(numz);
        } else {
            $(".backward").remove();
            //清空倒计时3秒
            clearTimeout(countDown)
        }
        // 倒计时
        var countDown = setTimeout(backward, 1000)
    }
    // 20秒后清空红包增加的数量,模态框显示
    var twentyTime = setTimeout(() => {
        clearTimeout(addmoney);
        clearTimeout(addmoneyNum);
        var totalMoney = eval(moneyArr.join('+')).toFixed(2)
        // $('.isShow').html("")
        // $('.isShow').css({
        //     "display": "none"
        // })
        $(".mo").css("display", "block");
        $(".totalMoney").html(`获得元${totalMoney}红包`)
        clearTimeout(twentyTime)
    }, 20000)
    var numz = 4;
    backward();
})