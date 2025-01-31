class Signup{
    open(){
        return browser.url('/');
    }

    get showsModal() {
        return $$('div.modal-dialog[role="document"]')[1];
    }

    get signUpButton(){
        return $('#signin2');
    }

    get signUpUserName(){
        return $('#sign-username');
    }

    get signUpPassword(){
        return $('#sign-password');
    }

    get signUpBtnModal() {
        return $('button[onclick="register()"');
    }
}

export default new Signup();