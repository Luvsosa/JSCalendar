const isWeekend = day => {
    // console.log(day % 7);

    // 6 for saturday, 7 for sunday
    return  day % 7 === 6 || day % 7 === 0;
}

const getDayName = day => {
    const date = new Date(Date.UTC(2018, 0, day));
    return new Intl.DateTimeFormat("en-US", { weekday: "short" })
    .format(date); 
}

export {isWeekend, getDayName};