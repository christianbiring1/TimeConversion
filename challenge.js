function timeConversion(s) {
    // Write your code here
    let out = ''
    const military = s.substr(8, 10);
    const hour = s.substr(0, 2);
    if(military === 'AM') {
        if(hour === '12') {
            out = '00'
        } else {
            out = hour;
        }
    }
    else if(military === 'PM') {
        if(hour === '12') {
            out = hour;
        } else {
            out = (Number(hour) + 12).toString()
        }
    }
    return out + s.substr(2, 6);
}
