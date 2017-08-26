function clear(){
    console.log('clear');
    this.value="";
};
$(document).ready(function(){
    document.getElementById("signup_name").onfocus=clear;
    document.getElementById("signup_password").onfocus=clear;
});