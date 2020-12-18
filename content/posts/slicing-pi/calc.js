// Built from https://pi-calculator.netlify.app/

const C = 640320n;
const C3_OVER_24 = (C * C * C) / 24n;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sqrt10005(digits) {
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
    document.querySelector("#stats-output").textContent = message;
    document.querySelector("#stats-output").classList.remove("hidden");
    document.querySelector("#progress-output").classList.add("hidden");
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

function sharedPrefixLength(s1, s2, initial) {
    for (let i = initial; i < s1.length && i < s2.length; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            return i - 1;
        }
    }
    return Math.min(s1.length, s2.length);
}

function statusUpdate(val, time, digits) {
    let bar = document.querySelector("#progress-output");
    let stats = document.querySelector("#stats-output");
    if (val >= 1) {
        bar.classList.add("hidden");
        stats.textContent = `${digits} digits of pi found in ${time}ms (${(time / digits).toFixed(3)}ms per digit).`
        stats.classList.remove("hidden");
    } else {
        bar.classList.remove("hidden");
        stats.classList.add("hidden");
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

    let digits = Number(document.querySelector("#digits-input").value);
    if (Number.isNaN(digits) || digits < 2) {
        showError("Please enter a valid number greater than two for the number of digits!");
        return;
    } else if (digits > 50000) {
        if (!confirm(`Are you sure you want to calculate the first ${digits} of pi? Chances are that this may freeze your browser, unless you're on a supercomputer. Firefox users must be especially weary (as much as I love Firefox, it doesn't handle big numbers well). I recommend values less than 50,000.`)) {
            showError(`You chickened out of calculating the first ${digits} of pi! Or maybe you were wise. We'll never know...`);
            return;
        }
        if (document.querySelector("#throttle-input").value != "0") {
            document.querySelector("#throttle-input").value = "0";
            alert("Because you're trying to calculate more than 50,000 digits of pi, I've disabled all throttling. Because throttling involves updating the page several times per second (each time writing the full number of digits, even pre-convergence), throttling would have almost certainly frozen your browser.");
        }
    }
    let updateFrequency = Number(document.querySelector("#throttle-input").value);

    let startTime = new Date().getTime();

    let [x, y] = sqrt10005(digits);

    let one = 10n ** (BigInt(digits) + 20n);
    let k = 1n;
    let a_k = one;
    let a_sum = one;
    let b_sum = 0n;
    const sleepTime = 35;

    let previousOutput = "";
    let prefixLength = 0;
    let displayPiOutput = (num) => {
        let string = space("3." + num.toString().substring(1, digits + 1), 8);
        prefixLength = sharedPrefixLength(previousOutput, string, prefixLength);
        previousOutput = string;
        document.querySelector("#pi-output").innerHTML = "<strong id='converged-digits'>" + string.substr(0, prefixLength) + "</strong><span id='nonconverged-digits'>" + string.substr(prefixLength) + "</span>";
    }

    let assembleDigits = async () => {
        let pause = sleep(sleepTime);
        let result = (426880n * x * one * one) / ((13591409n * a_sum + 545140134n * b_sum) * y);
        displayPiOutput(result.toString());
        let ratioComplete = Math.abs(a_k.toString().length - digits) / digits;
        statusUpdate(ratioComplete, null, digits);
        await pause;
    };

    let i = 0;
    let pauses = 0;
    while (a_k != 0n && !halted) {
        a_k *= -(6n * k - 5n) * (2n * k - 1n) * (6n * k - 1n);
        a_k /= k * k * k * C3_OVER_24;
        a_sum += a_k;
        b_sum += k * a_k;
        k += 1n;
        if (updateFrequency != 0 && i % updateFrequency == 0) {
            await assembleDigits();
            pauses += 1;
        }
        i++;
    }

    if (!halted) {
        let endTime = new Date().getTime();

        let totalTime = endTime - startTime - pauses * sleepTime;

        // We do it twice to ensure the second to last run is a complete one
        // for highlighting purposes.
        assembleDigits();
        assembleDigits();
        statusUpdate(1, totalTime, digits);
    }
    setButtonState(true);
}

function initiateCalculation() {
    setTimeout(calculatePi, 1);
    return false;
}