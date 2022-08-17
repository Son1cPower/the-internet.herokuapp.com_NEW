import Page from './page'


class LoginPage_S extends Page {
    /**
     * define elements
     */
    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitButton () { return $('#login button[type=submit]') }
    get flash () { return $('#flash') }

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('login')
    }

    async submit () {
        await this.submitButton.click()
    }

//////////////////////////////////////////////////////////////////////////////////////////



get h2LoginPage() { return $('h2') }
get h4LoginPage() { return $('h4') }
get usernameLabelLoginPage() { return $('label[for="username"]') }
get passwordLabelLoginPage() { return $('label[for="password"]') }
}

export default new LoginPage_S()