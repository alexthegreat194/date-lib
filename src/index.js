const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

    /**
     * Year
     * @returns {number} Full year
     * @example 2021
     */
    get year() {
        return this._date.getFullYear()
    }

    /**
     * Year
     * @returns {number} Short year
     * @example 21
     */
    get yr() {
        return parseInt(this._date.getFullYear().toString().slice(-2))
    }

    /**
     * Month
     * @returns {string} Full month
     * @example January
     */
    get month() {
        return fullMonths[this._date.getMonth()]
    }

    /**
     * Month
     * @returns {string} Short month
     * @example Jan
     */
    get mon() {
        return shortMonths[this._date.getMonth()]
    }

    /**
     * Day
     * @returns {string} Full day
     * @example Tuesday
     */
    get day() {
        return fullDays[this._date.getDay()]
    }

    /**
     * Day
     * @returns {string} Short day
     * @example Tue
     */
    get dy() {
        return shortDays[this._date.getDay()]
    }

    /**
     * Date
     * @returns {number} Date
     * @example 27
     */
    get date() {
        return this._date.getDate()
    }

    /**
     * Hours
     * @returns {number} Hours
     * @example 18
     */
    get hours() {
        return this._date.getHours()
    }

    /**
     * Minutes
     * @returns {number} Minutes
     * @example 6
     */
    get mins() {
        return this._date.getMinutes()
    }

    /**
     * Seconds
     * @returns {number} Seconds
     * @example 5
     */
    get secs() {
        return this._date.getSeconds()
    }

    /**
     * Format
     * @param {string} mask - Format mask
     * @example Y M D
     * @returns {string} Formatted date
     * @example 2017 January 02
     */
    format(mask = 'Y M D') {
        const date = this._date
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        
        const nthNumber = (number) => {
            if (number > 3 && number < 21) return "th";
            switch (number % 10) {
              case 1:
                return "st";
              case 2:
                return "nd";
              case 3:
                return "rd";
              default:
                return "th";
            }
        };

        const formatted = mask
            .replace('Y', year)
            .replace('y', year.toString().slice(-2))
            .replace('M', fullMonths[month])
            .replace('m', shortMonths[month])
            .replace('D', day.toString().padStart(2, '0'))
            .replace('d', day)
            .replace('#', day + nthNumber(day))
            .replace('H', hours.toString().padStart(2, '0'))
            .replace('h', hours)
            .replace('I', minutes.toString().padStart(2, '0'))
            .replace('i', minutes)
            .replace('S', seconds.toString().padStart(2, '0'))
            .replace('s', seconds)

        return formatted
    }
}

const d = new D(2017, 0, 2, 3, 4, 5)
console.log( d.year )  // 2021 - Full year
console.log( d.yr )    // 21   - Short year
console.log( d.month ) // July - Full month
console.log( d.mon )   // Jul  - Short month
console.log( d.day )   // Tuesday - Full day
console.log( d.dy )    // Tue  - Short day
console.log( d.date )  // 27   - Date
console.log( d.hours ) // 18   - Hour
console.log( d.mins )  // 6    - Minutes
console.log( d.secs )  // 5    - Seconds

// Make a date with values for Y, M, D etc.
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 

module.exports = D