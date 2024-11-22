export function totientFunction(n: number): { steps: string[]; value: number } {
    let result = n;
    const steps: string[] = [`Start with φ(${n}) = ${n}`];

    if (n < 1) {
        return { steps: [`φ(${n}) is not defined for non-positive integers.`], value: 0 };
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            while (n % i === 0) {
                n /= i;
            }
            result -= result / i;
            steps.push(`Prime factor: ${i}, φ = ${result}`);
        }
    }

    if (n > 1) {
        result -= result / n;
        steps.push(`Remaining prime factor: ${n}, φ = ${result}`);
    }

    return { steps, value: result };
}
