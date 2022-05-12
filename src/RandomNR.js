export function randomNR() {
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

      let data = sessionStorage.getItem('player');
        data = JSON.parse(data);
        let weight = data.weight;

      let xyz1 = sessionStorage.getItem('abc1');
      let xyz2 = sessionStorage.getItem('abc2');
      let xyz3 = sessionStorage.getItem('abc3');
      let xyz4 = sessionStorage.getItem('abc4');
      let xyz5 = sessionStorage.getItem('abc5');

      let wc = sessionStorage.getItem('wc0');
      let num = sessionStorage.getItem('oppNum');

      if (wc == 9 || wc == 10 || wc == 11) {
        let ran1 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran1 != xyz1 && ran1 != xyz2 && ran1 != num) {
            break;
          }
          ran1 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc1', ran1);

        let ran2 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran2 != ran1 && ran2 != xyz1 && ran2 != xyz2 && ran2 != num) {
            break;
          }
          ran2 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc2', ran2);

        let ran3 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran3 != ran1 && ran3 != ran2 && ran3 != xyz1 && ran3 != xyz2 && ran3 != num) {
            break;
          }
          ran3 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc3', ran3);

        let ran4 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran4 != ran1 && ran4 != ran2 && ran4 != ran3 && ran4 != xyz1 && ran4 != xyz2 && ran4 != num) {
            break;
          }
          ran4 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc4', ran4);

        let ran5 = Math.floor(Math.random() * (113 - 101) + 101);
        while(true) {
          if (ran5 != ran1 && ran5 != ran2 && ran5 != ran3 && ran5 != ran4 && ran5 != xyz1 && ran5 != xyz2 && ran5 != num) {
            break;
          }
          ran5 = Math.floor(Math.random() * (113 - 101) + 101);
        }
        sessionStorage.setItem('abc5', ran5);

        if (ran1 == 101){
          sessionStorage.setItem('ABC1', nrf1);
        }
        else if (ran1 == 102){
          sessionStorage.setItem('ABC1', nrf2);
        }
        else if (ran1 == 103){
          sessionStorage.setItem('ABC1', nrf3);
        }
        else if (ran1 == 104){
          sessionStorage.setItem('ABC1', nrf4);
        }
        else if (ran1 == 105){
          sessionStorage.setItem('ABC1', nrf5);
        }
        else if (ran1 == 106){
          sessionStorage.setItem('ABC1', nrf6);
        }
        else if (ran1 == 107){
          sessionStorage.setItem('ABC1', nrf7);
        }
        else if (ran1 == 108){
          sessionStorage.setItem('ABC1', nrf8);
        }
        else if (ran1 == 109){
          sessionStorage.setItem('ABC1', nrf9);
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC1', nrf10);
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC1', nrf11);
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC1', nrf12);
        }
        let gas = sessionStorage.getItem('ABC1');
        gas = JSON.parse(gas);
        console.log(gas.first)
        if (ran2 == 101){
          sessionStorage.setItem('ABC2', nrf1);
        }
        else if (ran2 == 102){
          sessionStorage.setItem('ABC2', nrf2);
        }
        else if (ran2 == 103){
          sessionStorage.setItem('ABC2', nrf3);
        }
        else if (ran2 == 104){
          sessionStorage.setItem('ABC2', nrf4);
        }
        else if (ran2 == 105){
          sessionStorage.setItem('ABC2', nrf5);
        }
        else if (ran2 == 106){
          sessionStorage.setItem('ABC2', nrf6);
        }
        else if (ran2 == 107){
          sessionStorage.setItem('ABC2', nrf7);
        }
        else if (ran2 == 108){
          sessionStorage.setItem('ABC2', nrf8);
        }
        else if (ran2 == 109){
          sessionStorage.setItem('ABC2', nrf9);
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC2', nrf10);
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC2', nrf11);
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC2', nrf12);
        }
  
        if (ran3 == 101){
          sessionStorage.setItem('ABC3', nrf1);
        }
        else if (ran3 == 102){
          sessionStorage.setItem('ABC3', nrf2);
        }
        else if (ran3 == 103){
          sessionStorage.setItem('ABC3', nrf3);
        }
        else if (ran3 == 104){
          sessionStorage.setItem('ABC3', nrf4);
        }
        else if (ran3 == 105){
          sessionStorage.setItem('ABC3', nrf5);
        }
        else if (ran3 == 106){
          sessionStorage.setItem('ABC3', nrf6);
        }
        else if (ran3 == 107){
          sessionStorage.setItem('ABC3', nrf7);
        }
        else if (ran3 == 108){
          sessionStorage.setItem('ABC3', nrf8);
        }
        else if (ran3 == 109){
          sessionStorage.setItem('ABC3', nrf9);
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC3', nrf10);
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC3', nrf11);
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC3', nrf12);
        }
  
        if (ran4 == 101){
          sessionStorage.setItem('ABC4', nrf1);
        }
        else if (ran4 == 102){
          sessionStorage.setItem('ABC4', nrf2);
        }
        else if (ran4 == 103){
          sessionStorage.setItem('ABC4', nrf3);
        }
        else if (ran4 == 104){
          sessionStorage.setItem('ABC4', nrf4);
        }
        else if (ran4 == 105){
          sessionStorage.setItem('ABC4', nrf5);
        }
        else if (ran4 == 106){
          sessionStorage.setItem('ABC4', nrf6);
        }
        else if (ran4 == 107){
          sessionStorage.setItem('ABC4', nrf7);
        }
        else if (ran4 == 108){
          sessionStorage.setItem('ABC4', nrf8);
        }
        else if (ran4 == 109){
          sessionStorage.setItem('ABC4', nrf9);
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC4', nrf10);
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC4', nrf11);
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC4', nrf12);
        }
  
        if (ran5 == 101){
          sessionStorage.setItem('ABC5', nrf1);
        }
        else if (ran5 == 102){
          sessionStorage.setItem('ABC5', nrf2);
        }
        else if (ran5 == 103){
          sessionStorage.setItem('ABC5', nrf3);
        }
        else if (ran5 == 104){
          sessionStorage.setItem('ABC5', nrf4);
        }
        else if (ran5 == 105){
          sessionStorage.setItem('ABC5', nrf5);
        }
        else if (ran5 == 106){
          sessionStorage.setItem('ABC5', nrf6);
        }
        else if (ran5 == 107){
          sessionStorage.setItem('ABC5', nrf7);
        }
        else if (ran5 == 108){
          sessionStorage.setItem('ABC5', nrf8);
        }
        else if (ran5 == 109){
          sessionStorage.setItem('ABC5', nrf9);
        }
        else if (ran1 == 110){
          sessionStorage.setItem('ABC5', nrf10);
        }
        else if (ran1 == 111){
          sessionStorage.setItem('ABC5', nrf11);
        }
        else if (ran1 == 112){
          sessionStorage.setItem('ABC5', nrf12);
        }
      }
      else {
        let ran1 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran1 != xyz1 && ran1 != xyz2 && ran1 != xyz3 && ran1 != xyz4 && ran1 != xyz5) {
            break;
          }
          ran1 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc1', ran1);

        let ran2 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran2 != ran1 && ran2 != xyz1 && ran2 != xyz2 && ran2 != xyz3 && ran2 != xyz4 && ran2 != xyz5) {
            break;
          }
          ran2 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc2', ran2);

        let ran3 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran3 != ran1 && ran3 != ran2 && ran3 != xyz1 && ran3 != xyz2 && ran3 != xyz3 && ran3 != xyz4 && ran3 != xyz5) {
            break;
          }
          ran3 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc3', ran3);

        let ran4 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran4 != ran1 && ran4 != ran2 && ran4 != ran3 && ran4 != xyz1 && ran4 != xyz2 && ran4 != xyz3 && ran4 != xyz4 && ran4 != xyz5) {
            break;
          }
          ran4 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc4', ran4);

        let ran5 = Math.floor(Math.random() * (25 - 1) + 1);
        while(true) {
          if (ran5 != ran1 && ran5 != ran2 && ran5 != ran3 && ran5 != ran4 && ran5 != xyz1 && ran5 != xyz2 && ran5 != xyz3 && ran5 != xyz4 && ran5 != xyz5) {
            break;
          }
          ran5 = Math.floor(Math.random() * (25 - 1) + 1);
        }
        sessionStorage.setItem('abc5', ran5);
      
        if (ran1 == 1){
          sessionStorage.setItem('ABC1', nr1);
        }
        else if (ran1 == 2){
          sessionStorage.setItem('ABC1', nr2);
        }
        else if (ran1 == 3){
          sessionStorage.setItem('ABC1', nr3);
        }
        else if (ran1 == 4){
          sessionStorage.setItem('ABC1', nr4);
        }
        else if (ran1 == 5){
          sessionStorage.setItem('ABC1', nr5);
        }
        else if (ran1 == 6){
          sessionStorage.setItem('ABC1', nr6);
        }
        else if (ran1 == 7){
          sessionStorage.setItem('ABC1', nr7);
        }
        else if (ran1 == 8){
          sessionStorage.setItem('ABC1', nr8);
        }
        else if (ran1 == 9){
          sessionStorage.setItem('ABC1', nr9);
        }
        else if (ran1 == 10){
          sessionStorage.setItem('ABC1', nr10);
        }
        else if (ran1 == 11){
          sessionStorage.setItem('ABC1', nr11);
        }
        else if (ran1 == 12){
          sessionStorage.setItem('ABC1', nr12);
        }
        else if (ran1 == 13){
          sessionStorage.setItem('ABC1', nr13);
        }
        else if (ran1 == 14){
          sessionStorage.setItem('ABC1', nr14);
        }
        else if (ran1 == 15){
          sessionStorage.setItem('ABC1', nr15);
        }
        else if (ran1 == 16){
          sessionStorage.setItem('ABC1', nr16);
        }
        else if (ran1 == 17){
          sessionStorage.setItem('ABC1', nr17);
        }
        else if (ran1 == 18){
          sessionStorage.setItem('ABC1', nr18);
        }
        else if (ran1 == 19){
          sessionStorage.setItem('ABC1', nr19);
        }
        else if (ran1 == 20){
          sessionStorage.setItem('ABC1', nr20);
        }
        else if (ran1 == 21){
          sessionStorage.setItem('ABC1', nr21);
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC1', nr22);
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC1', nr23);
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC1', nr24);
        }
        let gas = sessionStorage.getItem('ABC1');
        gas = JSON.parse(gas);
        console.log(gas.first)
        if (ran2 == 1){
          sessionStorage.setItem('ABC2', nr1);
        }
        else if (ran2 == 2){
          sessionStorage.setItem('ABC2', nr2);
        }
        else if (ran2 == 3){
          sessionStorage.setItem('ABC2', nr3);
        }
        else if (ran2 == 4){
          sessionStorage.setItem('ABC2', nr4);
        }
        else if (ran2 == 5){
          sessionStorage.setItem('ABC2', nr5);
        }
        else if (ran2 == 6){
          sessionStorage.setItem('ABC2', nr6);
        }
        else if (ran2 == 7){
          sessionStorage.setItem('ABC2', nr7);
        }
        else if (ran2 == 8){
          sessionStorage.setItem('ABC2', nr8);
        }
        else if (ran2 == 9){
          sessionStorage.setItem('ABC2', nr9);
        }
        else if (ran2 == 10){
          sessionStorage.setItem('ABC2', nr10);
        }
        else if (ran2 == 11){
          sessionStorage.setItem('ABC2', nr11);
        }
        else if (ran2 == 12){
          sessionStorage.setItem('ABC2', nr12);
        }
        else if (ran2 == 13){
          sessionStorage.setItem('ABC2', nr13);
        }
        else if (ran2 == 14){
          sessionStorage.setItem('ABC2', nr14);
        }
        else if (ran2 == 15){
          sessionStorage.setItem('ABC2', nr15);
        }
        else if (ran2 == 16){
          sessionStorage.setItem('ABC2', nr16);
        }
        else if (ran2 == 17){
          sessionStorage.setItem('ABC2', nr17);
        }
        else if (ran2 == 18){
          sessionStorage.setItem('ABC2', nr18);
        }
        else if (ran2 == 19){
          sessionStorage.setItem('ABC2', nr19);
        }
        else if (ran2 == 20){
          sessionStorage.setItem('ABC2', nr20);
        }
        else if (ran2 == 21){
          sessionStorage.setItem('ABC2', nr21);
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC2', nr22);
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC2', nr23);
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC2', nr24);
        }
  
        if (ran3 == 1){
          sessionStorage.setItem('ABC3', nr1);
        }
        else if (ran3 == 2){
          sessionStorage.setItem('ABC3', nr2);
        }
        else if (ran3 == 3){
          sessionStorage.setItem('ABC3', nr3);
        }
        else if (ran3 == 4){
          sessionStorage.setItem('ABC3', nr4);
        }
        else if (ran3 == 5){
          sessionStorage.setItem('ABC3', nr5);
        }
        else if (ran3 == 6){
          sessionStorage.setItem('ABC3', nr6);
        }
        else if (ran3 == 7){
          sessionStorage.setItem('ABC3', nr7);
        }
        else if (ran3 == 8){
          sessionStorage.setItem('ABC3', nr8);
        }
        else if (ran3 == 9){
          sessionStorage.setItem('ABC3', nr9);
        }
        else if (ran3 == 10){
          sessionStorage.setItem('ABC3', nr10);
        }
        else if (ran3 == 11){
          sessionStorage.setItem('ABC3', nr11);
        }
        else if (ran3 == 12){
          sessionStorage.setItem('ABC3', nr12);
        }
        else if (ran3 == 13){
          sessionStorage.setItem('ABC3', nr13);
        }
        else if (ran3 == 14){
          sessionStorage.setItem('ABC3', nr14);
        }
        else if (ran3 == 15){
          sessionStorage.setItem('ABC3', nr15);
        }
        else if (ran3 == 16){
          sessionStorage.setItem('ABC3', nr16);
        }
        else if (ran3 == 17){
          sessionStorage.setItem('ABC3', nr17);
        }
        else if (ran3 == 18){
          sessionStorage.setItem('ABC3', nr18);
        }
        else if (ran3 == 19){
          sessionStorage.setItem('ABC3', nr19);
        }
        else if (ran3 == 20){
          sessionStorage.setItem('ABC3', nr20);
        }
        else if (ran3 == 21){
          sessionStorage.setItem('ABC3', nr21);
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC3', nr22);
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC3', nr23);
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC3', nr24);
        }
  
        if (ran4 == 1){
          sessionStorage.setItem('ABC4', nr1);
        }
        else if (ran4 == 2){
          sessionStorage.setItem('ABC4', nr2);
        }
        else if (ran4 == 3){
          sessionStorage.setItem('ABC4', nr3);
        }
        else if (ran4 == 4){
          sessionStorage.setItem('ABC4', nr4);
        }
        else if (ran4 == 5){
          sessionStorage.setItem('ABC4', nr5);
        }
        else if (ran4 == 6){
          sessionStorage.setItem('ABC4', nr6);
        }
        else if (ran4 == 7){
          sessionStorage.setItem('ABC4', nr7);
        }
        else if (ran4 == 8){
          sessionStorage.setItem('ABC4', nr8);
        }
        else if (ran4 == 9){
          sessionStorage.setItem('ABC4', nr9);
        }
        else if (ran4 == 10){
          sessionStorage.setItem('ABC4', nr10);
        }
        else if (ran4 == 11){
          sessionStorage.setItem('ABC4', nr11);
        }
        else if (ran4 == 12){
          sessionStorage.setItem('ABC4', nr12);
        }
        else if (ran4 == 13){
          sessionStorage.setItem('ABC4', nr13);
        }
        else if (ran4 == 14){
          sessionStorage.setItem('ABC4', nr14);
        }
        else if (ran4 == 15){
          sessionStorage.setItem('ABC4', nr15);
        }
        else if (ran4 == 16){
          sessionStorage.setItem('ABC4', nr16);
        }
        else if (ran4 == 17){
          sessionStorage.setItem('ABC4', nr17);
        }
        else if (ran4 == 18){
          sessionStorage.setItem('ABC4', nr18);
        }
        else if (ran4 == 19){
          sessionStorage.setItem('ABC4', nr19);
        }
        else if (ran4 == 20){
          sessionStorage.setItem('ABC4', nr20);
        }
        else if (ran4 == 21){
          sessionStorage.setItem('ABC4', nr21);
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC4', nr22);
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC4', nr23);
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC4', nr24);
        }
  
        if (ran5 == 1){
          sessionStorage.setItem('ABC5', nr1);
        }
        else if (ran5 == 2){
          sessionStorage.setItem('ABC5', nr2);
        }
        else if (ran5 == 3){
          sessionStorage.setItem('ABC5', nr3);
        }
        else if (ran5 == 4){
          sessionStorage.setItem('ABC5', nr4);
        }
        else if (ran5 == 5){
          sessionStorage.setItem('ABC5', nr5);
        }
        else if (ran5 == 6){
          sessionStorage.setItem('ABC5', nr6);
        }
        else if (ran5 == 7){
          sessionStorage.setItem('ABC5', nr7);
        }
        else if (ran5 == 8){
          sessionStorage.setItem('ABC5', nr8);
        }
        else if (ran5 == 9){
          sessionStorage.setItem('ABC5', nr9);
        }
        else if (ran5 == 10){
          sessionStorage.setItem('ABC5', nr10);
        }
        else if (ran5 == 11){
          sessionStorage.setItem('ABC5', nr11);
        }
        else if (ran5 == 12){
          sessionStorage.setItem('ABC5', nr12);
        }
        else if (ran5 == 13){
          sessionStorage.setItem('ABC5', nr13);
        }
        else if (ran5 == 14){
          sessionStorage.setItem('ABC5', nr14);
        }
        else if (ran5 == 15){
          sessionStorage.setItem('ABC5', nr15);
        }
        else if (ran5 == 16){
          sessionStorage.setItem('ABC5', nr16);
        }
        else if (ran5 == 17){
          sessionStorage.setItem('ABC5', nr17);
        }
        else if (ran5 == 18){
          sessionStorage.setItem('ABC5', nr18);
        }
        else if (ran5 == 19){
          sessionStorage.setItem('ABC5', nr19);
        }
        else if (ran5 == 20){
          sessionStorage.setItem('ABC5', nr20);
        }
        else if (ran5 == 21){
          sessionStorage.setItem('ABC5', nr21);
        }
        else if (ran1 == 22){
          sessionStorage.setItem('ABC5', nr22);
        }
        else if (ran1 == 23){
          sessionStorage.setItem('ABC5', nr23);
        }
        else if (ran1 == 24){
          sessionStorage.setItem('ABC5', nr24);
        }
      }
}

export default randomNR;