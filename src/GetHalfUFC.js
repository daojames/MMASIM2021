export function getHalfUFC(x) {
    if (parseInt(x) > 7) {
        return x;
    }
    if (sessionStorage.getItem('ufcStandingsPage') === '1') {
        switch (x) {
            case 0:
                x = 'C';
            break;
            case 1:
                x = '1';
            break;
            case 2:
                x = '2';
            break;
            case 3:
                x = '3';
            break;
            case 4:
                x = '4';
            break;
            case 5:
                x = '5';
            break;
            case 6:
                x = '6';
            break;
            case 7:
                x = '7';
            break;
        }
    }
    else {
        switch (x) {
            case 0:
                x = '8';
            break;
            case 1:
                x = '9';
            break;
            case 2:
                x = '10';
            break;
            case 3:
                x = '11';
            break;
            case 4:
                x = '12';
            break;
            case 5:
                x = '13';
            break;
            case 6:
                x = '14';
            break;
            case 7:
                x = '15';
            break;
        }
    }

    return x;
}

export default getHalfUFC;