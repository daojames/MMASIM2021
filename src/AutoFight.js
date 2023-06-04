import returnFighterM from './ReturnFighterM.js';
import returnFighterF from './ReturnFighterF.js';
import Random from './Random.js';

export function AutoFight() {
    let data = sessionStorage.getItem('player');
    data = JSON.parse(data);
    let weight = data.weight;
    let month = parseInt(sessionStorage.getItem('month')) - 1;
    let week = 'w' + month;
    if (data.weight != "WSTRAWWEIGHT" && data.weight != "WFLYWEIGHT" && data.weight != "WBANTAMWEIGHT") {
        for (let i = 2; i < 13; ++i) {
            let a = week + 'f' + i + 'p1';
            let b = week + 'f' + i + 'p2';
            moveSetA(a, 0);
            moveSetB(b, 0);
            move(a, b, 0);
        }
        for (let i = 1; i < 7; ++i) {
            let a = week + 'f' + i + 'm1';
            let b = week + 'f' + i + 'm2';
            moveSetA(a, 1);
            moveSetB(b, 1);
            move(a, b, 1);
        }
    }
    else {
        for (let i = 1; i < 13; ++i) {
            let a = week + 'f' + i + 'p1';
            let b = week + 'f' + i + 'p2';
            moveSetA(a, 0);
            moveSetB(b, 0);
            move(a, b, 0);
        }
        for (let i = 2; i < 7; ++i) {
            let a = week + 'f' + i + 'm1';
            let b = week + 'f' + i + 'm2';
            moveSetA(a, 1);
            moveSetB(b, 1);
            move(a, b, 1);
        }
    }

    rankSort();
}

function rankSort() {
    let data = sessionStorage.getItem('player');
        data = JSON.parse(data);

    let arrayM = [];
    for (let i = 1; i < 25; ++i) {
        if (i == parseInt(sessionStorage.getItem('playerNR'))) {
            let nr0 = {
                rank: sessionStorage.getItem('rank'),
                first: data.first,
                last: data.last,
                height: data.height,
                weight: data.weight,
                nation: data.nation,
                win: sessionStorage.getItem('playerWin'),
                loss: sessionStorage.getItem('playerLoss'),
                strength: sessionStorage.getItem('str'),
                speed: sessionStorage.getItem('spd'),
                stamina: sessionStorage.getItem('stm'),
                punching: sessionStorage.getItem('punch'),
                kicking: sessionStorage.getItem('kick'),
                wrestling: sessionStorage.getItem('wrestling'),
                grappling: sessionStorage.getItem('grappling'),
                clinch: sessionStorage.getItem('clinch'),
                swin: sessionStorage.getItem('playerSwin'),
                sloss: sessionStorage.getItem('playerSloss'),
                pts: sessionStorage.getItem('playerPts'),
                code: 'nr0'
            }
            arrayM.push(nr0);
        }
        else {
            arrayM.push(JSON.parse(sessionStorage.getItem('nr' + i)));
        }
    }
    arrayM.sort(compareObjects);
    sessionStorage.setItem('standingsM', JSON.stringify(arrayM));

    let arrayF = [];
    for (let i = 1; i < 13; ++i) {
        if (i == parseInt(sessionStorage.getItem('playerNRF'))) {
            let nr0 = {
                rank: sessionStorage.getItem('rank'),
                first: data.first,
                last: data.last,
                height: data.height,
                weight: data.weight,
                nation: data.nation,
                win: sessionStorage.getItem('playerWin'),
                loss: sessionStorage.getItem('playerLoss'),
                strength: sessionStorage.getItem('str'),
                speed: sessionStorage.getItem('spd'),
                stamina: sessionStorage.getItem('stm'),
                punching: sessionStorage.getItem('punch'),
                kicking: sessionStorage.getItem('kick'),
                wrestling: sessionStorage.getItem('wrestling'),
                grappling: sessionStorage.getItem('grappling'),
                clinch: sessionStorage.getItem('clinch'),
                swin: sessionStorage.getItem('playerSwin'),
                sloss: sessionStorage.getItem('playerSloss'),
                pts: sessionStorage.getItem('playerPts'),
                code: 'nrf0'
            }
            arrayF.push(nr0);
        }
        else {
            arrayF.push(JSON.parse(sessionStorage.getItem('nrf' + i)));
        }
    }
    arrayF.sort(compareObjects);
    sessionStorage.setItem('standingsF', JSON.stringify(arrayF));
}

function compareObjects(a, b) {
    if (a.pts < b.pts) return 1;
    if (a.pts > b.pts) return -1;
  
    if (a.swin < b.swin) return 1;
    if (a.swin > b.swin) return -1;
  
    if (a.first < b.first) return -1;
    if (a.first > b.first) return 1;
  
    return 0;
}

function wc(str) {
    if (str == 'FLYWEIGHT'){
        return 1;
    }
    else if (str == 'BANTAMWEIGHT'){
        return 2;
    }
    else if (str == 'FEATHERWEIGHT'){
        return 3;
    }
    else if (str == 'LIGHTWEIGHT'){
        return 4;
    }
    else if (str == 'WELTERWEIGHT'){
        return 5;
    }
    else if (str == 'MIDDLEWEIGHT'){
        return 6;
    }
    else if (str == 'LIGHT HEAVYWEIGHT'){
        return 7;
    }
    else if (str == 'HEAVYWEIGHT'){
        return 8;
    }
    else if (str == 'WSTRAWWEIGHT'){
        return 9;
    }
    else if (str == 'WFLYWEIGHT'){
        return 10;
    }
    else if (str == 'WBANTAMWEIGHT'){
        return 11;
    }
}

