const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

   

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
});
