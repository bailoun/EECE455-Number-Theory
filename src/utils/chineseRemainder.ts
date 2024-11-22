export function chineseRemainder(
    remainders: number[],
    moduli: number[]
  ): { solution: bigint; modulus: bigint; steps: string[] } {
    if (remainders.length !== moduli.length) {
      throw new Error('The number of remainders must equal the number of moduli.');
    }
  
    let steps: string[] = [];
    let stepNumber = 1; // Step numbering
  
    let x = BigInt(remainders[0]);
    let m = BigInt(moduli[0]);
    steps.push(`${stepNumber++}. x = ${x}, modulus = ${m}`);
  
    for (let i = 1; i < remainders.length; i++) {
      const a_i = BigInt(remainders[i]);
      const m_i = BigInt(moduli[i]);
      steps.push(`${stepNumber++}. x ≡ ${remainders[i]} mod ${moduli[i]}`);
  
      // Compute extended GCD of m and m_i
      const { gcd, x: s, y: t } = extendedGCD(m, m_i);
      steps.push(
        `${stepNumber++}. gcd(${m}, ${m_i}): gcd = ${gcd}, s = ${s}, t = ${t}`
      );
  
      const diff = a_i - x;
      steps.push(`${stepNumber++}. ${remainders[i]} - ${x} = ${diff}`);
  
      // Check if solution exists
      if (diff % gcd !== 0n) {
        throw new Error('No solution exists for the given congruences.');
      }
  
      // Calculate Least Common Multiple (LCM)
      const lcm = (m / gcd) * m_i;
      steps.push(`${stepNumber++}. LCM(${m}, ${m_i}): ${lcm}`);
  
      // Calculate the multiplier
      const multiplier = ((diff / gcd) * s) % (m_i / gcd);
      steps.push(
        `${stepNumber++}. Multiplier = ((${diff} / ${gcd}) * ${s}) mod (${m_i} / ${gcd}) = ${multiplier}`
      );
  
      // Update the solution x
      x = x + multiplier * m;
      x = ((x % lcm) + lcm) % lcm;
      steps.push(`${stepNumber++}. x = ${x} mod ${lcm}`);
  
      m = lcm;
    }
  
    return { solution: x, modulus: m, steps };
  }
  
  function extendedGCD(a: bigint, b: bigint): { gcd: bigint; x: bigint; y: bigint } {
    if (b === 0n) {
      return { gcd: a, x: 1n, y: 0n };
    } else {
      const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);
      const x = y1;
      const y = x1 - (a / b) * y1;
      return { gcd, x, y };
    }
  }
  