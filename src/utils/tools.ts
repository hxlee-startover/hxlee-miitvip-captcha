class MiTools {
    /**
     * Whether it is a mobile phone.
     * @returns {boolean}
     */
    isMobile(): boolean {
        const agent = navigator.userAgent,
            agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let mobile = false
        for (let i = 0, len = agents.length; i < len; i++) {
            if (agent.indexOf(agents[i]) > 0) {
                mobile = true
                break
            }
        }
        return mobile
    }
    
    /**
     * Whether it is a number.
     * @param number
     */
    isNumber(number: any): boolean {
        return typeof number === 'number' && isFinite(number)
    }

    /**
     * Unit conversion.
     * @param value 
     */
    pxToRem(value: number) {
        return Math.round(value / 16 * 100) / 100
    }
}

export default new MiTools()