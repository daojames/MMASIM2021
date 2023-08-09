import getPageUFC from './GetPageUFC';
import getByRankUFC from './GetByRankUFC';
import getXUFC from './GetXUFC';

export function getPrevUFC(x) {
    let prev = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    let page = getPageUFC();

    switch(getXUFC(page, x)) {
        case 'x':
            prev = data.prev;
        break;
        default:
            prev = JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).prev;
        break;
    }

    return prev;
}

export default getPrevUFC;