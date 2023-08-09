import getPageUFC from './GetPageUFC';
import getByRankUFC from './GetByRankUFC';
import getXUFC from './GetXUFC';

export function getRecordUFC(x) {
    let rec = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    let page = getPageUFC();

    switch(getXUFC(page, x)) {
        case 'x':
            rec = data.win + ' - ' + data.loss;
        break;
        default:
            rec = JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).win + ' - ' + JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).loss;
        break;
    }

    return rec;
}

export default getRecordUFC;