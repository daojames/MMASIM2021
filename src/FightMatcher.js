export function fightMatcher() {
    let num = parseInt(sessionStorage.getItem('oppNum'));
    let ranArr = [num];
    let ranArr1 = [num];


    for (let j = 0; j < 10; ++j) {
        while(true) {
            let match = false;
            let ran = Math.floor(Math.random() * (24 - 1 + 1) + 1);
            for (let i = 0; i < ranArr.length; ++i) {
                if (ran == ranArr[i]) {
                    match = true;
                }
            }
            if (!match) {
                ranArr.push(ran);
                break;
            }
        }
    }
    for (let j = 0; j < 4; ++j) {
        while(true) {
            let match = false;
            let ran = Math.floor(Math.random() * (12) + 101);
            for (let i = 0; i < ranArr1.length; ++i) {
                if (ran == ranArr1[i]) {
                    match = true;
                }
            }
            if (!match) {
                ranArr1.push(ran);
                break;
            }
        }
    }
    
    console.log('ranArr: ' + ranArr)
    console.log('ranArr1: ' + ranArr1)

    let oppName = JSON.parse(getFighter(num));
    let name = oppName.first + ' ' + oppName.last;
    sessionStorage.setItem('oppName', name);

    for (let i = 1; i < 10; ++i) {
        ++i;
        let fighter1 = getFighter(ranArr[i - 1]);
        let fighter2 = getFighter(ranArr[i]);
        let name1 = fighter1.first + ' ' + fighter1.last;
        let name2 = fighter2.first + ' ' + fighter2.last;
        
        let str = null;
        let stg = null;
        switch(i) {
            case 2:
                str = 'card5';
                stg = 'card5a';
            break;
            case 4:
                str = 'card6';
                stg = 'card6a';
            break;
            case 6:
                str = 'card7';
                stg = 'card7a';
            break;
            case 8:
                str = 'card8';
                stg = 'card8a';
            break;
            case 10:
                str = 'card9';
                stg = 'card9a';
            break;
        }
        sessionStorage.setItem(str, fighter1);
        sessionStorage.setItem(stg, fighter2);
    }

    for (let i = 1; i < 4; i + 2) {
        ++i;
        let fighter1 = getFighter(ranArr1[i - 1]);
        let fighter2 = getFighter(ranArr1[i]);
        let name1 = fighter1.first + ' ' + fighter1.last;
        let name2 = fighter2.first + ' ' + fighter2.last;
        
        let str = null;
        let stg = null;
        switch(i) {
            case 2:
                str = 'card10';
                stg = 'card10a';
            break;
            case 4:
                str = 'card11';
                stg = 'card11a';
            break;
        }
        sessionStorage.setItem(str, fighter1);
        sessionStorage.setItem(stg, fighter2);
    }

    for (let i = 1; i < 5; ++i) {
        Math.floor(Math.random() * (11 - 1 + 1) + 1)
    }

    ranWeight();
}

function getFighter(num) {
    let nr1 = sessionStorage.getItem('nr1');
    let nr2 = sessionStorage.getItem('nr2');
    let nr3 = sessionStorage.getItem('nr3');
    let nr4 = sessionStorage.getItem('nr4');
    let nr5 = sessionStorage.getItem('nr5');
    let nr6 = sessionStorage.getItem('nr6');
    let nr7 = sessionStorage.getItem('nr7');
    let nr8 = sessionStorage.getItem('nr8');
    let nr9 = sessionStorage.getItem('nr9');
    let nr10 = sessionStorage.getItem('nr10');
    let nr11 = sessionStorage.getItem('nr11');
    let nr12 = sessionStorage.getItem('nr12');
    let nr13 = sessionStorage.getItem('nr13');
    let nr14 = sessionStorage.getItem('nr14');
    let nr15 = sessionStorage.getItem('nr15');
    let nr16 = sessionStorage.getItem('nr16');
    let nr17 = sessionStorage.getItem('nr17');
    let nr18 = sessionStorage.getItem('nr18');
    let nr19 = sessionStorage.getItem('nr19');
    let nr20 = sessionStorage.getItem('nr20');
    let nr21 = sessionStorage.getItem('nr21');
    let nr22 = sessionStorage.getItem('nr22');
    let nr23 = sessionStorage.getItem('nr23');
    let nr24 = sessionStorage.getItem('nr24');
    let nrf1 = sessionStorage.getItem('nrf1');
    let nrf2 = sessionStorage.getItem('nrf2');
    let nrf3 = sessionStorage.getItem('nrf3');
    let nrf4 = sessionStorage.getItem('nrf4');
    let nrf5 = sessionStorage.getItem('nrf5');
    let nrf6 = sessionStorage.getItem('nrf6');
    let nrf7 = sessionStorage.getItem('nrf7');
    let nrf8 = sessionStorage.getItem('nrf8');
    let nrf9 = sessionStorage.getItem('nrf9');
    let nrf10 = sessionStorage.getItem('nrf10');
    let nrf11 = sessionStorage.getItem('nrf11');
    let nrf12 = sessionStorage.getItem('nrf12');

    switch(num) {
        case 1:
            return nr1;
        break;
        case 2:
            return nr2;
        break;
        case 3:
            return nr3;
        break;
        case 4:
            return nr4;
        break;
        case 5:
            return nr5;
        break;
        case 6:
            return nr6;
        break;
        case 7:
            return nr7;
        break;
        case 8:
            return nr8;
        break;
        case 9:
            return nr9;
        break;
        case 10:
            return nr10;
        break;
        case 11:
            return nr11;
        break;
        case 12:
            return nr12;
        break;
        case 13:
            return nr13;
        break;
        case 14:
            return nr14;
        break;
        case 15:
            return nr15;
        break;
        case 16:
            return nr16;
        break;
        case 17:
            return nr17;
        break;
        case 18:
            return nr18;
        break;
        case 19:
            return nr19;
        break;
        case 20:
            return nr20;
        break;
        case 21:
            return nr21;
        break;
        case 22:
            return nr22;
        break;
        case 23:
            return nr23;
        break;
        case 24:
            return nr24;
        break;
        case 101:
            return nrf1;
        break;
        case 102:
            return nrf2;
        break;
        case 103:
            return nrf3;
        break;
        case 104:
            return nrf4;
        break;
        case 105:
            return nrf5;
        break;
        case 106:
            return nrf6;
        break;
        case 107:
            return nrf7;
        break;
        case 108:
            return nrf8;
        break;
        case 109:
            return nrf9;
        break;
        case 110:
            return nrf10;
        break;
        case 111:
            return nrf11;
        break;
        case 112:
            return nrf12;
        break;
    }
}

function ranWeight() {
    let ran1 = Math.floor(Math.random() * (3) + 1);
    switch(ran1) {
        case 1:
            sessionStorage.setItem('ranWeight1', 'STRAWWEIGHT');
        break;
        case 2:
            sessionStorage.setItem('ranWeight1', 'FLYWEIGHT');
        break;
        case 3:
            sessionStorage.setItem('ranWeight1', 'BANTAMWEIGHT');
        break;
    }

    let ran2 = Math.floor(Math.random() * (3) + 1);
    switch(ran2) {
        case 1:
            sessionStorage.setItem('ranWeight2', 'STRAWWEIGHT');
        break;
        case 2:
            sessionStorage.setItem('ranWeight2', 'FLYWEIGHT');
        break;
        case 3:
            sessionStorage.setItem('ranWeight2', 'BANTAMWEIGHT');
        break;
    }
}

export default fightMatcher;