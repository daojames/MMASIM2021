export function randomSchedule() {
    sessionStorage.setItem('newSchedule', 0);
    let data = sessionStorage.getItem('player');
    data = JSON.parse(data);
    let first = data.first;
    let weight = null;

    if (data.weight == 'FLYWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'BANTAMWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'FEATHERWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'LIGHTWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'WELTERWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'MIDDLEWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'LIGHT HEAVYWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'HEAVYWEIGHT'){
        weight = 0;
    }
    else if (data.weight == 'WSTRAWWEIGHT'){
        weight = 1;
    }
    else if (data.weight == 'WFLYWEIGHT'){
        weight = 1;
    }
    else if (data.weight == 'WBANTAMWEIGHT'){
        weight = 1;
    }

    let nr1 = JSON.parse(sessionStorage.getItem('nr1'));
    let nr2 = JSON.parse(sessionStorage.getItem('nr2'));
    let nr3 = JSON.parse(sessionStorage.getItem('nr3'));
    let nr4 = JSON.parse(sessionStorage.getItem('nr4'));
    let nr5 = JSON.parse(sessionStorage.getItem('nr5'));
    let nr6 = JSON.parse(sessionStorage.getItem('nr6'));
    let nr7 = JSON.parse(sessionStorage.getItem('nr7'));
    let nr8 = JSON.parse(sessionStorage.getItem('nr8'));
    let nr9 = JSON.parse(sessionStorage.getItem('nr9'));
    let nr10 = JSON.parse(sessionStorage.getItem('nr10'));
    let nr11 = JSON.parse(sessionStorage.getItem('nr11'));
    let nr12 = JSON.parse(sessionStorage.getItem('nr12'));
    let nr13 = JSON.parse(sessionStorage.getItem('nr13'));
    let nr14 = JSON.parse(sessionStorage.getItem('nr14'));
    let nr15 = JSON.parse(sessionStorage.getItem('nr15'));
    let nr16 = JSON.parse(sessionStorage.getItem('nr16'));
    let nr17 = JSON.parse(sessionStorage.getItem('nr17'));
    let nr18 = JSON.parse(sessionStorage.getItem('nr18'));
    let nr19 = JSON.parse(sessionStorage.getItem('nr19'));
    let nr20 = JSON.parse(sessionStorage.getItem('nr20'));
    let nr21 = JSON.parse(sessionStorage.getItem('nr21'));
    let nr22 = JSON.parse(sessionStorage.getItem('nr22'));
    let nr23 = JSON.parse(sessionStorage.getItem('nr23'));
    let nr24 = JSON.parse(sessionStorage.getItem('nr24'));

    let nrf1 = JSON.parse(sessionStorage.getItem('nrf1'));
    let nrf2 = JSON.parse(sessionStorage.getItem('nrf2'));
    let nrf3 = JSON.parse(sessionStorage.getItem('nrf3'));
    let nrf4 = JSON.parse(sessionStorage.getItem('nrf4'));
    let nrf5 = JSON.parse(sessionStorage.getItem('nrf5'));
    let nrf6 = JSON.parse(sessionStorage.getItem('nrf6'));
    let nrf7 = JSON.parse(sessionStorage.getItem('nrf7'));
    let nrf8 = JSON.parse(sessionStorage.getItem('nrf8'));
    let nrf9 = JSON.parse(sessionStorage.getItem('nrf9'));
    let nrf10 = JSON.parse(sessionStorage.getItem('nrf10'));
    let nrf11 = JSON.parse(sessionStorage.getItem('nrf11'));
    let nrf12 = JSON.parse(sessionStorage.getItem('nrf12'));

    const array1 = [nr1.first + ' ' + nr1.last, nr2.first + ' ' + nr2.last, nr3.first + ' ' + nr3.last, nr4.first + ' ' + nr4.last, nr5.first + ' ' + nr5.last, nr6.first + ' ' + nr6.last, nr7.first + ' ' + nr7.last, nr8.first + ' ' + nr8.last, nr9.first + ' ' + nr9.last, nr10.first + ' ' + nr10.last, nr11.first + ' ' + nr11.last, nr12.first + ' ' + nr12.last, nr13.first + ' ' + nr13.last, nr14.first + ' ' + nr14.last, nr15.first + ' ' + nr15.last, nr16.first + ' ' + nr16.last, nr17.first + ' ' + nr17.last, nr18.first + ' ' + nr18.last, nr19.first + ' ' + nr19.last, nr20.first + ' ' + nr20.last, nr21.first + ' ' + nr21.last, nr22.first + ' ' + nr22.last, nr23.first + ' ' + nr23.last, nr24.first + ' ' + nr24.last];
    const array2 = [nrf1.first + ' ' + nrf1.last, nrf2.first + ' ' + nrf2.last, nrf3.first + ' ' + nrf3.last, nrf4.first + ' ' + nrf4.last, nrf5.first + ' ' + nrf5.last, nrf6.first + ' ' + nrf6.last, nrf7.first + ' ' + nrf7.last, nrf8.first + ' ' + nrf8.last, nrf9.first + ' ' + nrf9.last, nrf10.first + ' ' + nrf10.last, nrf11.first + ' ' + nrf11.last, nrf12.first + ' ' + nrf12.last];
    let dup1 = null;
    let dup2 = null;
    const unv1 = new Array();
    const unv2 = new Array();
    let full1 = false;
    let full2 = false;
    let name = data.first + ' ' + data.last;

    // Men's
    if (weight == 0) {
        // Find player name duplicate
        for (let i = 0; i < 24; ++i) {
            if (name == array1[i]) {
                dup1 = i + 1;
                sessionStorage.setItem('playerNR', dup1);
                unv1.push(dup1);
                while(true) {
                    let ran1 = Math.floor(Math.random() * (25 - 1) + 1);
                    if (ran1 != dup1) {
                        unv1.push(ran1);
                        break;
                    }
                }
            }
        }
        // If no duplicate, pick spot for player and opponent
        if (dup1 == null) {
            let ran1 = Math.floor(Math.random() * (25 - 1) + 1);
            sessionStorage.setItem('playerNR', ran1);
            unv1.push(ran1);

            while(true){
                let ran2 = Math.floor(Math.random() * (25 - 1) + 1);
                if (ran2 != ran1) {
                    unv1.push(ran2);
                    break;
                }
            }
        }
    }
    // Fill up schedule spots
    while(!full1) {
        let ran1 = Math.floor(Math.random() * (25 - 1) + 1);
        let ran2 = Math.floor(Math.random() * (25 - 1) + 1);

        if ((ran1 != ran2) && !(unv1.includes(ran1)) && !(unv1.includes(ran2))) {
            unv1.push(ran1);
            unv1.push(ran2);
            if (unv1.length >= 24) {
                full1 = true;
            }
        }
    }
    sessionStorage.setItem('pflm', unv1);

    // Women's
    if (weight == 1) {
        // Find player name duplicate
        for (let i = 0; i < 12; ++i) {
            if (name == array2[i]) {
                dup2 = i + 1;
                sessionStorage.setItem('playerNRF', dup2);
                unv2.push(dup2);
                while(true) {
                    let ran1 = Math.floor(Math.random() * (13 - 1) + 1);
                    if (ran1 != dup2) {
                        unv2.push(ran1);
                        break;
                    }
                }
            }
        }
        // If no duplicate, pick spot for player and opponent
        if (dup2 == null) {
            let ran1 = Math.floor(Math.random() * (13 - 1) + 1);
            sessionStorage.setItem('playerNRF', ran1);
            unv2.push(ran1);

            while(true){
                let ran2 = Math.floor(Math.random() * (13 - 1) + 1);
                if (ran2 != ran1) {
                    unv2.push(ran2);
                    break;
                }
            }
        }
    }
    // Fill up schedule spots
    while(!full2) {
        let ran1 = Math.floor(Math.random() * (13 - 1) + 1);
        let ran2 = Math.floor(Math.random() * (13 - 1) + 1);

        if (ran1 != ran2 && !unv2.includes(ran1) && !unv2.includes(ran2)) {
            unv2.push(ran1);
            unv2.push(ran2);
            if (unv2.length >= 12) {
                full2 = true;
            }
        }
    }
    sessionStorage.setItem('pflf', unv2);

    // Generate array of numbers 1 - 24 in random order for men's schedule
    var arr = [];
    if (data.weight != 'WSTRAWWEIGHT' && data.weight != 'WFLYWEIGHT' && data.weight != 'WBANTAMWEIGHT') arr.push(unv1[0]);
    while(arr.length < 24) {
        var r = Math.floor(Math.random() * 24) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    let arrayM = [];
    for (let i = 1; i < 25; ++i) {
        if (i == parseInt(sessionStorage.getItem('playerNR'))) {
            arrayM.push(JSON.parse(sessionStorage.getItem('nr0')));
        }
        else {
            arrayM.push(JSON.parse(sessionStorage.getItem('nr' + i)));
        }
    }
    sessionStorage.setItem('standingsM', JSON.stringify(arrayM));
    console.log(arr);

    // Week 1
    sessionStorage.setItem('w1f1p1', arr[0]);
    sessionStorage.setItem('w1f1p2', arr[12]);
    sessionStorage.setItem('w1f2p1', arr[1]);
    sessionStorage.setItem('w1f2p2', arr[13]);
    sessionStorage.setItem('w1f3p1', arr[2]);
    sessionStorage.setItem('w1f3p2', arr[14]);
    sessionStorage.setItem('w1f4p1', arr[3]);
    sessionStorage.setItem('w1f4p2', arr[15]);
    sessionStorage.setItem('w1f5p1', arr[4]);
    sessionStorage.setItem('w1f5p2', arr[16]);
    sessionStorage.setItem('w1f6p1', arr[5]);
    sessionStorage.setItem('w1f6p2', arr[17]);
    sessionStorage.setItem('w1f7p1', arr[6]);
    sessionStorage.setItem('w1f7p2', arr[18]);
    sessionStorage.setItem('w1f8p1', arr[7]);
    sessionStorage.setItem('w1f8p2', arr[19]);
    sessionStorage.setItem('w1f9p1', arr[8]);
    sessionStorage.setItem('w1f9p2', arr[20]);
    sessionStorage.setItem('w1f10p1', arr[9]);
    sessionStorage.setItem('w1f10p2', arr[21]);
    sessionStorage.setItem('w1f11p1', arr[10]);
    sessionStorage.setItem('w1f11p2', arr[22]);
    sessionStorage.setItem('w1f12p1', arr[11]);
    sessionStorage.setItem('w1f12p2', arr[23]);

    // Week 2
    sessionStorage.setItem('w2f1p1', arr[0]);
    sessionStorage.setItem('w2f1p2', arr[13]);
    sessionStorage.setItem('w2f2p1', arr[1]);
    sessionStorage.setItem('w2f2p2', arr[14]);
    sessionStorage.setItem('w2f3p1', arr[2]);
    sessionStorage.setItem('w2f3p2', arr[15]);
    sessionStorage.setItem('w2f4p1', arr[3]);
    sessionStorage.setItem('w2f4p2', arr[16]);
    sessionStorage.setItem('w2f5p1', arr[4]);
    sessionStorage.setItem('w2f5p2', arr[17]);
    sessionStorage.setItem('w2f6p1', arr[5]);
    sessionStorage.setItem('w2f6p2', arr[18]);
    sessionStorage.setItem('w2f7p1', arr[6]);
    sessionStorage.setItem('w2f7p2', arr[19]);
    sessionStorage.setItem('w2f8p1', arr[7]);
    sessionStorage.setItem('w2f8p2', arr[20]);
    sessionStorage.setItem('w2f9p1', arr[8]);
    sessionStorage.setItem('w2f9p2', arr[21]);
    sessionStorage.setItem('w2f10p1', arr[9]);
    sessionStorage.setItem('w2f10p2', arr[22]);
    sessionStorage.setItem('w2f11p1', arr[10]);
    sessionStorage.setItem('w2f11p2', arr[23]);
    sessionStorage.setItem('w2f12p1', arr[11]);
    sessionStorage.setItem('w2f12p2', arr[12]);

    // Week 3
    sessionStorage.setItem('w3f1p1', arr[0]);
    sessionStorage.setItem('w3f1p2', arr[14]);
    sessionStorage.setItem('w3f2p1', arr[1]);
    sessionStorage.setItem('w3f2p2', arr[15]);
    sessionStorage.setItem('w3f3p1', arr[2]);
    sessionStorage.setItem('w3f3p2', arr[16]);
    sessionStorage.setItem('w3f4p1', arr[3]);
    sessionStorage.setItem('w3f4p2', arr[17]);
    sessionStorage.setItem('w3f5p1', arr[4]);
    sessionStorage.setItem('w3f5p2', arr[18]);
    sessionStorage.setItem('w3f6p1', arr[5]);
    sessionStorage.setItem('w3f6p2', arr[19]);
    sessionStorage.setItem('w3f7p1', arr[6]);
    sessionStorage.setItem('w3f7p2', arr[20]);
    sessionStorage.setItem('w3f8p1', arr[7]);
    sessionStorage.setItem('w3f8p2', arr[21]);
    sessionStorage.setItem('w3f9p1', arr[8]);
    sessionStorage.setItem('w3f9p2', arr[22]);
    sessionStorage.setItem('w3f10p1', arr[9]);
    sessionStorage.setItem('w3f10p2', arr[23]);
    sessionStorage.setItem('w3f11p1', arr[10]);
    sessionStorage.setItem('w3f11p2', arr[12]);
    sessionStorage.setItem('w3f12p1', arr[11]);
    sessionStorage.setItem('w3f12p2', arr[13]);

    // Week 4
    sessionStorage.setItem('w4f1p1', arr[0]);
    sessionStorage.setItem('w4f1p2', arr[15]);
    sessionStorage.setItem('w4f2p1', arr[1]);
    sessionStorage.setItem('w4f2p2', arr[16]);
    sessionStorage.setItem('w4f3p1', arr[2]);
    sessionStorage.setItem('w4f3p2', arr[17]);
    sessionStorage.setItem('w4f4p1', arr[3]);
    sessionStorage.setItem('w4f4p2', arr[18]);
    sessionStorage.setItem('w4f5p1', arr[4]);
    sessionStorage.setItem('w4f5p2', arr[19]);
    sessionStorage.setItem('w4f6p1', arr[5]);
    sessionStorage.setItem('w4f6p2', arr[20]);
    sessionStorage.setItem('w4f7p1', arr[6]);
    sessionStorage.setItem('w4f7p2', arr[21]);
    sessionStorage.setItem('w4f8p1', arr[7]);
    sessionStorage.setItem('w4f8p2', arr[22]);
    sessionStorage.setItem('w4f9p1', arr[8]);
    sessionStorage.setItem('w4f9p2', arr[23]);
    sessionStorage.setItem('w4f10p1', arr[9]);
    sessionStorage.setItem('w4f10p2', arr[12]);
    sessionStorage.setItem('w4f11p1', arr[10]);
    sessionStorage.setItem('w4f11p2', arr[13]);
    sessionStorage.setItem('w4f12p1', arr[11]);
    sessionStorage.setItem('w4f12p2', arr[14]);

    // Week 5
    sessionStorage.setItem('w5f1p1', arr[0]);
    sessionStorage.setItem('w5f1p2', arr[16]);
    sessionStorage.setItem('w5f2p1', arr[1]);
    sessionStorage.setItem('w5f2p2', arr[17]);
    sessionStorage.setItem('w5f3p1', arr[2]);
    sessionStorage.setItem('w5f3p2', arr[18]);
    sessionStorage.setItem('w5f4p1', arr[3]);
    sessionStorage.setItem('w5f4p2', arr[19]);
    sessionStorage.setItem('w5f5p1', arr[4]);
    sessionStorage.setItem('w5f5p2', arr[20]);
    sessionStorage.setItem('w5f6p1', arr[5]);
    sessionStorage.setItem('w5f6p2', arr[21]);
    sessionStorage.setItem('w5f7p1', arr[6]);
    sessionStorage.setItem('w5f7p2', arr[22]);
    sessionStorage.setItem('w5f8p1', arr[7]);
    sessionStorage.setItem('w5f8p2', arr[23]);
    sessionStorage.setItem('w5f9p1', arr[8]);
    sessionStorage.setItem('w5f9p2', arr[12]);
    sessionStorage.setItem('w5f10p1', arr[9]);
    sessionStorage.setItem('w5f10p2', arr[13]);
    sessionStorage.setItem('w5f11p1', arr[10]);
    sessionStorage.setItem('w5f11p2', arr[14]);
    sessionStorage.setItem('w5f12p1', arr[11]);
    sessionStorage.setItem('w5f12p2', arr[15]);

    // Week 6
    sessionStorage.setItem('w6f1p1', arr[0]);
    sessionStorage.setItem('w6f1p2', arr[17]);
    sessionStorage.setItem('w6f2p1', arr[1]);
    sessionStorage.setItem('w6f2p2', arr[18]);
    sessionStorage.setItem('w6f3p1', arr[2]);
    sessionStorage.setItem('w6f3p2', arr[19]);
    sessionStorage.setItem('w6f4p1', arr[3]);
    sessionStorage.setItem('w6f4p2', arr[20]);
    sessionStorage.setItem('w6f5p1', arr[4]);
    sessionStorage.setItem('w6f5p2', arr[21]);
    sessionStorage.setItem('w6f6p1', arr[5]);
    sessionStorage.setItem('w6f6p2', arr[22]);
    sessionStorage.setItem('w6f7p1', arr[6]);
    sessionStorage.setItem('w6f7p2', arr[23]);
    sessionStorage.setItem('w6f8p1', arr[7]);
    sessionStorage.setItem('w6f8p2', arr[12]);
    sessionStorage.setItem('w6f9p1', arr[8]);
    sessionStorage.setItem('w6f9p2', arr[13]);
    sessionStorage.setItem('w6f10p1', arr[9]);
    sessionStorage.setItem('w6f10p2', arr[14]);
    sessionStorage.setItem('w6f11p1', arr[10]);
    sessionStorage.setItem('w6f11p2', arr[15]);
    sessionStorage.setItem('w6f12p1', arr[11]);
    sessionStorage.setItem('w6f12p2', arr[16]);

    // Week 7
    sessionStorage.setItem('w7f1p1', arr[0]);
    sessionStorage.setItem('w7f1p2', arr[18]);
    sessionStorage.setItem('w7f2p1', arr[1]);
    sessionStorage.setItem('w7f2p2', arr[19]);
    sessionStorage.setItem('w7f3p1', arr[2]);
    sessionStorage.setItem('w7f3p2', arr[20]);
    sessionStorage.setItem('w7f4p1', arr[3]);
    sessionStorage.setItem('w7f4p2', arr[21]);
    sessionStorage.setItem('w7f5p1', arr[4]);
    sessionStorage.setItem('w7f5p2', arr[22]);
    sessionStorage.setItem('w7f6p1', arr[5]);
    sessionStorage.setItem('w7f6p2', arr[23]);
    sessionStorage.setItem('w7f7p1', arr[6]);
    sessionStorage.setItem('w7f7p2', arr[12]);
    sessionStorage.setItem('w7f8p1', arr[7]);
    sessionStorage.setItem('w7f8p2', arr[13]);
    sessionStorage.setItem('w7f9p1', arr[8]);
    sessionStorage.setItem('w7f9p2', arr[14]);
    sessionStorage.setItem('w7f10p1', arr[9]);
    sessionStorage.setItem('w7f10p2', arr[15]);
    sessionStorage.setItem('w7f11p1', arr[10]);
    sessionStorage.setItem('w7f11p2', arr[16]);
    sessionStorage.setItem('w7f12p1', arr[11]);
    sessionStorage.setItem('w7f12p2', arr[17]);

    // Week 8
    sessionStorage.setItem('w8f1p1', arr[0]);
    sessionStorage.setItem('w8f1p2', arr[19]);
    sessionStorage.setItem('w8f2p1', arr[1]);
    sessionStorage.setItem('w8f2p2', arr[20]);
    sessionStorage.setItem('w8f3p1', arr[2]);
    sessionStorage.setItem('w8f3p2', arr[21]);
    sessionStorage.setItem('w8f4p1', arr[3]);
    sessionStorage.setItem('w8f4p2', arr[22]);
    sessionStorage.setItem('w8f5p1', arr[4]);
    sessionStorage.setItem('w8f5p2', arr[23]);
    sessionStorage.setItem('w8f6p1', arr[5]);
    sessionStorage.setItem('w8f6p2', arr[12]);
    sessionStorage.setItem('w8f7p1', arr[6]);
    sessionStorage.setItem('w8f7p2', arr[13]);
    sessionStorage.setItem('w8f8p1', arr[7]);
    sessionStorage.setItem('w8f8p2', arr[14]);
    sessionStorage.setItem('w8f9p1', arr[8]);
    sessionStorage.setItem('w8f9p2', arr[15]);
    sessionStorage.setItem('w8f10p1', arr[9]);
    sessionStorage.setItem('w8f10p2', arr[16]);
    sessionStorage.setItem('w8f11p1', arr[10]);
    sessionStorage.setItem('w8f11p2', arr[17]);
    sessionStorage.setItem('w8f12p1', arr[11]);
    sessionStorage.setItem('w8f12p2', arr[18]);

    // Generate array of numbers 1 - 12 in random order for women's schedule
    var arr1 = [];
    if (data.weight == 'WSTRAWWEIGHT' || data.weight == 'WFLYWEIGHT' || data.weight == 'WBANTAMWEIGHT') arr1.push(unv2[0]);
    while(arr1.length < 12) {
        var r = Math.floor(Math.random() * 12) + 1;
        if(arr1.indexOf(r) === -1) arr1.push(r);
    }
    let arrayF = [];
    for (let i = 1; i < 13; ++i) {
        if (i == parseInt(sessionStorage.getItem('playerNRF'))) {
            arrayF.push(JSON.parse(sessionStorage.getItem('nrf0')));
        }
        else {
            arrayF.push(JSON.parse(sessionStorage.getItem('nrf' + i)));
        }
    }
    sessionStorage.setItem('standingsF', JSON.stringify(arrayF));
    console.log(arr1);

    // Week 1
    sessionStorage.setItem('w1f1m1', arr1[0]);
    sessionStorage.setItem('w1f1m2', arr1[6]);
    sessionStorage.setItem('w1f2m1', arr1[1]);
    sessionStorage.setItem('w1f2m2', arr1[7]);
    sessionStorage.setItem('w1f3m1', arr1[2]);
    sessionStorage.setItem('w1f3m2', arr1[8]);
    sessionStorage.setItem('w1f4m1', arr1[3]);
    sessionStorage.setItem('w1f4m2', arr1[9]);
    sessionStorage.setItem('w1f5m1', arr1[4]);
    sessionStorage.setItem('w1f5m2', arr1[10]);
    sessionStorage.setItem('w1f6m1', arr1[5]);
    sessionStorage.setItem('w1f6m2', arr1[11]);

    // Week 2
    sessionStorage.setItem('w2f1m1', arr1[0]);
    sessionStorage.setItem('w2f1m2', arr1[7]);
    sessionStorage.setItem('w2f2m1', arr1[1]);
    sessionStorage.setItem('w2f2m2', arr1[8]);
    sessionStorage.setItem('w2f3m1', arr1[2]);
    sessionStorage.setItem('w2f3m2', arr1[9]);
    sessionStorage.setItem('w2f4m1', arr1[3]);
    sessionStorage.setItem('w2f4m2', arr1[10]);
    sessionStorage.setItem('w2f5m1', arr1[4]);
    sessionStorage.setItem('w2f5m2', arr1[11]);
    sessionStorage.setItem('w2f6m1', arr1[5]);
    sessionStorage.setItem('w2f6m2', arr1[6]);

    // Week 3
    sessionStorage.setItem('w3f1m1', arr1[0]);
    sessionStorage.setItem('w3f1m2', arr1[8]);
    sessionStorage.setItem('w3f2m1', arr1[1]);
    sessionStorage.setItem('w3f2m2', arr1[9]);
    sessionStorage.setItem('w3f3m1', arr1[2]);
    sessionStorage.setItem('w3f3m2', arr1[10]);
    sessionStorage.setItem('w3f4m1', arr1[3]);
    sessionStorage.setItem('w3f4m2', arr1[11]);
    sessionStorage.setItem('w3f5m1', arr1[4]);
    sessionStorage.setItem('w3f5m2', arr1[6]);
    sessionStorage.setItem('w3f6m1', arr1[5]);
    sessionStorage.setItem('w3f6m2', arr1[7]);

    // Week 4
    sessionStorage.setItem('w4f1m1', arr1[0]);
    sessionStorage.setItem('w4f1m2', arr1[9]);
    sessionStorage.setItem('w4f2m1', arr1[1]);
    sessionStorage.setItem('w4f2m2', arr1[10]);
    sessionStorage.setItem('w4f3m1', arr1[2]);
    sessionStorage.setItem('w4f3m2', arr1[11]);
    sessionStorage.setItem('w4f4m1', arr1[3]);
    sessionStorage.setItem('w4f4m2', arr1[6]);
    sessionStorage.setItem('w4f5m1', arr1[4]);
    sessionStorage.setItem('w4f5m2', arr1[7]);
    sessionStorage.setItem('w4f6m1', arr1[5]);
    sessionStorage.setItem('w4f6m2', arr1[8]);

    // Week 5
    sessionStorage.setItem('w5f1m1', arr1[0]);
    sessionStorage.setItem('w5f1m2', arr1[10]);
    sessionStorage.setItem('w5f2m1', arr1[1]);
    sessionStorage.setItem('w5f2m2', arr1[11]);
    sessionStorage.setItem('w5f3m1', arr1[2]);
    sessionStorage.setItem('w5f3m2', arr1[6]);
    sessionStorage.setItem('w5f4m1', arr1[3]);
    sessionStorage.setItem('w5f4m2', arr1[7]);
    sessionStorage.setItem('w5f5m1', arr1[4]);
    sessionStorage.setItem('w5f5m2', arr1[8]);
    sessionStorage.setItem('w5f6m1', arr1[5]);
    sessionStorage.setItem('w5f6m2', arr1[9]);

    // Week 6
    sessionStorage.setItem('w6f1m1', arr1[0]);
    sessionStorage.setItem('w6f1m2', arr1[11]);
    sessionStorage.setItem('w6f2m1', arr1[1]);
    sessionStorage.setItem('w6f2m2', arr1[6]);
    sessionStorage.setItem('w6f3m1', arr1[2]);
    sessionStorage.setItem('w6f3m2', arr1[7]);
    sessionStorage.setItem('w6f4m1', arr1[3]);
    sessionStorage.setItem('w6f4m2', arr1[8]);
    sessionStorage.setItem('w6f5m1', arr1[4]);
    sessionStorage.setItem('w6f5m2', arr1[9]);
    sessionStorage.setItem('w6f6m1', arr1[5]);
    sessionStorage.setItem('w6f6m2', arr1[10]);

    // Week 7
    sessionStorage.setItem('w7f1m1', arr1[0]);
    sessionStorage.setItem('w7f1m2', arr1[1]);
    sessionStorage.setItem('w7f2m1', arr1[2]);
    sessionStorage.setItem('w7f2m2', arr1[3]);
    sessionStorage.setItem('w7f3m1', arr1[4]);
    sessionStorage.setItem('w7f3m2', arr1[5]);
    sessionStorage.setItem('w7f4m1', arr1[6]);
    sessionStorage.setItem('w7f4m2', arr1[7]);
    sessionStorage.setItem('w7f5m1', arr1[8]);
    sessionStorage.setItem('w7f5m2', arr1[9]);
    sessionStorage.setItem('w7f6m1', arr1[10]);
    sessionStorage.setItem('w7f6m2', arr1[11]);

    // Week 8
    sessionStorage.setItem('w8f1m1', arr1[0]);
    sessionStorage.setItem('w8f1m2', arr1[5]);
    sessionStorage.setItem('w8f2m1', arr1[2]);
    sessionStorage.setItem('w8f2m2', arr1[4]);
    sessionStorage.setItem('w8f3m1', arr1[4]);
    sessionStorage.setItem('w8f3m2', arr1[3]);
    sessionStorage.setItem('w8f4m1', arr1[6]);
    sessionStorage.setItem('w8f4m2', arr1[11]);
    sessionStorage.setItem('w8f5m1', arr1[8]);
    sessionStorage.setItem('w8f5m2', arr1[9]);
    sessionStorage.setItem('w8f6m1', arr1[10]);
    sessionStorage.setItem('w8f6m2', arr1[7]);
}

export default randomSchedule;