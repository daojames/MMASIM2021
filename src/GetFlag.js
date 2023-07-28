import returnFighterM from './ReturnFighterM';
import returnFighterF from './ReturnFighterF';

export function getFlag(x) {
    let nation = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    switch(x) {
        case 0:
            nation = data.nation;
        break;
        case 1:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w1f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w1f1m2')))).nation;
            }
        break;
        case 2:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w2f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w2f1m2')))).nation;
            }
        break;
        case 3:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w3f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w3f1m2')))).nation;
            }
        break;
        case 4:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w4f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w4f1m2')))).nation;
            }
        break;
        case 5:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w5f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w5f1m2')))).nation;
            }
        break;
        case 6:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w6f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w6f1m2')))).nation;
            }
        break;
        case 7:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w7f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w7f1m2')))).nation;
            }
        break;
        case 8:
            if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w8f1p2')))).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w8f1m2')))).nation;
            }
        break;
        case 9:
            data = getOppObj();
            nation = data.nation;
        break;
        case 10:
            if (parseInt(sessionStorage.getItem('sfighter')) == 0) {
                nation = JSON.parse(sessionStorage.getItem('nr0')).nation;
            }
            else {
                nation = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('sfighter')))).nation;
            }
        break;
        case 11:
            if (parseInt(sessionStorage.getItem('sfighter')) == 0) {
                nation = JSON.parse(sessionStorage.getItem('nrf0')).nation;
            }
            else {
                nation = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('sfighter')))).nation;
            }
        break;
    }

    switch(nation) {
        case 'USA':
            return 'https://flagpedia.net/data/flags/w160/us.webp';
        break;
        case 'MEXICO':
            return 'https://flagpedia.net/data/flags/w160/mx.webp';
        break;
        case 'INDIA':
            return 'https://flagpedia.net/data/flags/w160/in.webp';
        break;
        case 'VIETNAM':
            return 'https://flagpedia.net/data/flags/w160/vn.webp';
        break;
        case 'PALESTINE':
            return 'https://flagpedia.net/data/flags/w160/ps.webp';
        break;
        case 'CANADA':
            return 'https://flagpedia.net/data/flags/w160/ca.webp';
        break;
        case 'OMAN':
            return 'https://flagpedia.net/data/flags/w160/om.webp';
        break;
        case 'PAKISTAN':
            return 'https://flagpedia.net/data/flags/w160/pk.webp';
        break;
        case 'PUERTO RICO':
            return 'https://flagpedia.net/data/flags/w160/pr.webp';
        break;
        case 'SWEDEN':
            return 'https://flagpedia.net/data/flags/w160/se.webp';
        break;
        case 'CHINA':
            return 'https://flagpedia.net/data/flags/w160/cn.webp';
        break;
        case 'KOREA':
            return 'https://flagpedia.net/data/flags/w160/kr.webp';
        break;
        case 'THAILAND':
            return 'https://flagpedia.net/data/flags/w160/th.webp';
        break;
        case 'RHODESIA':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Rhodesia_%281968%E2%80%931979%29.svg/1200px-Flag_of_Rhodesia_%281968%E2%80%931979%29.svg.png';
        break;
        case 'BRAZIL':
            return 'https://flagpedia.net/data/flags/w160/br.webp';
        break;
        default:
            return 'https://flagpedia.net/data/flags/w160/us.webp';
        break;
    }
}

function getOppObj() {
    let data = sessionStorage.getItem('player');
    data = JSON.parse(data);

    if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') {
        switch (parseInt(sessionStorage.getItem('month'))) {
            case 1:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w1f1p2'))));
            break;
            case 2:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w2f1p2'))));
            break;
            case 3:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w3f1p2'))));
            break;
            case 4:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w4f1p2'))));
            break;
            case 5:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w5f1p2'))));
            break;
            case 6:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w6f1p2'))));
            break;
            case 7:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w7f1p2'))));
            break;
            case 8:
                return JSON.parse(returnFighterM(parseInt(sessionStorage.getItem('w8f1p2'))));
            break;
            default:
                return JSON.parse(sessionStorage.getItem('nr' + sessionStorage.getItem('oppNum')));
            break;
        }
    }
    else {
        switch (parseInt(sessionStorage.getItem('month'))) {
            case 1:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w1f1m2'))));
            break;
            case 2:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w2f1m2'))));
            break;
            case 3:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w3f1m2'))));
            break;
            case 4:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w4f1m2'))));
            break;
            case 5:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w5f1m2'))));
            break;
            case 6:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w6f1m2'))));
            break;
            case 7:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w7f1m2'))));
            break;
            case 8:
                return JSON.parse(returnFighterF(parseInt(sessionStorage.getItem('w8f1m2'))));
            break;
            default:
                return JSON.parse(sessionStorage.getItem('nrf' + (parseInt(sessionStorage.getItem('oppNum')) - 100)));
            break;
        }
    }
}

export default getFlag;