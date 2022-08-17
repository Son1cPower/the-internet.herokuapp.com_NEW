import Page from './page'


class Secure_S extends Page {
    /**
     * define elements
     */
    get h2Secure() { return $('h2') }
    get h4Secure() { return $('h4') }
    get logoutButton() { return $('.button.secondary.radius, a[href="/logout"]') }
    get textAndLindSecure() { return $('.large-4.large-centered.columns') }
    get url() { return document.URL }

    async logout() {
        await this.logoutButton.click()
    }
}

export default new Secure_S()