function move(a, b, y) {
    let aOppAtt1 = sessionStorage.getItem('aOppAtt1');
    let aOppAtt2 = sessionStorage.getItem('aOppAtt2');
    let aOppAtt3 = sessionStorage.getItem('aOppAtt3');
    let bOppAtt1 = sessionStorage.getItem('bOppAtt1');
    let bOppAtt2 = sessionStorage.getItem('bOppAtt2');
    let bOppAtt3 = sessionStorage.getItem('bOppAtt3');

    sessionStorage.setItem('abPos', 0);
    sessionStorage.setItem('abWinner', null);
    sessionStorage.setItem('abMethod', null);
    sessionStorage.setItem('abRound', 0);
    sessionStorage.setItem('aOppPoints', 0);
    sessionStorage.setItem('bOppPoints', 0);
    sessionStorage.setItem('aOppControl', 0);
    sessionStorage.setItem('bOppControl', 0);
    sessionStorage.setItem('feintedA', 0);
    sessionStorage.setItem('feintedB', 0);

    roundLoop: for (let j = 0; j < 3; ++j) {
        sessionStorage.setItem('abRound', parseInt(sessionStorage.getItem('abRound')) + 1);
        for (let i = 0; i < 8; ++i) {
            let ranA = Random();

            if (sessionStorage.getItem('abPos') == 0) {
                if (sessionStorage.getItem('aOppStamina') <= 70) {
                    if (ranA >= 50) {
                        let hit = getHitA('STICK')
                        getDamageA(hit, 'STICK')
                        getDamageB(counterCalcA(2 - hit, 'STICK'))
                    }
                    else if (ranA >= 30) {
                        let hit = getHitA(aOppAtt1)
                        getDamageA(hit, aOppAtt1)
                        getDamageB(counterCalcA(getHitMax(aOppAtt1) - hit, aOppAtt1))
                    }
                    else if (ranA >= 10) {
                        let hit = getHitA(aOppAtt2)
                        getDamageA(hit, aOppAtt2)
                        getDamageB(counterCalcA(getHitMax(aOppAtt2) - hit, aOppAtt2))
                    }
                    else {
                        let hit = getHitA(aOppAtt3)
                        getDamageA(hit, aOppAtt3)
                        getDamageB(counterCalcA(getHitMax(aOppAtt3) - hit, aOppAtt3))
                    }
                }
                else {
                    if (ranA >= 80) {
                        let hit = getHitA('STICK')
                        getDamageA(hit, 'STICK')
                        getDamageB(counterCalcA(2 - hit, 'STICK'))
                    }
                    else if (ranA >= 45) {
                        let hit = getHitA(aOppAtt1)
                        getDamageA(hit, aOppAtt1)
                        getDamageB(counterCalcA(getHitMax(aOppAtt1) - hit, aOppAtt1))
                    }
                    else if (ranA >= 20) {
                        let hit = getHitA(aOppAtt2)
                        getDamageA(hit, aOppAtt2)
                        getDamageB(counterCalcA(getHitMax(aOppAtt2) - hit, aOppAtt2))
                    }
                    else {
                        let hit = getHitA(aOppAtt3)
                        getDamageA(hit, aOppAtt3)
                        getDamageB(counterCalcA(getHitMax(aOppAtt3) - hit, aOppAtt3))
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 1) {
                if (sessionStorage.getItem('aOppStamina') <= 70) {
                    if (ranA >= 50) {
                        let hit = getHitA('KNEE')
                        getDamageA(hit, 'KNEE')
                    }
                    else if (ranA >= 35) {
                        let hit = getHitA('ELBOW')
                        getDamageA(hit, 'ELBOW')
                    }
                    else if (ranA >= 10) {
                        let hit = getHitA('EXIT')
                        getDamageA(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitA('TRIP')
                        getDamageA(hit, 'TRIP')
                    }
                }
                else if (sessionStorage.getItem('aOppPunching') > sessionStorage.getItem('aOppWrestling') || sessionStorage.getItem('aOppKicking') > sessionStorage.getItem('aOppWrestling') || sessionStorage.getItem('aOppClinch') > sessionStorage.getItem('aOppWrestling')) {
                    if (ranA >= 70) {
                        let hit = getHitA('KNEE')
                        getDamageA(hit, 'KNEE')
                    }
                    else if (ranA >= 40) {
                        let hit = getHitA('ELBOW')
                        getDamageA(hit, 'ELBOW')
                    }
                    else if (ranA >= 10) {
                        let hit = getHitA('EXIT')
                        getDamageA(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitA('TRIP')
                        getDamageA(hit, 'TRIP')
                    }
                }
                else {
                    if (ranA >= 65) {
                        let hit = getHitA('KNEE')
                        getDamageA(hit, 'KNEE')
                    }
                    else if (ranA >= 45) {
                        let hit = getHitA('ELBOW')
                        getDamageA(hit, 'ELBOW')
                    }
                    else if (ranA >= 35) {
                        let hit = getHitA('EXIT')
                        getDamageA(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitA('TRIP')
                        getDamageA(hit, 'TRIP')
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 2) {
                if (sessionStorage.getItem('aOppStamina') <= 70) {
                    if (ranA >= 50) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 45) {
                        let hit = getHitA('GET UP')
                        getDamageA(hit, 'GET UP')
                    }
                    else if (ranA >= 15) {
                        let hit = getHitA('G&P')
                        getDamageA(hit, 'G&P')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONtop')
                        getDamageA(hit, 'SUBMISSIONtop')
                    }
                }
                else if (sessionStorage.getItem('aOppPunching') > sessionStorage.getItem('aOppWrestling') || sessionStorage.getItem('aOppKicking') > sessionStorage.getItem('aOppWrestling')) {
                    if (ranA >= 95) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 35) {
                        let hit = getHitA('GET UP')
                        getDamageA(hit, 'GET UP')
                    }
                    else if (ranA >= 15) {
                        let hit = getHitA('G&P')
                        getDamageA(hit, 'G&P')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONtop')
                        getDamageA(hit, 'SUBMISSIONtop')
                    }
                }
                else {
                    if (ranA >= 90) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 55) {
                        let hit = getHitA('GET UP')
                        getDamageA(hit, 'GET UP')
                    }
                    else if (ranA >= 25) {
                        let hit = getHitA('G&P')
                        getDamageA(hit, 'G&P')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONtop')
                        getDamageA(hit, 'SUBMISSIONtop')
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 3) {
                if (sessionStorage.getItem('aOppStamina') <= 70) {
                    if (ranA >= 70) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 35) {
                        let hit = getHitA('ESCAPE')
                        getDamageA(hit, 'ESCAPE')
                    }
                    else if (ranA >= 15) {
                        let hit = getHitA('REVERSE')
                        getDamageA(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONbot')
                        getDamageA(hit, 'SUBMISSIONbot')
                    }
                }
                else if (sessionStorage.getItem('aOppPunching') > sessionStorage.getItem('aOppWrestling') || sessionStorage.getItem('aOppKicking') > sessionStorage.getItem('aOppWrestling')) {
                    if (ranA >= 95) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 35) {
                        let hit = getHitA('ESCAPE')
                        getDamageA(hit, 'ESCAPE')
                    }
                    else if (ranA >= 15) {
                        let hit = getHitA('REVERSE')
                        getDamageA(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONbot')
                        getDamageA(hit, 'SUBMISSIONbot')
                    }
                }
                else {
                    if (ranA >= 90) {
                        let hit = getHitA('STALL')
                        getDamageA(hit, 'STALL')
                    }
                    else if (ranA >= 55) {
                        let hit = getHitA('ESCAPE')
                        getDamageA(hit, 'ESCAPE')
                    }
                    else if (ranA >= 25) {
                        let hit = getHitA('REVERSE')
                        getDamageA(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitA('SUBMISSIONbot')
                        getDamageA(hit, 'SUBMISSIONbot')
                    }
                }
            }

            if (sessionStorage.getItem('abWinner') == 1 || sessionStorage.getItem('abWinner') == 2) {
                break roundLoop;
            }
            if (sessionStorage.getItem('abPos') == 3) {
                sessionStorage.setItem('bOppControl', parseInt(sessionStorage.getItem('bOppControl')) + 1);
            }

            let ranB = Random();

            if (sessionStorage.getItem('abPos') == 0) {
                if (sessionStorage.getItem('bOppStamina') <= 70) {
                    if (ranB >= 50) {
                        let hit = getHitB('STICK')
                        getDamageB(hit, 'STICK')
                        getDamageA(counterCalcB(2 - hit, 'STICK'))
                    }
                    else if (ranB >= 30) {
                        let hit = getHitB('bOppAtt1')
                        getDamageB(hit, 'bOppAtt1')
                        getDamageA(counterCalcB(getHitMax(bOppAtt1) - hit, 'bOppAtt1'))
                    }
                    else if (ranB >= 10) {
                        let hit = getHitB('bOppAtt2')
                        getDamageB(hit, 'bOppAtt2')
                        getDamageA(counterCalcB(getHitMax(bOppAtt2) - hit, 'bOppAtt2'))
                    }
                    else {
                        let hit = getHitB('bOppAtt3')
                        getDamageB(hit, 'bOppAtt3')
                        getDamageA(counterCalcB(getHitMax(bOppAtt3) - hit, 'bOppAtt3'))
                    }
                }
                else {
                    if (ranB >= 80) {
                        let hit = getHitB('STICK')
                        getDamageB(hit, 'STICK')
                        getDamageA(counterCalcB(2 - hit, 'STICK'))
                    }
                    else if (ranB >= 45) {
                        let hit = getHitB('bOppAtt1')
                        getDamageB(hit, 'bOppAtt1')
                        getDamageA(counterCalcB(getHitMax(bOppAtt1) - hit, 'bOppAtt1'))
                    }
                    else if (ranB >= 20) {
                        let hit = getHitB('bOppAtt2')
                        getDamageB(hit, 'bOppAtt2')
                        getDamageA(counterCalcB(getHitMax(bOppAtt2) - hit, 'bOppAtt2'))
                    }
                    else {
                        let hit = getHitB('bOppAtt3')
                        getDamageB(hit, 'bOppAtt3')
                        getDamageA(counterCalcB(getHitMax(bOppAtt3) - hit, 'bOppAtt3'))
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 1) {
                if (sessionStorage.getItem('bOppStamina') <= 70) {
                    if (ranB >= 50) {
                        let hit = getHitB('KNEE')
                        getDamageB(hit, 'KNEE')
                    }
                    else if (ranB >= 35) {
                        let hit = getHitB('ELBOW')
                        getDamageB(hit, 'ELBOW')
                    }
                    else if (ranB >= 10) {
                        let hit = getHitB('EXIT')
                        getDamageB(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitB('TRIP')
                        getDamageB(hit, 'TRIP')
                    }
                }
                else if (sessionStorage.getItem('bOppPunching') > sessionStorage.getItem('bOppWrestling') || sessionStorage.getItem('bOppKicking') > sessionStorage.getItem('bOppWrestling') || sessionStorage.getItem('bOppClinch') > sessionStorage.getItem('bOppWrestling')) {
                    if (ranB >= 70) {
                        let hit = getHitB('KNEE')
                        getDamageB(hit, 'KNEE')
                    }
                    else if (ranB >= 40) {
                        let hit = getHitB('ELBOW')
                        getDamageB(hit, 'ELBOW')
                    }
                    else if (ranB >= 10) {
                        let hit = getHitB('EXIT')
                        getDamageB(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitB('TRIP')
                        getDamageB(hit, 'TRIP')
                    }
                }
                else {
                    if (ranB >= 65) {
                        let hit = getHitB('KNEE')
                        getDamageB(hit, 'KNEE')
                    }
                    else if (ranB >= 45) {
                        let hit = getHitB('ELBOW')
                        getDamageB(hit, 'ELBOW')
                    }
                    else if (ranB >= 35) {
                        let hit = getHitB('EXIT')
                        getDamageB(hit, 'EXIT')
                    }
                    else {
                        let hit = getHitB('TRIP')
                        getDamageB(hit, 'TRIP')
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 3) {
                if (sessionStorage.getItem('bOppStamina') <= 70) {
                    if (ranB >= 50) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 45) {
                        let hit = getHitB('GET UP')
                        getDamageB(hit, 'GET UP')
                    }
                    else if (ranB >= 15) {
                        let hit = getHitB('G&P')
                        getDamageB(hit, 'G&P')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONtop')
                        getDamageB(hit, 'SUBMISSIONtop')
                    }
                }
                else if (sessionStorage.getItem('bOppPunching') > sessionStorage.getItem('bOppWrestling') || sessionStorage.getItem('bOppKicking') > sessionStorage.getItem('bOppWrestling')) {
                    if (ranB >= 95) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 35) {
                        let hit = getHitB('GET UP')
                        getDamageB(hit, 'GET UP')
                    }
                    else if (ranB >= 15) {
                        let hit = getHitB('G&P')
                        getDamageB(hit, 'G&P')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONtop')
                        getDamageB(hit, 'SUBMISSIONtop')
                    }
                }
                else {
                    if (ranB >= 90) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 55) {
                        let hit = getHitB('GET UP')
                        getDamageB(hit, 'GET UP')
                    }
                    else if (ranB >= 25) {
                        let hit = getHitB('G&P')
                        getDamageB(hit, 'G&P')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONtop')
                        getDamageB(hit, 'SUBMISSIONtop')
                    }
                }
            }
            else if (sessionStorage.getItem('abPos') == 2) {
                if (sessionStorage.getItem('bOppStamina') <= 70) {
                    if (ranB >= 70) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 35) {
                        let hit = getHitB('ESCAPE')
                        getDamageB(hit, 'ESCAPE')
                    }
                    else if (ranB >= 15) {
                        let hit = getHitB('REVERSE')
                        getDamageB(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONbot')
                        getDamageB(hit, 'SUBMISSIONbot')
                    }
                }
                else if (sessionStorage.getItem('bOppPunching') > sessionStorage.getItem('bOppWrestling') || sessionStorage.getItem('bOppKicking') > sessionStorage.getItem('bOppWrestling')) {
                    if (ranB >= 95) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 35) {
                        let hit = getHitB('ESCAPE')
                        getDamageB(hit, 'ESCAPE')
                    }
                    else if (ranB >= 15) {
                        let hit = getHitB('REVERSE')
                        getDamageB(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONbot')
                        getDamageB(hit, 'SUBMISSIONbot')
                    }
                }
                else {
                    if (ranB >= 90) {
                        let hit = getHitB('STALL')
                        getDamageB(hit, 'STALL')
                    }
                    else if (ranB >= 55) {
                        let hit = getHitB('ESCAPE')
                        getDamageB(hit, 'ESCAPE')
                    }
                    else if (ranB >= 25) {
                        let hit = getHitB('REVERSE')
                        getDamageB(hit, 'REVERSE')
                    }
                    else {
                        let hit = getHitB('SUBMISSIONbot')
                        getDamageB(hit, 'SUBMISSIONbot')
                    }
                }
            }

            if (sessionStorage.getItem('abWinner') == 1 || sessionStorage.getItem('abWinner') == 2) {
                break roundLoop;
            }
            if (sessionStorage.getItem('abPos') == 2) {
                sessionStorage.setItem('aOppControl', parseInt(sessionStorage.getItem('aOppControl')) + 1);
            }
        }
        nextRound();
    }
    if (sessionStorage.getItem('abMethod') != 'KO' && sessionStorage.getItem('abMethod') != 'TKO' && sessionStorage.getItem('abMethod') != 'SUB') {
        if (parseInt(sessionStorage.getItem('aOppPoints')) > parseInt(sessionStorage.getItem('bOppPoints'))) {
            sessionStorage.setItem('abWinner', 1);
            sessionStorage.setItem('abMethod', 'DEC');
        }
        else {
            sessionStorage.setItem('abWinner', 2);
            sessionStorage.setItem('abMethod', 'DEC');
        }
    }
    let str = a.slice(0, -2);
    console.log(sessionStorage.getItem('abWinner'));
    if (y == 0) {
        if (sessionStorage.getItem('abWinner') == 1) {
            sessionStorage.setItem(str + 'pw', a);
            sessionStorage.setItem(str + 'pl', b);

            postFight(a, b);
        }
        else {
            sessionStorage.setItem(str + 'pw', b);
            sessionStorage.setItem(str + 'pl', a);

            postFight(b, a);
        }
    }
    else {
        if (sessionStorage.getItem('abWinner') == 1) {
            sessionStorage.setItem(str + 'mw', a);
            sessionStorage.setItem(str + 'ml', b);

            postFight(a, b);
        }
        else {
            sessionStorage.setItem(str + 'mw', b);
            sessionStorage.setItem(str + 'ml', a);

            postFight(b, a);
        }
    }
    sessionStorage.setItem(str + 'm', sessionStorage.getItem('abMethod'));
    sessionStorage.setItem(str + 'r', sessionStorage.getItem('abRound'));
    if (y == 0) {
        console.log('winner: ' + sessionStorage.getItem(str + 'pw'));
        console.log('loser: ' + sessionStorage.getItem(str + 'pl'));
        console.log('method: ' + 'R' + sessionStorage.getItem('abRound') + ' ' + sessionStorage.getItem('abMethod'));
    }
    else {
        console.log('winner: ' + sessionStorage.getItem(str + 'mw'));
        console.log('loser: ' + sessionStorage.getItem(str + 'ml'));
        console.log('method: ' + 'R' + sessionStorage.getItem('abRound') + ' ' + sessionStorage.getItem('abMethod'));
    }
}

function postFight(w, l) {
    let objW = null;
    let objL = null;

    if (w.charAt(w.length - 2) == 'p') {
        objW = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(w))));
        objL = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(l))));
    }
    else {
        objW = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(w))));
        objL = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(l))));
    }

    let round = parseInt(sessionStorage.getItem('abRound'));
    let method = sessionStorage.getItem('abMethod');
    let pts = 3;

    if (method == 'KO' || method == 'TKO' || method == 'SUB') {
        switch (round) {
            case 1:
                pts += 3;
            break;
            case 2:
                pts += 2;
            break;
            case 3:
                pts += 1;
            break;
        }
    }

    objW.pts = parseInt(objW.pts) + pts;
    objW.strk = parseInt(objW.strk) + 1;
    objW.swin = parseInt(objW.swin) + 1;
    objW.win = parseInt(objW.win) + 1;
    
    objL.strk = 0;
    objL.sloss = parseInt(objL.sloss) + 1;
    objL.loss = parseInt(objL.loss) + 1;

    
    sessionStorage.setItem(w, JSON.stringify(objW));
    sessionStorage.setItem(l, JSON.stringify(objL));

    sessionStorage.setItem(objW.code, JSON.stringify(objW));
    sessionStorage.setItem(objL.code, JSON.stringify(objL));
}

