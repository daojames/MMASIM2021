import getHalfUFC from './GetHalfUFC';

export function getXUFC(page, x) {
    let i = 1;

    x = getHalfUFC(x);

    while (i < 25) {
        if (x == JSON.parse(sessionStorage.getItem(page + i)).rank) return i;
        ++i;
    }

    return 'x';
}

export default getXUFC;