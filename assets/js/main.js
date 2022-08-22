console.log('CodeFlow Übung lev1_4: Tage In Monat')


function tageImMonat(monat, jahr){
    return new Date(jahr, monat, 0).getDate()
}

console.log(tageImMonat(1, 2016))
console.log(tageImMonat(2, 2016))
console.log(tageImMonat(2, 2017))
console.log(tageImMonat(12, 2017))

console.log('==========================')


console.log('CodeFlow Übung lev1_7: Weekend')

function istWeekend (month, date, year) {
    const d = new Date(year, month -1, date)
    if (d.getDay() === 0 || d.getDay() === 6) {
        return  'Weekend'
    }else {
        return 'Arbeitstag'
    }
}

console.log(istWeekend("12", "15", "2019"))
console.log(istWeekend("2", "16", "2001"))
console.log(istWeekend("2", "1", "2020"))
console.log(istWeekend("2", "29", "2020"))
console.log(istWeekend("6", "19", "2022"))

