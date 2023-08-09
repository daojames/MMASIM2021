export function getPageUFC() {
    let page = 'fly';
    switch(parseInt(sessionStorage.getItem('ufcPage'))) {
        case 1:
            page = 'fly';
        break;
        case 2:
            page = 'ban';
        break;
        case 3:
            page = 'fea';
        break;
        case 4:
            page = 'lig';
        break;
        case 5:
            page = 'wel';
        break;
        case 6:
            page = 'mid';
        break;
        case 7:
            page = 'lhe';
        break;
        case 8:
            page = 'hea';
        break;
        case 9:
            page = 'wst';
        break;
        case 10:
            page = 'wfl';
        break;
        case 11:
            page = 'wba';
        break;
    }

    return page;
}

export default getPageUFC;