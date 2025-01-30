import { $, expect, browser } from "@wdio/globals";


//https://www.demoblaze.com/
/*Exercise 1: Sign Up Test
Goal: Automate the sign-up process.

Steps:

Navigate to the Demoblaze homepage. - done

Click the "Sign up" button. - done

Fill in a username and password. - done

Click the "Sign up" button to register. - done

Verify that the registration was successful.*/  

describe('Automate sign-up', () => {
    it.only('Sign up process', async ()=> {
       await browser.url('https://www.demoblaze.com/');

    await $('#signin2').click();
    await $('#sign-username').setValue('solotest');
    await $('#sign-password').setValue('ContraTest');
    await $('button[onclick="register()"]').click()
    const signUpModal = await $('#signInModalLabel').isDisplayed()
    console.log('MENSAJE CAPTURADO' + signUpModal)
    //expect(signUpModal).not.toBeDisplayed();

    });

    it('Login test', async ()=> {
        //Navigate to the Demoblaze homepage.
        await browser.url('https://www.demoblaze.com/')
        //Click the "Log in" button.
        await $('#login2').click();
        //Enter a username and password.
        await $('#loginusername').setValue('solotest');
        await $('#loginpassword').setValue('ContraTest');
        //Click the "Log in" button to authenticate.
        await $('button.btn.btn-primary[onclick="logIn()"]').click();
        await browser.pause(3000);
        //Verify successful login by checking for the presence of a logout button.
        const logOut = await $('#logout2')
        await logOut.waitForDisplayed({timeout: 3000})
    })
    
});