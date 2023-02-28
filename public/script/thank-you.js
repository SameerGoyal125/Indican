var countdown=10;
var interval=setInterval(function(){
    countdown--;
    if(countdown<=0){
        var red=document.getElementsByClassName("red")[0];
        red.style.display="block";
        clearInterval(interval);
        window.location.href = "/";

    }
    document.getElementById("countdown").innerHTML=countdown;
}
,1000);
