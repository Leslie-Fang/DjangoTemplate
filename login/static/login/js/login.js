function clear(){
    console.log('clear');
    this.value="";
};
$(document).ready(function(){
    document.getElementById("login_name").onfocus=clear;
    //$("#login_name").onfocus(function(event){console.log('clear');this.value="";});
    document.getElementById("login_password").onfocus=clear;
    //$("#login_password").onfocus(function(event){console.log('clear');this.value="";});
});