export type Frame = number[];

export function bowlingScore(rolls: Frame[]): number {
    let score = 0;
    let factor = 1;
    rolls.forEach((a) => {
        score += a.reduce((a, b) => a + b) * factor;
        factor = 1;
        if (a[0] + a[1] === 10) {
            factor = 2;
        }
    });
    return score;
}