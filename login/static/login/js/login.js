function clear(){
    console.log('clear');
    this.value="";
};
$(document).ready(function(){
    document.getElementById("login_name").onfocus=clear;
    //$("#login_name").onfocus(function(event){console.log('clear');this.value="";});
    document.getElementById("login_password").onfocus=clear;
    //$("#login_password").onfocus(function(event){console.log('clear');this.value="";});
    $("#login_button").click(function(event){
        event.preventDefault();
        console.log("submit");
        data={};
        data['username'] = document.getElementById("login_name").value;
        data['password'] = document.getElementById("login_password").value;
        $.post("/login/",data,function(res){
            console.log(res);
            if(res == -1){
                console.log("user not exsits.")
                window.location.href = '/login/signup/';
            }else if(res == 0){
                console.log("password wrong.")
                window.location.href = '/login/';
            }else{
                console.log("login success.")
                window.location.href = '/users/';
            }
        });
    });

    //get the csrftoken in the cookie and set it in each http request header
    $.ajaxSetup({
         beforeSend: function(xhr, settings) {
             function getCookie(name) {
                 var cookieValue = null;
                 if (document.cookie && document.cookie != '') {
                     var cookies = document.cookie.split(';');
                     for (var i = 0; i < cookies.length; i++) {
                         var cookie = jQuery.trim(cookies[i]);
                         // Does this cookie string begin with the name we want?
                         if (cookie.substring(0, name.length + 1) == (name + '=')) {
                             cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                             break;
                         }
                     }
                 }
                 return cookieValue;
             }
             if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                 // Only send the token to relative URLs i.e. locally.
                 xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
             }
         }
    });

});