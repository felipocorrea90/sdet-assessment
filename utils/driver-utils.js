class Utils {

    /**
     * open the given URL
     * @param {String} url - URL of the site to navigate to
     * @returns {string}
     */
    openSite(url) {
        return browser.navigateTo(url)
    }

    pauseDriver(milliseconds) {
        return browser.pause(milliseconds)
    }
}

export default new Utils()
