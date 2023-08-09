export function RecordSeasonPFL() {
    let month = parseInt(sessionStorage.getItem('month'));
    let year = sessionStorage.getItem('year');

    if (month < 12) {
        return;
    }
    
    for (let i = 9; i > 1; --i) {
        sessionStorage.setItem('legacyOrg' + i, sessionStorage.getItem('legacyOrg' + (i - 1)));
        sessionStorage.setItem('legacyYear' + i, sessionStorage.getItem('legacyYear' + (i - 1)));
        sessionStorage.setItem('legacyRank' + i, sessionStorage.getItem('legacyRank' + (i - 1)));
        sessionStorage.setItem('legacyRec' + i, sessionStorage.getItem('legacyRec' + (i - 1)));
        sessionStorage.setItem('legacyRes' + i, sessionStorage.getItem('legacyRes' + (i - 1)));
        sessionStorage.setItem('legacyPay' + i, sessionStorage.getItem('legacyPay' + (i - 1)));
    }

    if (sessionStorage.getItem('org') === '0') {

        sessionStorage.setItem('pflSeasons', parseInt(sessionStorage.getItem('pflSeasons')) + 1);
        sessionStorage.setItem('legacyOrg1', 'PFL');

        if (sessionStorage.getItem('nrf0') === 'null') {
            let nr0 = JSON.parse(sessionStorage.getItem('nr0'));
            let rank = JSON.parse(nr0.rank);

            let rec = sessionStorage.getItem('playerSwin') + ' - ' + sessionStorage.getItem('playerSloss');

            if (rank < 9) {
                
                sessionStorage.setItem('pflPlayoffBerths', parseInt(sessionStorage.getItem('pflPlayoffBerths')) + 1);

                if (JSON.parse(nr0.strk) > 0) {
                    sessionStorage.setItem('pflTitles', parseInt(sessionStorage.getItem('pflTitles')) + 1);

                    sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                    sessionStorage.setItem('legacyRank1', rank);
                    sessionStorage.setItem('legacyRec1', rec);
                    sessionStorage.setItem('legacyRes1', 'CHAMPION');
                    sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))) + 50000);
                }
                else {
                    sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                    sessionStorage.setItem('legacyRank1', rank);
                    sessionStorage.setItem('legacyRec1', rec);
                    sessionStorage.setItem('legacyRes1', 'TOP 8');
                    sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))));
                }
            }
            else {
                sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                sessionStorage.setItem('legacyRank1', rank);
                sessionStorage.setItem('legacyRec1', rec);
                sessionStorage.setItem('legacyRes1', 'ELIMINATED');
                sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))));
            }
        }
        else {
            let nrf0 = JSON.parse(sessionStorage.getItem('nrf0'));
            let rank = JSON.parse(nrf0.rank);

            let standingsF = JSON.parse(sessionStorage.getItem('standingsF'));
            let rec = standingsF[rank - 1].swin + ' - ' + standingsF[rank - 1].sloss;

            if (rank < 9) {

                sessionStorage.setItem('pflPlayoffBerths', parseInt(sessionStorage.getItem('pflPlayoffBerths')) + 1);
                
                if (JSON.parse(nrf0.strk) > 0) {
                    sessionStorage.setItem('pflTitles', parseInt(sessionStorage.getItem('pflTitles')) + 1);

                    sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                    sessionStorage.setItem('legacyRank1', rank);
                    sessionStorage.setItem('legacyRec1', rec);
                    sessionStorage.setItem('legacyRes1', 'CHAMPION');
                    sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))) + 50000);
                }
                else {
                    sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                    sessionStorage.setItem('legacyRank1', rank);
                    sessionStorage.setItem('legacyRec1', rec);
                    sessionStorage.setItem('legacyRes1', 'TOP 8');
                    sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))));
                }
            }
            else {
                sessionStorage.setItem('legacyYear1', 'JAN ' + year);
                sessionStorage.setItem('legacyRank1', rank);
                sessionStorage.setItem('legacyRec1', rec);
                sessionStorage.setItem('legacyRes1', 'ELIMINATED');
                sessionStorage.setItem('legacyPay1', ((parseInt(sessionStorage.getItem('playerSwin')) + parseInt(sessionStorage.getItem('playerSloss'))) * parseInt(sessionStorage.getItem('pay'))));
            }
        }
    }
}

export default RecordSeasonPFL;