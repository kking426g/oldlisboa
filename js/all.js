$(function(){
    //右下 slider
    $("#slideBoxe .bd .gb").click(function(){ $("#slideBoxe").hide()})
    $('.license').hover(function(){
        $(this).children('.licenseimg').stop(true,true).slideToggle(600);
    });

    //左下 slider
    $("#slideBoxe1 .bd .gb").click(function(){ $("#slideBoxe1").hide()})
    $('.license').hover(function(){
        $(this).children('.licenseimg').stop(true,true).slideToggle(600);
    });

    var ary = location.href.split("&");
    jQuery(".slideBoxe").slide( { mainCell:".bd ul", effect:"leftLoop",autoPlay:true,trigger:"mouseover",easing:"swing",delayTime:800,mouseOverStop:true,pnLoop:true});


    //客服電梯
    var floatR_box = document.getElementById('floatService2'),
    floatR_box_list = $('#floatService2 .floatbox'),
    fr_in, fr_out, fr_status = 'close';

    var flaotR_box_in = function () {
        fr_status = 'open';
        $(floatR_box).stop().animate({width:196},300);
    }
    var flaotR_box_out = function () {
        fr_status = 'close';
        $(floatR_box).stop().animate({width:46},300);
    }

    $(floatR_box).Float({topSide:150,floatRight:1,side:0});
    $(floatR_box).show();
    floatR_box_list.hover(function () {
        flaotR_box_in();
    }, function () {
        flaotR_box_out();
    });

    floatR_box_list.click(function () {
        if (fr_status == 'close') {
            flaotR_box_in();
        } else {
            flaotR_box_out();
        }
    });




    //date time
	Date.prototype.strftime = function(format){
		var o = {
			"M+" :  this.getMonth()+1,  //month
			"d+" :  this.getDate(),     //day
			"h+" :  this.getHours(),    //hour
			"m+" :  this.getMinutes(),  //minute
			"s+" :  this.getSeconds(), //second
			"q+" :  Math.floor((this.getMonth()+3)/3),  //quarter
			"S"  :  this.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
		}
		for(var k in o) {
			if(new RegExp("("+ k +")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
			}
		}
		return format;
    }
    
	function UTCToLocalTimeString(d, format) {    
		var timeOffsetInHours = (new Date().getTimezoneOffset()/60)  + 8;    
		d.setHours(d.getHours() + timeOffsetInHours);
		return d.strftime(format);
    }

    setInterval(function(){
        var time = UTCToLocalTimeString(new Date(),'yyyy/MM/dd hh:mm:ss');
        document.getElementById("top_time").innerHTML = time;
    },1000);

    setInterval(function () { jkcalc(); }, 600);
        var jkcalc = function () {
        var jkt = new Date().getTime() + "";
        var jka = parseInt(jkt.substr(jkt.length - 10, 10) * 10.21) / 10;
        $("#i1").html(parseFloat(jka).toLocaleString());
        }
        jkcalc();
        $(function(){
        jQuery(".newsInfo").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:4,interTime:50,trigger:"click"});
    })
})