export function updateRecNR() {
    let num = parseInt(sessionStorage.getItem('oppNum'));
    let no = null;

    switch(num) {
        case 1:
            no = 'nr1';
        break;
        case 2:
            no = 'nr2';
        break;
        case 3:
            no = 'nr3';
        break;
        case 4:
            no = 'nr4';
        break;
        case 5:
            no = 'nr5';
        break;
        case 6:
            no = 'nr6';
        break;
        case 7:
            no = 'nr7';
        break;
        case 8:
            no = 'nr8';
        break;
        case 9:
            no = 'nr9';
        break;
        case 10:
            no = 'nr10';
        break;
        case 11:
            no = 'nr11';
        break;
        case 12:
            no = 'nr12';
        break;
        case 13:
            no = 'nr13';
        break;
        case 14:
            no = 'nr14';
        break;
        case 15:
            no = 'nr15';
        break;
        case 16:
            no = 'nr16';
        break;
        case 17:
            no = 'nr17';
        break;
        case 18:
            no = 'nr18';
        break;
        case 19:
            no = 'nr19';
        break;
        case 20:
            no = 'nr20';
        break;
        case 21:
            no = 'nr21';
        break;
        case 101:
            no = 'nrf1';
        break;
        case 102:
            no = 'nrf2';
        break;
        case 103:
            no = 'nrf3';
        break;
        case 104:
            no = 'nrf4';
        break;
        case 105:
            no = 'nrf5';
        break;
        case 106:
            no = 'nrf6';
        break;
        case 107:
            no = 'nrf7';
        break;
        case 108:
            no = 'nrf8';
        break;
        case 109:
            no = 'nrf9';
        break;
    }

    let data = sessionStorage.getItem(no);
    data = JSON.parse(data);
    
    if (sessionStorage.getItem('win') == 1) {
        data.loss = parseInt(data.loss) + 1;
    }
    else {
        data.win = parseInt(data.win) + 1;
    }

    sessionStorage.setItem(no, JSON.stringify(data));
}

export default updateRecNR;