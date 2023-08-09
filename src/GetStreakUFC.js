import getPageUFC from './GetPageUFC';
import getByRankUFC from './GetByRankUFC';
import getXUFC from './GetXUFC';

export function getStreakUFC(x) {
    let strk = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    let page = getPageUFC();

    switch(getXUFC(page, x)) {
        case 'x':
            strk = data.strk;
        break;
        default:
            strk = JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).strk;
        break;
    }

    return strk;
}

export default getStreakUFC;