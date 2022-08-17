export default class Page {
    open (path: string) {
        return browser.url(path)
    }

   checkUrl(url: string){
    return expect(browser).toHaveUrlContaining(`${url}`)
   } 
}
