import Page from './page'
import logger from '../../helpers/logger'

logger.level = "debug";
logger.debug("START - Secure_S.page.ts");


class Secure_S extends Page {

  



    /**
     * define elements
     */
    get h2Secure() { 
        const h2Secure = 'h2'
        logger.debug(`Secure_S.page.ts - Get element h2 with selector ${h2Secure}`)
        return $(h2Secure)
    }
    get h4Secure() { 
        const h4Secure = 'h4'
        logger.debug(`Get element h4 with selector ${h4Secure}`)
        return $(h4Secure) 
    }
    get logoutButton() { 
        const logoutButton = '.button.secondary.radius, a[href="/logout"]'
        logger.debug(`Get element logoutButton with selector ${logoutButton}`)
        return $(logoutButton) 
    }

    get textAndLindSecure() {
        const textAndLindSecure = '.large-4.large-centered.columns'
        logger.debug(`Get element textAndLindSecure with selector ${textAndLindSecure}`)
        return $(textAndLindSecure) }
    
        get url() { return document.URL }

    async logout() {
        const logoutButton = '.button.secondary.radius, a[href="/logout"]'
        logger.debug(`Click element logoutButton with selector ${logoutButton}`)
        await this.logoutButton.click()
    }




}




export default new Secure_S()