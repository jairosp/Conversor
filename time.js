const years_universe = 13800000000;
const fromMaToYears = (n) => ((years_universe - n)/years_universe)*365;

const fromDaysToHour = (n) => n*24;
const fromHoursToMinutes = (n) => n*60;
const fromMinutesToSeconds = (n) => n*60;
const obtenerDecimal = (n) => n - Math.floor(n);

const fullSet = (millonesDeAnios) => {
    const days = fromMaToYears(millonesDeAnios);
    const hours = fromDaysToHour(obtenerDecimal(days));
    const minutes = fromHoursToMinutes(obtenerDecimal(hours));
    const seconds = fromMinutesToSeconds(obtenerDecimal(minutes));

    // const str = `
    //             Días: ${Math.floor(days)},
    //             Horas: ${Math.floor(hours)},
    //             Minutos: ${Math.floor(minutes)},
    //             Segundos: ${Math.floor(seconds)}`;
    // console.log(str);
    const results = {
        Dias: Math.floor(days),
        Horas: Math.floor(hours),
        Minutos: Math.floor(minutes),
        Segundos: Math.floor(seconds)
    }
    return results
};

fullSet(2000000000);

export default fullSet;