function nextRound() {
	let totalDmgA = parseInt(sessionStorage.getItem('totalDmgA'));
	let totalDmgB = parseInt(sessionStorage.getItem('totalDmgB'));
	let aOppControl = parseInt(sessionStorage.getItem('aOppcontrol'));
	let bOppControl = parseInt(sessionStorage.getItem('bOppcontrol'));
	
	if ((Math.abs(totalDmgA - totalDmgB)) < 40) {
		if (aOppControl > bOppControl) {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 10);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 9);
		}
		else if (aOppControl < bOppControl) {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 9);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 10);
		}
		else {
			if (totalDmgA < totalDmgB) {
				sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 9);
				sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 10);
			}
			else {
				sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 10);
				sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 9);
			}
		}
	}
	else if (Math.abs(totalDmgA - totalDmgB) > 350) {
		if (totalDmgA > totalDmgB) {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 10);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 8);
		}
		else {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 8);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 10);
		}
	}
	else {
		if (totalDmgA > totalDmgB) {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 10);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 9);
		}
		else {
			sessionStorage.setItem('aOppPoints', parseInt(sessionStorage.getItem('aOppPoints')) + 9);
			sessionStorage.setItem('bOppPoints', parseInt(sessionStorage.getItem('bOppPoints')) + 10);
		}
	}

    sessionStorage.setItem('totalDmgA', 0);
    sessionStorage.setItem('totalDmgB', 0);
    sessionStorage.setItem('aOppControl', 0);
    sessionStorage.setItem('bOppControl', 0);
    sessionStorage.setItem('feintedA', 0);
    sessionStorage.setItem('feintedB', 0);
}

