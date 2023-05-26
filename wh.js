function to_time(val) {
    return String(val).padStart(2, "0")
}

function get_next_time_period(reminder, period) {
    return [Math.floor(reminder / period), reminder % period]
}

let seconds = prompt("input seconds");
const min = 60;
const hour = min * 60;
const day = hour * 24;
let [days, reminder_hours] = get_next_time_period(seconds, day);
let [hours, reminder_mins] = get_next_time_period(reminder_hours, hour);
let [mins, reminder_seconds] = get_next_time_period(reminder_mins, min);
console.log([days, hours, mins, reminder_seconds].map((obj) => to_time(obj)).join(":"));