export function Random() {
    var randomBuffer = new Uint32Array(1);
    window.crypto.getRandomValues(randomBuffer);
    var randomNumber = randomBuffer[0] / (Math.pow(2, 32) - 1);
    return Math.floor(randomNumber * (100 - 1 + 1)) + 1;
}

export default Random;