function moveSetA(x, y) {
    let obj = null;
    if (y == 0) {
        obj = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(x))));
    }
    else {
        obj = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(x))));
    }

    sessionStorage.setItem('aOppStatus', 1000);
    sessionStorage.setItem('aOppStrength', obj.strength);
    sessionStorage.setItem('aOppSpeed', obj.speed);
    sessionStorage.setItem('aOppStamina', obj.stamina);
    sessionStorage.setItem('aOppPunching', obj.punching);
    sessionStorage.setItem('aOppKicking', obj.kicking);
    sessionStorage.setItem('aOppWrestling', obj.wrestling);
    sessionStorage.setItem('aOppGrappling', obj.grappling);
    sessionStorage.setItem('aOppClinch', obj.clinch);

    let ran1 = Random();
    let ran2 = Random();

    let arr = [
        {type: 'punching', value: sessionStorage.getItem('aOppPunching')},
        {type: 'kicking', value: sessionStorage.getItem('aOppKicking')},
        {type: 'wrestling', value: sessionStorage.getItem('aOppWrestling')},
        {type: 'grappling', value: sessionStorage.getItem('aOppGrappling')}
    ];
    arr.sort(function (a, b) {
        return a.value - b.value;
    });

    let opp1 = arr[3].type;
    let opp2 = arr[2].type;
    let opp3 = arr[1].type;
    let opp4 = arr[0].type;

    if (ran1 <= 70) {
        if (opp1 == 'punching'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('aOppStance', 'MMA');
                sessionStorage.setItem('aMmaBuff', 5);
            }
            else {
                sessionStorage.setItem('aOppStance', 'BLADED');
                sessionStorage.setItem('aBladedBuff', 5);
            }
        }
        else if (opp1 == 'kicking'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('aOppStance', 'MMA');
                sessionStorage.setItem('aMmaBuff', 5);
            }
            else {
                sessionStorage.setItem('aOppStance', 'THAI');
                sessionStorage.setItem('aThaiBuff', 5);
            }
        }
        else if (opp1 == 'wrestling'){
            sessionStorage.setItem('aOppStance', 'MMA');
            sessionStorage.setItem('aMmaBuff', 5);
        }
        else if (opp1 == 'grappling'){
            sessionStorage.setItem('aOppStance', 'MMA');
            sessionStorage.setItem('aMmaBuff', 5);
        }
    }
    else {
        if (opp2 == 'punching'){
            sessionStorage.setItem('aOppStance', 'BLADED');
            sessionStorage.setItem('aBladedBuff', 5);
        }
        else if (opp2 == 'kicking'){
            sessionStorage.setItem('aOppStance', 'THAI');
            sessionStorage.setItem('aThaiBuff', 5);
        }
        else if (opp2 == 'wrestling'){
            sessionStorage.setItem('aOppStance', 'MMA');
            sessionStorage.setItem('aMmaBuff', 5);
        }
        else if (opp2 == 'grappling'){
            sessionStorage.setItem('aOppStance', 'MMA');
            sessionStorage.setItem('aMmaBuff', 5);
        }
    }

    if (ran2 <= 50) {
        if (opp4 == 'punching'){
            let ran = Random();
            if (ran <= 70){
                sessionStorage.setItem('aOppGuard', 'HIGH');
                sessionStorage.setItem('aHighBuff', 5);
                sessionStorage.setItem('aHighNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'LONG');
                sessionStorage.setItem('aLongBuff', 5);
                sessionStorage.setItem('aLongNerf', 5);
            }
        }
        else if (opp4 == 'kicking'){
            let ran = Random();
            if (ran <= 60){
                sessionStorage.setItem('aOppGuard', 'HIGH');
                sessionStorage.setItem('aHighBuff', 5);
                sessionStorage.setItem('aHighNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'LONG')
                sessionStorage.setItem('aLongBuff', 5);
                sessionStorage.setItem('aLongNerf', 5);
            }
        }
        else if (opp4 == 'wrestling'){
            sessionStorage.setItem('aOppGuard', 'LOW');
            sessionStorage.setItem('aLowBuff', 5);
            sessionStorage.setItem('aLowNerf', 5);
        }
        else if (opp4 == 'grappling'){
            sessionStorage.setItem('aOppGuard', 'LOW');
            sessionStorage.setItem('aLowBuff', 5);
            sessionStorage.setItem('aLowNerf', 5);
        }
    }
    else {
        if (opp1 == 'punching'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('aOppGuard', 'HIGH');
                sessionStorage.setItem('aHighBuff', 5);
                sessionStorage.setItem('aHighNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'REACTIVE');
                sessionStorage.setItem('aReactNerf', 5);
            }
        }
        else if (opp1 == 'kicking'){
            let ran = Random();
            if (ran <= 65){
                sessionStorage.setItem('aOppGuard', 'LONG');
                sessionStorage.setItem('aLongBuff', 5);
                sessionStorage.setItem('aLongNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'REACTIVE');
                sessionStorage.setItem('aReactNerf', 5);
            }
        }
        else if (opp1 == 'wrestling'){
            let ran = Random();
            if (ran <= 75){
                sessionStorage.setItem('aOppGuard', 'LOW');
                sessionStorage.setItem('aLowBuff', 5);
                sessionStorage.setItem('aLowNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'REACTIVE');
                sessionStorage.setItem('aReactNerf', 5);

            }
        }
        else if (opp1 == 'grappling'){
            let ran = Random();
            if (ran <= 75){
                sessionStorage.setItem('aOppGuard', 'LOW');
                sessionStorage.setItem('aLowBuff', 5);
                sessionStorage.setItem('aLowNerf', 5);
            }
            else {
                sessionStorage.setItem('aOppGuard', 'REACTIVE');
                sessionStorage.setItem('aReactNerf', 5);
            }
        }
    }
    
    if (opp1 == 'punching'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'BLITZ');
            sessionStorage.setItem('aOppAtt3', 'PRESSURE');
        }
        else if (ran <= 40){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'BLITZ');
            sessionStorage.setItem('aOppAtt3', 'POWER');
        }
        else if (ran <= 60){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'CLINCH');
        }
        else if (ran <= 80){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'PRESSURE');
        }
        else if (ran <= 90){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'BLITZ');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'FEINT');
            sessionStorage.setItem('aOppAtt3', 'POWER');
        }
    }
    else if (opp1 == 'kicking'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'PRESSURE');
        }
        else if (ran <= 40){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'POWER');
        }
        else if (ran <= 60){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'CLINCH');
        }
        else if (ran <= 80){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'BLITZ');
        }
        else if (ran <= 90){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'FEINT');
        }
    }
    else if (opp1 == 'wrestling'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'BLITZ');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 40){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 60){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'POWER');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 80){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'PRESSURE');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 90){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'CLINCH');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'FEINT');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
    }
    else if (opp1 == 'grappling'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'BLITZ');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 40){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'LOW KICK');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 60){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'POWER');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 80){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'PRESSURE');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 90){
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'CLINCH');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('aOppAtt1', 'BRAWL');
            sessionStorage.setItem('aOppAtt2', 'FEINT');
            sessionStorage.setItem('aOppAtt3', 'TAKEDOWN');
        }
    }

    console.log(obj.first + ' ' + obj.last + ': ' + sessionStorage.getItem('aOppStance') + ' ' + sessionStorage.getItem('aOppGuard') + ' ' + sessionStorage.getItem('aOppAtt1') + ' ' + sessionStorage.getItem('aOppAtt2') + ' ' + sessionStorage.getItem('aOppAtt3'));
}

