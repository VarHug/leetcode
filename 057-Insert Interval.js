// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Example 1:
// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].

// Example 2:
// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].

// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].


/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
function insert(intervals, newInterval) {
    let head = newInterval.start,
        tail = newInterval.end,
        start = 0,
        deleteCount = 0,
        item = new Interval();
    if (intervals.length === 0) {
        item = newInterval;
    } else {
        for (let i = 0; i < intervals.length; i++) {
            if (head >= intervals[i].start) {
                if (head > intervals[i].end) {
                    start++;
                    continue;
                }
                if (tail >= intervals[i].end) {
                    if (item.start === undefined) {
                        item.start = intervals[i].start;
                        start = i; 
                    }
                    deleteCount++;
                } else {
                    return intervals;
                }
            } else {
                if (tail >= intervals[i].start) {
                    deleteCount++;
                    if (tail >= intervals[i].end) {
                        if (item.start === undefined) {
                            item.start = newInterval.start;
                        }
                        continue;
                    } else {
                        item.end = intervals[i].end;
                        break;
                    }
                } else {
                    if (item.start === undefined) {
                        item.start = head;
                    }
                    item.end = tail;
                    break;
                }
            }
        }
        if (item.start === undefined) {
            item.start = newInterval.start;
        }
        if (item.end === undefined) {
            item.end = newInterval.end;
        }
    }
    
    intervals.splice(start, deleteCount, item);
    return intervals;
}

function Interval(start, end) {
    this.start = start;
    this.end = end;
}
var i1 = new Interval(1, 3);
var i2 = new Interval(6, 9);
var intervals1 = [i1, i2];
var newInterval1 = new Interval(2, 5);

var i3 = new Interval(0, 5);
var i4 = new Interval(9, 12);
var intervals2 = [i3, i4];
var newInterval2 = new Interval(7, 16);