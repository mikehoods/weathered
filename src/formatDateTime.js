export const currentHour = (date) => {
    date = new Date(date);
    let currentHour = date.getHours();
    return currentHour
}
export const formatDay = (date) => {
    date = new Date(date);
    const day = date.getDay();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekday[day === 6 ? 0 : day + 1]
}
export const formatHourly = (date) => {
    date = new Date(date);
    let hour = date.getHours();
    const ampm = hour >=12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour} ${ampm}`
}
export const formatTime = (date) => {
    date = new Date(date);
    let hours = date.getHours();
    const ampm = hours >=12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`
}
export const formatTimeString = (time) => {
    const newTime = time[0] === '0' ? time.slice(1) : time
    return newTime
}