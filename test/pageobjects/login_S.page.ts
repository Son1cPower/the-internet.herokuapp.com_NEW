import Page from './page'

import logger from '../../helpers/logger'

logger.level = "debug";
logger.debug("START - login_S.page.ts");


class LoginPage_S extends Page {
    /**
     * define elements
     */
    get username () { 
        const username = '#username'
        logger.debug(`Get element username with selector ${username}`)

        return $(username) }
    get password () { 
        const password = '#password'
        logger.debug(`Get element password with selector ${password}`)
        
        return $(password) }
    get submitButton () { 
        const submitButton = '#login button[type=submit]'
        logger.debug(`Get element submitButton with selector ${submitButton}`)
        
        return $(submitButton) }
    get flash () { 
        const flash = '#flash'
        logger.debug(`Get element flash with selector ${flash}`)
        
        return $(flash) }

    /**
     * define or overwrite page methods
     */
    open () {
        return super.open('login')
    }

    async submit () {
        const submitButton = '#login button[type=submit]'
        logger.debug(`click element submitButton with selector ${submitButton}`)
        await this.submitButton.click()
    }

//////////////////////////////////////////////////////////////////////////////////////////



get h2LoginPage() { 
    const h2LoginPage = 'h2'
    logger.debug(`Get element h2LoginPage with selector ${h2LoginPage}`)
    
    return $(h2LoginPage) }
get h4LoginPage() { 
    const h4LoginPage = 'h4'
    logger.debug(`Get element h4LoginPage with selector ${h4LoginPage}`)
    
    return $(h4LoginPage) }
get usernameLabelLoginPage() { 
    const usernameLabelLoginPage = 'label[for="username"]'
    logger.debug(`Get element usernameLabelLoginPage with selector ${usernameLabelLoginPage}`)
    
    return $(usernameLabelLoginPage) }
get passwordLabelLoginPage() { 
    const passwordLabelLoginPage = 'label[for="password"]'
    logger.debug(`Get element passwordLabelLoginPage with selector ${passwordLabelLoginPage}`)
    
    return $(passwordLabelLoginPage) }
}

export default new LoginPage_S()