// Built from https://pi-calculator.netlify.app/

const C = 640320n;
const C3_OVER_24 = (C * C * C) / 24n;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function pell_sqrt_10005(digits) {
    D = 10005n;
    [x1, y1] = [1n, 0n];
    [x2, y2] = [4001n, 40n];
    y_target = 10n ** (BigInt(digits / 2 + 5));

    while (1) {
        [x, y] = [x1 * x2 + D * y1 * y2, x1 * y2 + y1 * x2];
        if (y > y_target)
            return [x, y];

        [x1, y1] = [x2, y2];
        [x2, y2] = [x, y];
    }
}

function showError(message) {
    document.querySelector("#error-output").textContent = message;
    document.querySelector("#error-output").classList.remove("hidden");
    setButtonState(true);
}

function space(str, n) {
    var ret = [];
    var i;
    var len;

    for (i = 0, len = str.length; i < len; i += n) {
        ret.push(str.substr(i, n));
    }

    return ret.join(" ");
}

function sharedPrefixLength(s1, s2) {
    for (let i = 0; i < s1.length && i < s2.length; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            return i - 1;
        }
    }
    return Math.min(s1.length, s2.length);
}

function progressBarUpdate(val) {
    let bar = document.querySelector("#progress-output");
    if (val >= 1) {
        bar.classList.add("hidden");
    } else {
        bar.classList.remove("hidden");
        bar.value = val;
    }
}

function setButtonState(val) {
    let start = document.querySelector("#button-input");
    let halt = document.querySelector("#halt-input");
    if (val) {
        start.disabled = false;
        start.classList.remove("loading");
        halt.classList.add("hidden");
    } else {
        start.disabled = true;
        start.classList.add("loading");
        halt.classList.remove("hidden");
    }
}

var halted = false;

function haltCalculations() {
    halted = true;
    showError("The calculation was manually halted.")
}

async function calculatePi() {
    setButtonState(false);
    halted = false;
    document.querySelector("#error-output").classList.add("hidden");
    let throttling = Number(document.querySelector("#throttle-input").value);

    let digits = Number(document.querySelector("#digits-input").value);
    if (Number.isNaN(digits) || digits < 1) {
        showError("Please enter a valid positive number for the digits!");
        return;
    }

    [x, y] = pell_sqrt_10005(digits);

    let one = 10n ** (BigInt(digits) + 20n);
    let k = 1n;
    let a_k = one;
    let a_sum = one;
    let b_sum = 0n;

    let previousOutput = "";
    let displayPiOutput = (num) => {
        let string = space("3." + num.toString().substring(1, digits + 1), 8);
        let prefixLength = sharedPrefixLength(previousOutput, string);
        previousOutput = string;
        document.querySelector("#pi-output").innerHTML = "<strong>" + string.substr(0, prefixLength) + "</strong>" + string.substr(prefixLength);
    }

    let assembleDigits = async () => {
        let result = (426880n * x * one * one) / ((13591409n * a_sum + 545140134n * b_sum) * y);
        displayPiOutput(result.toString());
        let ratioComplete = Math.abs(a_k.toString().length - digits) / digits;
        progressBarUpdate(ratioComplete);
        await sleep(throttling);
    };

    let i = 0;
    while (a_k != 0n && !halted) {
        a_k *= -(6n * k - 5n) * (2n * k - 1n) * (6n * k - 1n);
        a_k /= k * k * k * C3_OVER_24;
        a_sum += a_k;
        b_sum += k * a_k;
        k += 1n;
        if (throttling != 0) {
            await assembleDigits();
        }
        i++;
    }

    assembleDigits();
    progressBarUpdate(1);
    setButtonState(true);
}