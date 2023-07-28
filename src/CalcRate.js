export function CalcRate() {
    let playerNR = sessionStorage.getItem('playerNR');
    let playerNRF = sessionStorage.getItem('playerNRF');

    for (let i = 1; i < 25; ++i) {
        let data = null;
        let j = null;

        if (parseInt(playerNR) == i) {
            j = 'nr0';
        }
        else {
            j = 'nr' + i;
        }

        data = JSON.parse(sessionStorage.getItem(j));

        if (parseInt(data.strk) > 0) {
            if ((data.meth).substring(3) === 'KO' || (data.meth).substring(3) === 'TKO') {
                data.ko = parseInt(data.ko) + 1;
                if (parseInt(playerNR) == i) {
                    sessionStorage.setItem('playerKo', parseInt(sessionStorage.getItem('playerKo')) + 1);
                }
            }
            else if ((data.meth).substring(3) === 'SUB') {
                data.sub = parseInt(data.sub) + 1;
                if (parseInt(playerNR) == i) {
                    sessionStorage.setItem('playerSub', parseInt(sessionStorage.getItem('playerSub')) + 1);
                }
            }

            data.rate = Math.floor(((parseInt(data.ko) + parseInt(data.sub)) / parseInt(data.swin)) * 100);
            sessionStorage.setItem(j, JSON.stringify(data));
            if (parseInt(playerNR) == i) {
                sessionStorage.setItem('playerRate', data.rate);
            }
        }
    }

    for (let i = 1; i < 13; ++i) {
        let data = null;
        let j = null;

        if (parseInt(playerNRF) == i) {
            j = 'nrf0';
        }
        else {
            j = 'nrf' + i;
        }

        data = JSON.parse(sessionStorage.getItem(j));

        if (parseInt(data.strk) > 0) {
            if ((data.meth).substring(3) === 'KO' || (data.meth).substring(3) === 'TKO') {
                data.ko = parseInt(data.ko) + 1;
                if (parseInt(playerNRF) == i) {
                    sessionStorage.setItem('playerKo', parseInt(sessionStorage.getItem('playerKo')) + 1);
                }
            }
            else if ((data.meth).substring(3) === 'SUB') {
                data.sub = parseInt(data.sub) + 1;
                if (parseInt(playerNRF) == i) {
                    sessionStorage.setItem('playerSub', parseInt(sessionStorage.getItem('playerSub')) + 1);
                }
            }

            data.rate = Math.floor(((parseInt(data.ko) + parseInt(data.sub)) / parseInt(data.swin)) * 100);
            sessionStorage.setItem(j, JSON.stringify(data));
            if (parseInt(playerNRF) == i) {
                sessionStorage.setItem('playerRate', data.rate);
            }
        }
    }
}

export default CalcRate;