function moveSetB(x, y) {
    let obj = null;
    if (y == 0) {
        obj = JSON.parse(returnFighterM(parseInt(sessionStorage.getItem(x))));
    }
    else {
        obj = JSON.parse(returnFighterF(parseInt(sessionStorage.getItem(x))));
    }

    sessionStorage.setItem('bOppStatus', 1000);
    sessionStorage.setItem('bOppStrength', obj.strength);
    sessionStorage.setItem('bOppSpeed', obj.speed);
    sessionStorage.setItem('bOppStamina', obj.stamina);
    sessionStorage.setItem('bOppPunching', obj.punching);
    sessionStorage.setItem('bOppKicking', obj.kicking);
    sessionStorage.setItem('bOppWrestling', obj.wrestling);
    sessionStorage.setItem('bOppGrappling', obj.grappling);
    sessionStorage.setItem('bOppClinch', obj.clinch);

    let ran1 = Random();
    let ran2 = Random();

    let arr = [
        {type: 'punching', value: sessionStorage.getItem('bOppPunching')},
        {type: 'kicking', value: sessionStorage.getItem('bOppKicking')},
        {type: 'wrestling', value: sessionStorage.getItem('bOppWrestling')},
        {type: 'grappling', value: sessionStorage.getItem('bOppGrappling')}
    ];
    arr.sort(function (a, b) {
        return a.value - b.value;
    });

    let opp1 = arr[3].type;
    let opp2 = arr[2].type;
    let opp3 = arr[1].type;
    let opp4 = arr[0].type;

    if (ran1 <= 70) {
        if (opp1 == 'punching'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('bOppStance', 'MMA');
                sessionStorage.setItem('bMmaBuff', 5);
            }
            else {
                sessionStorage.setItem('bOppStance', 'BLADED');
                sessionStorage.setItem('bBladedBuff', 5);
            }
        }
        else if (opp1 == 'kicking'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('bOppStance', 'MMA');
                sessionStorage.setItem('bMmaBuff', 5);
            }
            else {
                sessionStorage.setItem('bOppStance', 'THAI');
                sessionStorage.setItem('bThaiBuff', 5);
            }
        }
        else if (opp1 == 'wrestling'){
            sessionStorage.setItem('bOppStance', 'MMA');
            sessionStorage.setItem('bMmaBuff', 5);
        }
        else if (opp1 == 'grappling'){
            sessionStorage.setItem('bOppStance', 'MMA');
            sessionStorage.setItem('bMmaBuff', 5);
        }
    }
    else {
        if (opp2 == 'punching'){
            sessionStorage.setItem('bOppStance', 'BLADED');
            sessionStorage.setItem('bBladedBuff', 5);
        }
        else if (opp2 == 'kicking'){
            sessionStorage.setItem('bOppStance', 'THAI');
            sessionStorage.setItem('bThaiBuff', 5);
        }
        else if (opp2 == 'wrestling'){
            sessionStorage.setItem('bOppStance', 'MMA');
            sessionStorage.setItem('bMmaBuff', 5);
        }
        else if (opp2 == 'grappling'){
            sessionStorage.setItem('bOppStance', 'MMA');
            sessionStorage.setItem('bMmaBuff', 5);
        }
    }

    if (ran2 <= 50) {
        if (opp4 == 'punching'){
            let ran = Random();
            if (ran <= 70){
                sessionStorage.setItem('bOppGuard', 'HIGH');
                sessionStorage.setItem('bHighBuff', 5);
                sessionStorage.setItem('bHighNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'LONG');
                sessionStorage.setItem('bLongBuff', 5);
                sessionStorage.setItem('bLongNerf', 5);
            }
        }
        else if (opp4 == 'kicking'){
            let ran = Random();
            if (ran <= 60){
                sessionStorage.setItem('bOppGuard', 'HIGH');
                sessionStorage.setItem('bHighBuff', 5);
                sessionStorage.setItem('bHighNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'LONG')
                sessionStorage.setItem('bLongBuff', 5);
                sessionStorage.setItem('bLongNerf', 5);
            }
        }
        else if (opp4 == 'wrestling'){
            sessionStorage.setItem('bOppGuard', 'LOW');
            sessionStorage.setItem('bLowBuff', 5);
            sessionStorage.setItem('bLowNerf', 5);
        }
        else if (opp4 == 'grappling'){
            sessionStorage.setItem('bOppGuard', 'LOW');
            sessionStorage.setItem('bLowBuff', 5);
            sessionStorage.setItem('bLowNerf', 5);
        }
    }
    else {
        if (opp1 == 'punching'){
            let ran = Random();
            if (ran <= 50){
                sessionStorage.setItem('bOppGuard', 'HIGH');
                sessionStorage.setItem('bHighBuff', 5);
                sessionStorage.setItem('bHighNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'REACTIVE');
                sessionStorage.setItem('bReactNerf', 5);
            }
        }
        else if (opp1 == 'kicking'){
            let ran = Random();
            if (ran <= 65){
                sessionStorage.setItem('bOppGuard', 'LONG');
                sessionStorage.setItem('bLongBuff', 5);
                sessionStorage.setItem('bLongNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'REACTIVE');
                sessionStorage.setItem('bReactNerf', 5);
            }
        }
        else if (opp1 == 'wrestling'){
            let ran = Random();
            if (ran <= 75){
                sessionStorage.setItem('bOppGuard', 'LOW');
                sessionStorage.setItem('bLowBuff', 5);
                sessionStorage.setItem('bLowNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'REACTIVE');
                sessionStorage.setItem('bReactNerf', 5);

            }
        }
        else if (opp1 == 'grappling'){
            let ran = Random();
            if (ran <= 75){
                sessionStorage.setItem('bOppGuard', 'LOW');
                sessionStorage.setItem('bLowBuff', 5);
                sessionStorage.setItem('bLowNerf', 5);
            }
            else {
                sessionStorage.setItem('bOppGuard', 'REACTIVE');
                sessionStorage.setItem('bReactNerf', 5);
            }
        }
    }
    
    if (opp1 == 'punching'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'BLITZ');
            sessionStorage.setItem('bOppAtt3', 'PRESSURE');
        }
        else if (ran <= 40){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'BLITZ');
            sessionStorage.setItem('bOppAtt3', 'POWER');
        }
        else if (ran <= 60){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'CLINCH');
        }
        else if (ran <= 80){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'PRESSURE');
        }
        else if (ran <= 90){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'BLITZ');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'FEINT');
            sessionStorage.setItem('bOppAtt3', 'POWER');
        }
    }
    else if (opp1 == 'kicking'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'PRESSURE');
        }
        else if (ran <= 40){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'POWER');
        }
        else if (ran <= 60){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'CLINCH');
        }
        else if (ran <= 80){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'BLITZ');
        }
        else if (ran <= 90){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'FEINT');
        }
    }
    else if (opp1 == 'wrestling'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'BLITZ');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 40){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 60){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'POWER');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 80){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'PRESSURE');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 90){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'CLINCH');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'FEINT');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
    }
    else if (opp1 == 'grappling'){
        let ran = Random();
        if (ran <= 20){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'BLITZ');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 40){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'LOW KICK');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 60){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'POWER');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 80){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'PRESSURE');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else if (ran <= 90){
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'CLINCH');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
        else {
            sessionStorage.setItem('bOppAtt1', 'BRAWL');
            sessionStorage.setItem('bOppAtt2', 'FEINT');
            sessionStorage.setItem('bOppAtt3', 'TAKEDOWN');
        }
    }

    console.log(obj.first + ' ' + obj.last + ': ' + sessionStorage.getItem('bOppStance') + ' ' + sessionStorage.getItem('bOppGuard') + ' ' + sessionStorage.getItem('bOppAtt1') + ' ' + sessionStorage.getItem('bOppAtt2') + ' ' + sessionStorage.getItem('bOppAtt3'));
}

