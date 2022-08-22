import LoginPage_S from '../pageobjects/login_S.page'
import Secure_S from '../pageobjects/secure_S.page'
//import logger from '../../helpers/logger'




describe('auth form Positive Tests', () => {

//logger.level = "debug";
//logger.debug("Some debug messages from STAS");


    it('should allow access with correct creds', async () => {
        await LoginPage_S.open()
        await LoginPage_S.username.setValue('tomsmith')
        await LoginPage_S.password.setValue('SuperSecretPassword!')
        await LoginPage_S.submit()

        await LoginPage_S.flash.waitForDisplayed()
        await expect(LoginPage_S.flash).toHaveTextContaining('You logged into a secure area!')
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


        //assert URL on page
        await LoginPage_S.checkUrl('secure')
    })




    it('should check url, text for h2 and h4 and click logout', async () => {

        //assert URL on page
        await Secure_S.checkUrl('secure')

        await expect(Secure_S.h2Secure).toHaveText('Secure Area')
        await expect(Secure_S.h4Secure).toHaveText('Welcome to the Secure Area. When you are done click logout below.')
        console.log("LOGGGGGGGGGGGG", Secure_S.textAndLindSecure)
        // await expect(Secure_S.textAndLindSecure).toHaveTextContaining('Powered by')
        await Secure_S.logout()
        await Secure_S.checkUrl('login')

    })


})





describe('auth form Negative Tests', () => {


    it('Put incorect passwork-should not allow access, chech report error and check that password and userName fileds are clear', async () => {
        await LoginPage_S.open()
        await LoginPage_S.username.setValue('tomsmith')
        await LoginPage_S.password.setValue('')
        await LoginPage_S.submit()

        await LoginPage_S.flash.waitForDisplayed()


        await expect(LoginPage_S.flash).toHaveTextContaining('Your password is invalid!')

        //assert URL on page
        await LoginPage_S.checkUrl('login')

        await expect(LoginPage_S.username).not.toHaveText
        await expect(LoginPage_S.password).toHaveText('')
    })

    it('Put incorect UserName-should not allow access, chech report error and check that password and userName fileds are clear', async () => {
        await LoginPage_S.open()
        await LoginPage_S.username.setValue('')
        await LoginPage_S.password.setValue('SuperSecretPassword!')
        await LoginPage_S.submit()

        await LoginPage_S.flash.waitForDisplayed()


        await expect(LoginPage_S.flash).toHaveTextContaining('Your username is invalid!')

        //assert URL on page
        await LoginPage_S.checkUrl('login')

        await expect(LoginPage_S.username).not.toHaveText
        await expect(LoginPage_S.password).not.toHaveText
    })


    it('Check text for h2, h4, name for Submit Button and fileds name for password and UserName', async () => {
        await LoginPage_S.open()
        await expect(LoginPage_S.h2LoginPage).toHaveText('Login Page')
        await expect(LoginPage_S.h4LoginPage).toHaveText('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.')
        await expect(LoginPage_S.usernameLabelLoginPage).toHaveText('Username')
        await expect(LoginPage_S.passwordLabelLoginPage).toHaveText('Password')

        await expect(LoginPage_S.submitButton).toHaveTextContaining('Login')






        //assert URL on page
        await LoginPage_S.checkUrl('login')


    })


})