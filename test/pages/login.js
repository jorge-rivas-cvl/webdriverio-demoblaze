class Login{
    open(){
        return browser.url('/');
}
get logInButton(){
    return $('#login2');
}
get userName(){
    return $('#loginusername');
}
get userPassword(){
    return $('#loginpassword');
}
get logInBtnModal(){
    return $('button.btn.btn-primary[onclick="logIn()"]');
}
get logOutBtn(){
    return $('#logout2');
}

}

export default new Login();