# EasyDateJS

## Description
EasyDateJS is a lightweight JavaScript date utility library that simplifies working with date objects and formatting them effortlessly. With a wide range of properties like year, month, day, and methods such as format, you can easily retrieve and customize date information. Whether you need the full month name or a short day abbreviation, EasyDateJS makes handling dates in your JavaScript projects a breeze.

### Properties:

- `year` and `yr`: Get the full year and short year (last two digits).
- `month` and `mon`: Get the full month name and short month name.
- `day` and `dy`: Get the full day name and short day name.
- `date`: Get the day of the month (date).
- `hours`: Get the hours component of the date.
- `mins`: Get the minutes component of the date.
- `secs`: Get the seconds component of the date.

### Methods:

- `format(mask)`: Format the date according to the provided mask. The mask can include placeholders for year (Y or y), month (M or m), day (D or d), hours (H or h), minutes (I or i), and seconds (S or s). It also supports adding 'th', 'st', 'nd', or 'rd' to the day component based on the day number.

### Example Usage:

```javascript
const d = new D(2017, 0, 2, 3, 4, 5);

console.log(d.year); // 2021 - Full year
console.log(d.yr); // 21 - Short year
console.log(d.month); // January - Full month
console.log(d.mon); // Jan - Short month
console.log(d.day); // Tuesday - Full day
console.log(d.dy); // Tue - Short day
console.log(d.date); // 2 - Date
console.log(d.hours); // 3 - Hours
console.log(d.mins); // 4 - Minutes
console.log(d.secs); // 5 - Seconds

console.log(d.format()); // 2017 January 02
console.log(d.format('y/m/d')); // 17/Jan/2
console.log(d.format('H:I:S')); // 03:04:05
console.log(d.format('h:i:s')); // 3:4:5
console.log(d.format('Y-M-D h:I:S')); // 2017-January-02 3:04:05
```