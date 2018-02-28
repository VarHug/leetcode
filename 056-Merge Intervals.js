// Given a collection of intervals, merge all overlapping intervals.

// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function merge(intervals) {
    if (intervals.length < 2) {
        return intervals;
    }
    intervals.sort( (a, b) => { 
        return a.start - b.start 
    });

    let res = [],
        head = intervals[0].start,
        tail = intervals[0].end;
    for (let i = 1, len = intervals.length; i < len; i++) {
        if (intervals[i].start <= tail) {
            tail = Math.max(tail, intervals[i].end);
        } else {
            res.push(new Interval(head, tail));
            head = intervals[i].start;
            tail = intervals[i].end;
        }
    }
    res.push(new Interval(head, tail));
    return res;
}

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

var i1 = new Interval(1, 3);
var i2 = new Interval(2, 6);
var i3 = new Interval(8, 10);
var i4 = new Interval(15, 18);

var test  = [i1, i2, i3, i4];

var i5 = new Interval(4, 5);
var i6 = new Interval(1, 4);
var i7 = new Interval(0, 1);

var test2 = [i5, i6, i7];