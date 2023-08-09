import getPageUFC from './GetPageUFC';
import getByRankUFC from './GetByRankUFC';
import getXUFC from './GetXUFC';

export function getFlagUFC(x) {
    let nation = null;
    let data = JSON.parse(sessionStorage.getItem('player'));

    let page = getPageUFC();

    switch(getXUFC(page, x)) {
        case 'x':
            nation = data.nation;
        break;
        default:
            nation = JSON.parse(sessionStorage.getItem(page + getByRankUFC(page, x))).nation;
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
        case 'SOUTH KOREA':
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
        case 'IRAQ':
            return 'https://flagpedia.net/data/flags/w160/iq.webp';
        break;
        case 'NEW ZEALAND':
            return 'https://flagpedia.net/data/flags/w160/nz.webp';
        break;
        case 'ANGOLA':
            return 'https://flagpedia.net/data/flags/w160/ao.webp';
        break;
        case 'ENGLAND':
            return 'https://flagpedia.net/data/flags/w160/gb-eng.webp';
        break;
        case 'RUSSIA':
            return 'https://flagpedia.net/data/flags/w160/ru.webp';
        break;
        case 'AUSTRALIA':
            return 'https://flagpedia.net/data/flags/w160/au.webp';
        break;
        case 'CZECH REPUBLIC':
            return 'https://flagpedia.net/data/flags/w160/cz.webp';
        break;
        case 'KAZAKHSTAN':
            return 'https://flagpedia.net/data/flags/w160/kz.webp';
        break;
        case 'MYANMAR':
            return 'https://flagpedia.net/data/flags/w160/mm.webp';
        break;
        case 'JAMAICA':
            return 'https://flagpedia.net/data/flags/w160/jm.webp';
        break;
        case 'GEORGIA':
            return 'https://flagpedia.net/data/flags/w160/ge.webp';
        break;
        case 'ECUADOR':
            return 'https://flagpedia.net/data/flags/w160/ec.webp';
        break;
        case 'CUBA':
            return 'https://flagpedia.net/data/flags/w160/cu.webp';
        break;
        case 'AFGANISTAN':
            return 'https://flagpedia.net/data/flags/w160/af.webp';
        break;
        case 'PERU':
            return 'https://flagpedia.net/data/flags/w160/pe.webp';
        break;
        case 'SOUTH AFRICA':
            return 'https://flagpedia.net/data/flags/w160/za.webp';
        break;
        case 'NIGERIA':
            return 'https://flagpedia.net/data/flags/w160/ng.webp';
        break;
        case 'AZERBAIJAN':
            return 'https://flagpedia.net/data/flags/w160/az.webp';
        break;
        case 'POLAND':
            return 'https://flagpedia.net/data/flags/w160/pl.webp';
        break;
        case 'ARMENIA':
            return 'https://flagpedia.net/data/flags/w160/am.webp';
        break;
        case 'SPAIN':
            return 'https://flagpedia.net/data/flags/w160/es.webp';
        break;
        case 'FRANCE':
            return 'https://flagpedia.net/data/flags/w160/fr.webp';
        break;
        case 'IRELAND':
            return 'https://flagpedia.net/data/flags/w160/ie.webp';
        break;
        case 'ICELAND':
            return 'https://flagpedia.net/data/flags/w160/is.webp';
        break;
        case 'DENMARK':
            return 'https://flagpedia.net/data/flags/w160/dk.webp';
        break;
        case 'ARGENTINA':
            return 'https://flagpedia.net/data/flags/w160/ar.webp';
        break;
        case 'ITALY':
            return 'https://flagpedia.net/data/flags/w160/it.webp';
        break;
        case 'NORWAY':
            return 'https://flagpedia.net/data/flags/w160/no.webp';
        break;
        case 'SCOTLAND':
            return 'https://flagpedia.net/data/flags/w160/gb-sct.webp';
        break;
        case 'AUSTRIA':
            return 'https://flagpedia.net/data/flags/w160/at.webp';
        break;
        case 'UKRAINE':
            return 'https://flagpedia.net/data/flags/w160/ua.webp';
        break;
        case 'SWITZERLAND':
            return 'https://flagpedia.net/data/flags/w160/ch.webp';
        break;
        case 'MOLDOVA':
            return 'https://flagpedia.net/data/flags/w160/md.webp';
        break;
        case 'ROMANIA':
            return 'https://flagpedia.net/data/flags/w160/ro.webp';
        break;
        case 'LITHUANIA':
            return 'https://flagpedia.net/data/flags/w160/lt.webp';
        break;
        case 'SURINAME':
            return 'https://flagpedia.net/data/flags/w160/sr.webp';
        break;
        case 'BULGARIA':
            return 'https://flagpedia.net/data/flags/w160/bg.webp';
        break;
        case 'BELARUS':
            return 'https://flagpedia.net/data/flags/w160/by.webp';
        break;
        case 'SLOVAK REPUBLIC':
            return 'https://flagpedia.net/data/flags/w160/sk.webp';
        break;
        case 'GREECE':
            return 'https://flagpedia.net/data/flags/w160/gr.webp';
        break;
        case 'KYRGYZSTAN':
            return 'https://flagpedia.net/data/flags/w160/kg.webp';
        break;
        case 'PANAMA':
            return 'https://flagpedia.net/data/flags/w160/pa.webp';
        break;
        default:
            return 'https://flagpedia.net/data/flags/w160/us.webp';
        break;
    }
}

export default getFlagUFC;