function getHitA(att) {
	let aOppStr = parseInt(sessionStorage.getItem('aOppStrength'));
	let aOppSpd = parseInt(sessionStorage.getItem('aOppSpeed'));
	let aOppStm = parseInt(sessionStorage.getItem('aOppStamina'));
	let aOppPunching = parseInt(sessionStorage.getItem('aOppPunching'));
	let aOppKicking = parseInt(sessionStorage.getItem('aOppKicking'));
	let aOppWrestling = parseInt(sessionStorage.getItem('aOppWrestling'));
	let aOppGrappling = parseInt(sessionStorage.getItem('aOppGrappling'));
	let aOppClinch = parseInt(sessionStorage.getItem('aOppClinch'));
	let aMmaBuff = parseInt(sessionStorage.getItem('aMmaBuff'));
	let aBladedBuff = parseInt(sessionStorage.getItem('aBladedBuff'));
	let aThaiBuff = parseInt(sessionStorage.getItem('aThaiBuff'));
	let aLongBuff = parseInt(sessionStorage.getItem('aLongBuff'));
	let aLongNerf = parseInt(sessionStorage.getItem('aLongNerf'));
	let aHighBuff = parseInt(sessionStorage.getItem('aHighBuff'));
	let aHighNerf = parseInt(sessionStorage.getItem('aHighNerf'));
	let aLowBuff = parseInt(sessionStorage.getItem('aLowBuff'));
	let aLowNerf = parseInt(sessionStorage.getItem('aLowNerf'));
	let aReactNerf = parseInt(sessionStorage.getItem('aReactNerf'));

	let bOppStr = parseInt(sessionStorage.getItem('bOppStrength'));
	let bOppSpd = parseInt(sessionStorage.getItem('bOppSpeed'));
	let bOppStm = parseInt(sessionStorage.getItem('bOppStamina'));
	let bOppPunching = parseInt(sessionStorage.getItem('bOppPunching'));
	let bOppKicking = parseInt(sessionStorage.getItem('bOppKicking'));
	let bOppWrestling = parseInt(sessionStorage.getItem('bOppWrestling'));
	let bOppGrappling = parseInt(sessionStorage.getItem('bOppGrappling'));
	let bOppClinch = parseInt(sessionStorage.getItem('bOppClinch'));
	let bMmaBuff = parseInt(sessionStorage.getItem('bMmaBuff'));
	let bBladedBuff = parseInt(sessionStorage.getItem('bBladedBuff'));
	let bThaiBuff = parseInt(sessionStorage.getItem('bThaiBuff'));
	let bLongBuff = parseInt(sessionStorage.getItem('bLongBuff'));
	let bLongNerf = parseInt(sessionStorage.getItem('bLongNerf'));
	let bHighBuff = parseInt(sessionStorage.getItem('bHighBuff'));
	let bHighNerf = parseInt(sessionStorage.getItem('bHighNerf'));
	let bLowBuff = parseInt(sessionStorage.getItem('bLowBuff'));
	let bLowNerf = parseInt(sessionStorage.getItem('bLowNerf'));
	let bReactNerf = parseInt(sessionStorage.getItem('bReactNerf'));

	let per = 0;
	let hit = 0;
	per = (1.5 * (aOppPunching) - 1.5 * (bOppPunching)) + (.8 * (aOppSpd - bOppSpd));
	if (att == 'STICK') {
		for (let i = 0; i < 2; ++i) {
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 70 + (Math.pow(per, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 70 - (Math.pow(per1, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'BRAWL'){
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'POWER'){
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 20 + (Math.pow(per, .45)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 20 - (Math.pow(per1, .45)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'PRESSURE'){
		for (let i = 0; i < 8; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'BLITZ'){
		let bPer = ((aOppSpd * 2) - (bOppSpd + bOppPunching));
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (bPer >= 0){
				if (ran1 <= 30 + (Math.pow(bPer, .63)) - bBladedBuff - bHighBuff + bLowNerf + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let bPer1 = Math.abs(bPer);
				if (ran1 <= 30 - (Math.pow(bPer1, .63)) - bBladedBuff - bHighBuff + bLowNerf + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'LOW KICK'){
		let kPer = (1.5 * (aOppKicking) - 1.5 * (bOppKicking)) + (.8 * (aOppSpd - bOppSpd));
		let ran1 = Random();
		if (kPer >= 0){
			if (ran1 <= 70 + (Math.pow(kPer, .63)) + aThaiBuff - bThaiBuff - bLongBuff + getFeintedB()) {
				++hit;
			}
		}
		else {
			let per1 = Math.abs(kPer);
			if (ran1 <= 70 - (Math.pow(per1, .63)) + aThaiBuff - bThaiBuff - bLongBuff + getFeintedB()) {
				++hit;
			}
		}
	}
	else if (att == 'FEINT') {
		let fPer = parseInt(25 + Math.pow(aOppPunching, .9));
		let ran = Random();
		if (ran <= fPer) {
			++hit;
			sessionStorage.setItem('feintedB', 1);
		}
	}
	else if (att == 'TAKEDOWN') {
		let tPer = parseInt(35 + Math.pow(aOppWrestling, .75) - Math.pow(bOppWrestling, .75) + getFeintedB() + aMmaBuff - bMmaBuff - bLowBuff + bHighNerf + (.8 * (aOppSpd - bOppSpd)) + (.8 * (aOppStr - bOppStr)));
		let ran = Random();
		if (tPer < 0) {
		}
		else if (ran <= tPer) {
			++hit;
			sessionStorage.setItem('abPos', 2);
		}
	}
	else if (att == 'CLINCH'){
		for (let i = 0; i < 2; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + aBladedBuff - bBladedBuff - bHighBuff + bLongNerf + getFeintedB()) {
					++hit;
				}
			}
		}
		sessionStorage.setItem('abPos', 1);
	}
	else if (att == 'KNEE') {
		let cPer = parseInt(60 + Math.pow(aOppClinch, .9) - Math.pow(bOppClinch, .9) + (.8 * (aOppSpd - bOppSpd)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
			}
		}
	}
	else if (att == 'ELBOW') {
		let cPer = parseInt(40 + Math.pow(aOppClinch, .9) - Math.pow(bOppClinch, .9) + (.8 * (aOppSpd - bOppSpd)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
			}
		}
	}
	else if (att == 'EXIT') {
		let cPer = parseInt(35 + Math.pow(aOppClinch, .9) - Math.pow(bOppClinch, .9) + (.8 * (aOppSpd - bOppSpd)) + (.8 * (aOppStr - bOppStr)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
				sessionStorage.setItem('abPos', 0);
			}
		}
	}
	else if (att == 'TRIP') {
		let cPer = parseInt(25 + Math.pow(aOppClinch, .9) - Math.pow(bOppClinch, .9) + (.8 * (aOppSpd - bOppSpd)) + (.8 * (aOppStr - bOppStr)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
				sessionStorage.setItem('abPos', 2);
			}
		}
	}
	else if (att == 'GET UP') {
		sessionStorage.setItem('abPos', 0);
	}
	else if (att == 'G&P') {
		for (let i = 0; i < 4; ++i) {
			let ran1 = Random();
			if (ran1 <= 80) {
				++hit;
			}
		}
	}
	else if (att == 'SUBMISSIONtop') {
		let sPer = parseInt(15 + Math.pow(aOppGrappling, .65) - Math.pow(bOppGrappling, .65));
		let ran1 = Random();
		if (sPer <= 0) {
		}
		else if (ran1 <= sPer) {
			++hit;
			sessionStorage.setItem('abWinner', 1);
			sessionStorage.setItem('abMethod', 'SUB');
		}
	}
	else if (att == 'ESCAPE') {
		let ePer = 5 + parseInt(30 + Math.pow(aOppWrestling, .75) - Math.pow(bOppWrestling, .75) + (.8 * (aOppSpd - bOppSpd)) + (.8 * (aOppStr - bOppStr)));
		let ran = Random();
		if (ePer < 0) {
		}
		else if (ran <= ePer) {
			++hit;
			sessionStorage.setItem('abPos', 0)
		}
	}
	else if (att == 'REVERSE') {
		let ePer = parseInt(20 + Math.pow(aOppWrestling, .6) - Math.pow(bOppWrestling, .6) + (.8 * (aOppSpd - bOppSpd)) + (.8 * (aOppStr - bOppStr)));
		let ran = Random();
		if (ePer < 0) {
		}
		else if (ran <= ePer) {
			++hit;
			sessionStorage.setItem('abPos', 2);
		}
	}
	else if (att == 'SUBMISSIONbot') {
		let sPer = parseInt(10 + Math.pow(aOppGrappling, .55) - Math.pow(bOppGrappling, .55));
		let ran1 = Random();
		if (sPer <= 0) {
		}
		else if (ran1 <= sPer) {
			++hit;
			sessionStorage.setItem('abWinner', 1);
			sessionStorage.setItem('abMethod', 'SUB');
		}
	}
	if (bOppStm <= 0) {
		sessionStorage.setItem('abWinner', 1);
		sessionStorage.setItem('abMethod', 'TKO');
	}
	return hit;
}

function getHitB(att) {
	let bOppStr = parseInt(sessionStorage.getItem('bOppStrength'));
	let bOppSpd = parseInt(sessionStorage.getItem('bOppSpeed'));
	let bOppStm = parseInt(sessionStorage.getItem('bOppStamina'));
	let bOppPunching = parseInt(sessionStorage.getItem('bOppPunching'));
	let bOppKicking = parseInt(sessionStorage.getItem('bOppKicking'));
	let bOppWrestling = parseInt(sessionStorage.getItem('bOppWrestling'));
	let bOppGrappling = parseInt(sessionStorage.getItem('bOppGrappling'));
	let bOppClinch = parseInt(sessionStorage.getItem('bOppClinch'));
	let bMmaBuff = parseInt(sessionStorage.getItem('bMmaBuff'));
	let bBladedBuff = parseInt(sessionStorage.getItem('bBladedBuff'));
	let bThaiBuff = parseInt(sessionStorage.getItem('bThaiBuff'));
	let bLongBuff = parseInt(sessionStorage.getItem('bLongBuff'));
	let bLongNerf = parseInt(sessionStorage.getItem('bLongNerf'));
	let bHighBuff = parseInt(sessionStorage.getItem('bHighBuff'));
	let bHighNerf = parseInt(sessionStorage.getItem('bHighNerf'));
	let bLowBuff = parseInt(sessionStorage.getItem('bLowBuff'));
	let bLowNerf = parseInt(sessionStorage.getItem('bLowNerf'));
	let bReactNerf = parseInt(sessionStorage.getItem('bReactNerf'));

	let aOppStr = parseInt(sessionStorage.getItem('aOppStrength'));
	let aOppSpd = parseInt(sessionStorage.getItem('aOppSpeed'));
	let aOppStm = parseInt(sessionStorage.getItem('aOppStamina'));
	let aOppPunching = parseInt(sessionStorage.getItem('aOppPunching'));
	let aOppKicking = parseInt(sessionStorage.getItem('aOppKicking'));
	let aOppWrestling = parseInt(sessionStorage.getItem('aOppWrestling'));
	let aOppGrappling = parseInt(sessionStorage.getItem('aOppGrappling'));
	let aOppClinch = parseInt(sessionStorage.getItem('aOppClinch'));
	let aMmaBuff = parseInt(sessionStorage.getItem('aMmaBuff'));
	let aBladedBuff = parseInt(sessionStorage.getItem('aBladedBuff'));
	let aThaiBuff = parseInt(sessionStorage.getItem('aThaiBuff'));
	let aLongBuff = parseInt(sessionStorage.getItem('aLongBuff'));
	let aLongNerf = parseInt(sessionStorage.getItem('aLongNerf'));
	let aHighBuff = parseInt(sessionStorage.getItem('aHighBuff'));
	let aHighNerf = parseInt(sessionStorage.getItem('aHighNerf'));
	let aLowBuff = parseInt(sessionStorage.getItem('aLowBuff'));
	let aLowNerf = parseInt(sessionStorage.getItem('aLowNerf'));
	let aReactNerf = parseInt(sessionStorage.getItem('aReactNerf'));

	let per = 0;
	let hit = 0;
	per = (1.5 * (bOppPunching) - 1.5 * (aOppPunching)) + (.8 * (bOppSpd - aOppSpd));
	if (att == 'STICK') {
		for (let i = 0; i < 2; ++i) {
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 70 + (Math.pow(per, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 70 - (Math.pow(per1, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'BRAWL'){
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'POWER'){
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 20 + (Math.pow(per, .45)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 20 - (Math.pow(per1, .45)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'PRESSURE'){
		for (let i = 0; i < 8; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'BLITZ'){
		let bPer = ((bOppSpd * 2) - (aOppSpd + aOppPunching));
		for (let i = 0; i < 4; ++i){
			let ran1 = Random();
			if (bPer >= 0){
				if (ran1 <= 30 + (Math.pow(bPer, .63)) - aBladedBuff - aHighBuff + aLowNerf + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let bPer1 = Math.abs(bPer);
				if (ran1 <= 30 - (Math.pow(bPer1, .63)) - aBladedBuff - aHighBuff + aLowNerf + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
	}
	else if (att == 'LOW KICK'){
		let kPer = (1.5 * (bOppKicking) - 1.5 * (aOppKicking)) + (.8 * (bOppSpd - aOppSpd));
		let ran1 = Random();
		if (kPer >= 0){
			if (ran1 <= 70 + (Math.pow(kPer, .63)) + bThaiBuff - aThaiBuff - aLongBuff + getFeintedA()) {
				++hit;
			}
		}
		else {
			let per1 = Math.abs(kPer);
			if (ran1 <= 70 - (Math.pow(per1, .63)) + bThaiBuff - aThaiBuff - aLongBuff + getFeintedA()) {
				++hit;
			}
		}
	}
	else if (att == 'FEINT') {
		let fPer = parseInt(25 + Math.pow(bOppPunching, .9));
		let ran = Random();
		if (ran <= fPer) {
			++hit;
			sessionStorage.setItem('feintedA', 1);
		}
	}
	else if (att == 'TAKEDOWN') {
		let tPer = parseInt(35 + Math.pow(bOppWrestling, .75) - Math.pow(aOppWrestling, .75) + getFeintedA() + bMmaBuff - aMmaBuff - aLowBuff + aHighNerf + (.8 * (bOppSpd - aOppSpd)) + (.8 * (bOppStr - aOppStr)));
		let ran = Random();
		if (tPer < 0) {
		}
		else if (ran <= tPer) {
			++hit;
			sessionStorage.setItem('abPos', 3);
		}
	}
	else if (att == 'CLINCH'){
		for (let i = 0; i < 2; ++i){
			let ran1 = Random();
			if (per >= 0){
				if (ran1 <= 30 + (Math.pow(per, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
			else {
				let per1 = Math.abs(per);
				if (ran1 <= 30 - (Math.pow(per1, .63)) + bBladedBuff - aBladedBuff - aHighBuff + aLongNerf + getFeintedA()) {
					++hit;
				}
			}
		}
		sessionStorage.setItem('abPos', 1);
	}
	else if (att == 'KNEE') {
		let cPer = parseInt(60 + Math.pow(bOppClinch, .9) - Math.pow(aOppClinch, .9) + (.8 * (bOppSpd - aOppSpd)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
			}
		}
	}
	else if (att == 'ELBOW') {
		let cPer = parseInt(40 + Math.pow(bOppClinch, .9) - Math.pow(aOppClinch, .9) + (.8 * (bOppSpd - aOppSpd)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
			}
		}
	}
	else if (att == 'EXIT') {
		let cPer = parseInt(35 + Math.pow(bOppClinch, .9) - Math.pow(aOppClinch, .9) + (.8 * (bOppSpd - aOppSpd)) + (.8 * (bOppStr - aOppStr)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
				sessionStorage.setItem('abPos', 0);
			}
		}
	}
	else if (att == 'TRIP') {
		let cPer = parseInt(25 + Math.pow(bOppClinch, .9) - Math.pow(aOppClinch, .9) + (.8 * (bOppSpd - aOppSpd)) + (.8 * (bOppStr - aOppStr)));
		let ran1 = Random();
		if (cPer >= 0){
			if (ran1 <= cPer) {
				++hit;
				sessionStorage.setItem('abPos', 3);
			}
		}
	}
	else if (att == 'GET UP') {
		sessionStorage.setItem('abPos', 0);
	}
	else if (att == 'G&P') {
		for (let i = 0; i < 4; ++i) {
			let ran1 = Random();
			if (ran1 <= 80) {
				++hit;
			}
		}
	}
	else if (att == 'SUBMISSIONtop') {
		let sPer = parseInt(15 + Math.pow(bOppGrappling, .65) - Math.pow(aOppGrappling, .65));
		let ran1 = Random();
		if (sPer <= 0) {
		}
		else if (ran1 <= sPer) {
			++hit;
			sessionStorage.setItem('abWinner', 2);
			sessionStorage.setItem('abMethod', 'SUB');
		}
	}
	else if (att == 'ESCAPE') {
		let ePer = 5 + parseInt(30 + Math.pow(bOppWrestling, .75) - Math.pow(aOppWrestling, .75) + (.8 * (bOppSpd - aOppSpd)) + (.8 * (bOppStr - aOppStr)));
		let ran = Random();
		if (ePer < 0) {
		}
		else if (ran <= ePer) {
			++hit;
			sessionStorage.setItem('abPos', 0)
		}
	}
	else if (att == 'REVERSE') {
		let ePer = parseInt(20 + Math.pow(bOppWrestling, .6) - Math.pow(aOppWrestling, .6) + (.8 * (bOppSpd - aOppSpd)) + (.8 * (bOppStr - aOppStr)));
		let ran = Random();
		if (ePer < 0) {
		}
		else if (ran <= ePer) {
			++hit;
			sessionStorage.setItem('abPos', 3);
		}
	}
	else if (att == 'SUBMISSIONbot') {
		let sPer = parseInt(10 + Math.pow(bOppGrappling, .55) - Math.pow(aOppGrappling, .55));
		let ran1 = Random();
		if (sPer <= 0) {
		}
		else if (ran1 <= sPer) {
			++hit;
			sessionStorage.setItem('abWinner', 2);
			sessionStorage.setItem('abMethod', 'SUB');
		}
	}
	if (aOppStm <= 0) {
		sessionStorage.setItem('abWinner', 2);
		sessionStorage.setItem('abMethod', 'TKO');
	}
	return hit;
}

function getDamageA(hit, att) {
    let aOppStr = parseInt(sessionStorage.getItem('aOppStrength'));
    let aBladedBuff = parseInt(sessionStorage.getItem('aBladedBuff'));
    let aThaiBuff = parseInt(sessionStorage.getItem('aThaiBuff'));
    let aReactNerf = parseInt(sessionStorage.getItem('aReactNerf'));

    let bOppStr = parseInt(sessionStorage.getItem('bOppStrength'));
    let bBladedBuff = parseInt(sessionStorage.getItem('bBladedBuff'));
    let bThaiBuff = parseInt(sessionStorage.getItem('bThaiBuff'));
    let bReactNerf = parseInt(sessionStorage.getItem('bReactNerf'));

    let dmg = 0;
    let kd = 0;

    if (att == 'POWER'){
        let koChance = aOppStr / 12;
        let kdChance = (aOppStr / 6) + koChance;
        for (let i = 0; i < hit; ++i){
            let ran1 = Random();
            if (ran1 <= koChance) {
                dmg += 1000;
                kd = 2;
            }
            else if (ran1 <= kdChance) {
                dmg += 200;
                kd = 1;
            }
            else {
                dmg += ((aOppStr / 2.5) + 20 + aBladedBuff + bReactNerf);
            }
        }
    }
    else if (att == 'STICK'){
        dmg = hit * (((aOppStr - 50) / 10) + 10 + aBladedBuff + bReactNerf);
    }
    else if (att == 'LOW KICK') {
        dmg = hit * (((aOppStr - 50) / 10) + 10 + aThaiBuff + bReactNerf);
        if (hit > 0) {
            sessionStorage.setItem('bOppSpeed', parseInt(sessionStorage.getItem('bOppSpeed')) - 5);
        }
    }
    else if (att == 'KNEE') {
        dmg = hit * (((aOppStr - 50) / 10) + 15);
    }
    else if (att == 'ELBOW') {
        dmg = hit * (((aOppStr - 50) / 5) + 30);
    }
    else if (att == 'G&P') {
        let koChance = aOppStr / 20;
        let ran1 = Random();
        for (let i = 0; i < hit; ++i){
            if (ran1 <= koChance) {
                dmg += 1000;
            }
            else {
                dmg += (((aOppStr - 50) / 10) + 10);
            }
        }
    }
    else if (att == 'x') {
        dmg = '';
    }
    else {
        let koChance = aOppStr / 35;
        let kdChance = (aOppStr / 12) + koChance;
        for (let i = 0; i < hit; ++i){
            let ran1 = Random();
            if (ran1 <= koChance) {
                dmg += 1000;
                kd = 2;
            }
            else if (ran1 <= kdChance) {
                dmg += 200;
                kd = 1;
            }
            else {
                dmg += (((aOppStr - 50) / 5) + 20 + aBladedBuff + bReactNerf);
            }
        }
    }

    if (dmg != '') {
        sessionStorage.setItem('bOppStatus', parseInt(sessionStorage.getItem('bOppStatus')) - dmg);
    }
    sessionStorage.setItem('feintedB', 0);

    if (!isNaN(dmg)) {
        sessionStorage.setItem('totalDmgA', parseInt(sessionStorage.getItem('totalDmgA')) + dmg)
    }

    if (kd == 1) {
        if (sessionStorage.getItem('bOppStatus') <= 0) {
            sessionStorage.setItem('abWinner', 1);
            sessionStorage.setItem('abMethod', 'KO');
            return dmg;
        }
        else {
            sessionStorage.setItem('abPos', 2);
            return dmg;
        }
    }
    else if (kd == 2) {
        sessionStorage.setItem('abWinner', 1);
        sessionStorage.setItem('abMethod', 'KO');
        return dmg;
    }
    else if (sessionStorage.getItem('bOppStatus') <= 0) {
        sessionStorage.setItem('abWinner', 1);
        sessionStorage.setItem('abMethod', 'TKO');
        return dmg;
    }
    else if (sessionStorage.getItem('bOppStamina') <= 0) {
        sessionStorage.setItem('abWinner', 1);
        sessionStorage.setItem('abMethod', 'TKO');
        return dmg;
    }
    return dmg;
}

function getDamageB(hit, att) {
    let bOppStr = parseInt(sessionStorage.getItem('bOppStrength'));
    let bBladedBuff = parseInt(sessionStorage.getItem('bBladedBuff'));
    let bThaiBuff = parseInt(sessionStorage.getItem('bThaiBuff'));
    let bReactNerf = parseInt(sessionStorage.getItem('bReactNerf'));

    let aOppStr = parseInt(sessionStorage.getItem('aOppStrength'));
    let aBladedBuff = parseInt(sessionStorage.getItem('aBladedBuff'));
    let aThaiBuff = parseInt(sessionStorage.getItem('aThaiBuff'));
    let aReactNerf = parseInt(sessionStorage.getItem('aReactNerf'));

    let dmg = 0;
    let kd = 0;

    if (att == 'POWER'){
        let koChance = bOppStr / 12;
        let kdChance = (bOppStr / 6) + koChance;
        for (let i = 0; i < hit; ++i){
            let ran1 = Random();
            if (ran1 <= koChance) {
                dmg += 1000;
                kd = 2;
            }
            else if (ran1 <= kdChance) {
                dmg += 200;
                kd = 1;
            }
            else {
                dmg += ((bOppStr / 2.5) + 20 + bBladedBuff + aReactNerf);
            }
        }
    }
    else if (att == 'STICK'){
        dmg = hit * (((bOppStr - 50) / 10) + 10 + bBladedBuff + aReactNerf);
    }
    else if (att == 'LOW KICK') {
        dmg = hit * (((bOppStr - 50) / 10) + 10 + bThaiBuff + aReactNerf);
        if (hit > 0) {
            sessionStorage.setItem('aOppSpeed', parseInt(sessionStorage.getItem('aOppSpeed')) - 5);
        }
    }
    else if (att == 'KNEE') {
        dmg = hit * (((bOppStr - 50) / 10) + 15);
    }
    else if (att == 'ELBOW') {
        dmg = hit * (((bOppStr - 50) / 5) + 30);
    }
    else if (att == 'G&P') {
        let koChance = bOppStr / 20;
        let ran1 = Random();
        for (let i = 0; i < hit; ++i){
            if (ran1 <= koChance) {
                dmg += 1000;
            }
            else {
                dmg += (((bOppStr - 50) / 10) + 10);
            }
        }
    }
    else if (att == 'x') {
        dmg = '';
    }
    else {
        let koChance = bOppStr / 35;
        let kdChance = (bOppStr / 12) + koChance;
        for (let i = 0; i < hit; ++i){
            let ran1 = Random();
            if (ran1 <= koChance) {
                dmg += 1000;
                kd = 2;
            }
            else if (ran1 <= kdChance) {
                dmg += 200;
                kd = 1;
            }
            else {
                dmg += (((bOppStr - 50) / 5) + 20 + bBladedBuff + aReactNerf);
            }
        }
    }

    if (dmg != '') {
        sessionStorage.setItem('aOppStatus', parseInt(sessionStorage.getItem('aOppStatus')) - dmg);
    }
    sessionStorage.setItem('feintedA', 0);

    if (!isNaN(dmg)) {
        sessionStorage.setItem('totalDmgB', parseInt(sessionStorage.getItem('totalDmgB')) + dmg)
    }

    if (kd == 1) {
        if (sessionStorage.getItem('aOppStatus') <= 0) {
            sessionStorage.setItem('abWinner', 2);
            sessionStorage.setItem('abMethod', 'KO');
            return dmg;
        }
        else {
            sessionStorage.setItem('abPos', 3);
            return dmg;
        }
    }
    else if (kd == 2) {
        sessionStorage.setItem('abWinner', 2);
        sessionStorage.setItem('abMethod', 'KO');
        return dmg;
    }
    else if (sessionStorage.getItem('aOppStatus') <= 0) {
        sessionStorage.setItem('abWinner', 2);
        sessionStorage.setItem('abMethod', 'TKO');
        return dmg;
    }
    else if (sessionStorage.getItem('aOppStamina') <= 0) {
        sessionStorage.setItem('abWinner', 2);
        sessionStorage.setItem('abMethod', 'TKO');
        return dmg;
    }
    return dmg;
}

function getFeintedA() {
    if (sessionStorage.getItem('feintedA') == 1) {
        return 15;
    }
    else {
        return 0;
    }
}

function getFeintedB() {
    if (sessionStorage.getItem('feintedB') == 1) {
        return 15;
    }
    else {
        return 0;
    }
}

function getHitMax(att) {
    if (att == 'PRESSURE') {
        return 8;
    }
    else if (att == 'LOW KICK' || att == 'TAKEDOWN') {
        return 1;
    }
    else if (att == 'CLINCH') {
        return 2;
    }
    else {
        return 4;
    }
}

function counterCalcA(re, att) {
    let per = Math.pow(parseInt(sessionStorage.getItem('bOppPunching')), .75);
    let ctr = 0;

    if (parseInt(sessionStorage.getItem('bReactNerf')) == 0){
        return 0;
    }
    else {
        if (att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
            for (let i = 0; i < re; ++i) {
                let ran = Random();
                if (ran <= per) {
                    ++ctr;
                }
            }
        }
        if (ctr > 0) {
            sessionStorage.setItem('bOppStamina', parseInt(sessionStorage.getItem('bOppStamina')) - (ctr + 2));
        }
        return ctr;
    }
}

function counterCalcB(re, att) {
    let per = Math.pow(parseInt(sessionStorage.getItem('aOppPunching')), .75);
    let ctr = 0;

    if (parseInt(sessionStorage.getItem('aReactNerf')) == 0){
        return 0;
    }
    else {
        if (att == 'BRAWL' || att == 'PRESSURE' || att == 'POWER' || att == 'LOW KICK' || att == 'CLINCH' || att == 'TAKEDOWN') {
            for (let i = 0; i < re; ++i) {
                let ran = Random();
                if (ran <= per) {
                    ++ctr;
                }
            }
        }
        if (ctr > 0) {
            sessionStorage.setItem('aOppStamina', parseInt(sessionStorage.getItem('aOppStamina')) - (ctr + 2));
        }
        return ctr;
    }
}

export default AutoFight;