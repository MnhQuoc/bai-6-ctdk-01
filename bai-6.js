function hoahong() {
    let doanhso = +document.getElementById("doanhso").value
    var hoahong
    if (doanhso >= 500) {
        hoahong = doanhso*5/100
        document.getElementById("result").innerHTML =  "Hoa hồng nhận được là: " + hoahong;
    }
    else if(tb>=300){
        hoahong = doanhso*4/100
        document.getElementById("result").innerHTML =  "Hoa hồng nhận được là: " + hoahong;
    }
    else if(tb>=100){
        hoahong = doanhso*3/100
        document.getElementById("result").innerHTML =  "Hoa hồng nhận được là: " + hoahong;
    }
    else {
        hoahong = doanhso*1/100
        document.getElementById("result").innerHTML =  "Hoa hồng nhận được là: " + hoahong;
    }
}
