export function millerRabin(n: string): { steps: string[]; isPrime: boolean } {
    const steps: string[] = [];
    const nBig = BigInt(n);

    if (nBig <= 1n) return { steps: ['1. Number is not prime'], isPrime: false };
    if (nBig % 2n === 0n) {
        return { steps: ['1. Number is even and greater than 2, hence not prime'], isPrime: false };
    }
    if (nBig <= 3n) return { steps: ['1. Number is prime'], isPrime: true };

    const witnesses = [2n, 3n, 5n, 7n, 11n, 13n];
    for (const a of witnesses) {
        if (a >= nBig) break;
        steps.push(`Test base ${a}`);
        if (!millerRabinTest(nBig, a)) {
            steps.push(`Base ${a} disproves primality`);
            return { steps, isPrime: false };
        }
    }

    steps.push('Passed all tests, number is prime');
    return { steps, isPrime: true };
}

function millerRabinTest(n: bigint, a: bigint): boolean {
    let d = n - 1n;
    let s = 0n;

    // Factorize n-1 as d * 2^s
    while (d % 2n === 0n) {
        d /= 2n;
        s++;
    }

    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) return true;

    for (let i = 0n; i < s - 1n; i++) {
        x = (x * x) % n;
        if (x === n - 1n) return true;
    }

    return false;
}

function modPow(base: bigint, exponent: bigint, modulus: bigint): bigint {
    let result = 1n;
    base = base % modulus;

    while (exponent > 0n) {
        if (exponent % 2n === 1n) {
            result = (result * base) % modulus;
        }
        base = (base * base) % modulus;
        exponent = exponent / 2n;
    }

    return result;
}
