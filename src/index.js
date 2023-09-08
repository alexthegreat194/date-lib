const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']
const shortDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

class D {
	constructor(...args) {
		this._date = new Date(...args)
	}


    // year, month, date, hour, mins, secs.
    get year() {
        return this._date.getFullYear()
    }

    get yr() {
        return parseInt(this._date.getFullYear().toString().slice(-2))
    }

    get month() {
        return fullMonths[this._date.getMonth()]
    }

    get mon() {
        return shortMonths[this._date.getMonth()]
    }

    get day() {
        return fullDays[this._date.getDay()]
    }

    get dy() {
        return shortDays[this._date.getDay()]
    }

    get date() {
        return this._date.getDate()
    }

    get hours() {
        return this._date.getHours()
    }

    get mins() {
        return this._date.getMinutes()
    }

    get secs() {
        return this._date.getSeconds()
    }

    /**
     * You need a format method that takes a "mask" string. The mask will contain formatting characters which displays various date elements, other characters are displayed unchanged.

        The built in Date object has some limited formatting options. You're library will offer a more flexible solution.

        List of formatting characters:

        'Y' -> 2019 (Year full)
        'y' -> 19 (Year short)
        'M' -> July (Month full)
        'm' -> Jul (Month short)
        'D' -> 01 (date padded)
        'd' -> 1 (date)
        '#' -> 1st (date with ordinal suffix: st, nd, rd or th)
        'H' -> 05 (Hours padded)
        'h' -> 5 (Hours)
        'I' -> 08 (Minutes padded)
        'i' -> 8 (Minutes)
        'S' -> 04 (Seconds padded)
        's' -> 4 (Seconds)
        The format() method should provide an acceptable default formatted date with no parameters.
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