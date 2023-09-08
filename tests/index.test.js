const D = require('../src/index.js')

const d = new D(2017, 0, 2, 3, 4, 5)

test('year', () => {
    expect(d.year).toBe(2017)
});

test('yr', () => {
    expect(d.yr).toBe(17)
});

test('month', () => {
    expect(d.month).toBe('January')
});

test('mon', () => {
    expect(d.mon).toBe('Jan')
});

test('day', () => {
    expect(d.day).toBe('Monday')
});

test('dy', () => {
    expect(d.dy).toBe('Mon')
});

test('date', () => {
    expect(d.date).toBe(2)
});

test('hours', () => {
    expect(d.hours).toBe(3)
});

test('mins', () => {
    expect(d.mins).toBe(4)
});

test('secs', () => {
    expect(d.secs).toBe(5)
});

test('format blank', () => {
    expect(d.format()).toBe('2017 January 02')
});

test('format slashes', () => {
    expect(d.format('y/m/d')).toBe('17/Jan/2')
});

test('format time', () => {
    expect(d.format('H:I:S')).toBe('03:04:05')
});

test('format lowercase time', () => {
    expect(d.format('h:i:s')).toBe('3:4:5')
});

test('format full', () => {
    expect(d.format('Y-M-D h:I:S')).toBe('2017-January-02 3:04:05')
});