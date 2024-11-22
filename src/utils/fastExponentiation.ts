export function fastExponentiation(base: number, exponent: number, modulus: number): { steps: string[]; result: number } {
    if (modulus === 1) return { steps: ['1. 0'], result: 0 };
    if (modulus <= 0) {
        throw new Error('Modulus must be a positive integer greater than 0.');
    }

    const steps: string[] = [];
    let result = 1;
    base = base % modulus;

    let stepNumber = 1;

    while (exponent > 0) {
        if (exponent % 2 === 1) {
            const prevResult = result;
            result = (result * base) % modulus;
            steps.push(`${stepNumber++}. (${prevResult} * ${base}) % ${modulus} = ${result}`);
        }
        base = (base * base) % modulus;
        exponent = Math.floor(exponent / 2);
        if (exponent > 0) {
            steps.push(`${stepNumber++}. (${base} * ${base}) % ${modulus} = ${base}, exponent = ${exponent}`);
        }
    }

    return { steps, result };
}
