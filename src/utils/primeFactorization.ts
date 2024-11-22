export function primeFactorization(n: number): { steps: string[]; factors: { [key: number]: number } } {
    const factors: { [key: number]: number } = {};
    const steps: string[] = [];
    let num = n;

    if (n < 2) {
        return { steps: [], factors: {} };
    }

    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            factors[i] = (factors[i] || 0) + 1;
            steps.push(`${num} ÷ ${i} = ${num/i}, save ${i}`);
            num /= i;
        }
    }

    if (num > 1) {
        factors[num] = 1;
        steps.push(`Remaining prime factor: ${num}`);
    }

    return { steps, factors };
}