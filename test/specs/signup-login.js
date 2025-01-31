import signUp from '../pages/sign-up';
import logIn from '../pages/login';
import { $, expect, browser } from "@wdio/globals";
import { log } from "console";

describe('Automate sign-up', () => {
    it('Sign up process', async ()=> {
        //Navigate to the Demoblaze homepage.
        await signUp.open();

        //Click the "Sign up" button.
        let signUpModal = signUp.showsModal.isDisplayed()
        console.log('MENSAJE CAPTURADO ANTES' + signUpModal);
        await signUp.signUpButton.click();
        //Fill in a username and password.
        await signUp.signUpUserName.setValue('solotest2200993329001')
        await signUp.signUpPassword.setValue('contraTest');
        //Click the "Sign up" button to register.
        await signUp.signUpBtnModal.click();
        await browser.pause(3000);
        //Verify that the registration was successful.
        signUpModal = await $$('div.modal-dialog[role="document"]')[1].isDisplayed()
        console.log('MENSAJE CAPTURADO ANTES' + signUpModal)
        expect(signUpModal).toBeFalsy();
        
     });
    
    it('Login test', async ()=> {
        //Navigate to the Demoblaze homepage.
        await logIn.open();
        //Click the "Log in" button.
        await logIn.logInButton.click();
        //Enter a username and password.
        await logIn.userName.setValue('solotest');
        await logIn.userPassword.setValue('ContraTest');
        //Click the "Log in" button to authenticate.
        await logIn.logInBtnModal.click();
        await browser.pause(3000);
        //Verify successful login by checking for the presence of a logout button.
        const logOut = logIn.logOutBtn
        await expect(logOut).toBeExisting()

    });
});