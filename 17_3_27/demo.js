/**
 * Created by ibm on 2017/3/27.
 */
window.onload = function () {

    var lis_1 = document.getElementById("nav_1").getElementsByTagName("li");
    var pg = document.getElementById("secondPage").getElementsByTagName("article");
    console.log(lis_1.length);
    var lis_2 = document.getElementById("nav_2").getElementsByTagName("li");
    var cnt = 0;

    for(var i = 0; i < lis_1.length; i++){
        if( i == 0){
            lis_1[i].onclick = function () {
                showHomePage();
            }
        } else {
            lis_1[i].id = i;
            lis_2[i + 3].id = i ;
            lis_1[i].onclick = function () {
                cnt = this.id - 1;
                showSecondPage( cnt, lis_2 );
            }
            lis_2[i + 3].onclick = function () {
                cnt = this.id -1 ;
                showSecondPage( cnt, lis_2 );
            }
        }
    }
}

function showHomePage() {
    document.getElementById("homepage").style.display = "block";
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("main").style.height = 464 + "px";
}

function showSecondPage( cnt, lis_2 ) {
    var pg = document.getElementById("secondPage").getElementsByTagName("article");
    document.getElementById("homepage").style.display = "none";
    document.getElementById("secondPage").style.display = "block";
    document.getElementById("main").style.height = 543 + "px";
    for(var i = 0; i < pg.length; i++){
       pg[i].style.display = "";
       lis_2[i].style.backgroundImage = "url(image/sec_menu_bg_b.jpg";
       lis_2[i+4].style.color = "black";
    }
    pg[cnt].style.display = "block";
    lis_2[cnt].style.backgroundImage = "url(image/sec_menu_bg_a.jpg";
    lis_2[cnt+4].style.color = "white";

}