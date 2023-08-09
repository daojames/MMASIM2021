import getPageUFC from './GetPageUFC';
import getByRankUFC from './GetByRankUFC';
import getXUFC from './GetXUFC';

export function getNameUFC(x) {
    let name = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    let page = getPageUFC();

    switch(getXUFC(page, x)) {
        case 'x':
            name = data.first + ' ' + data.last;
        break;
        default:
            name = JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).first + ' ' + JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).last;
        break;
    }

    return name;
}

export default getNameUFC;