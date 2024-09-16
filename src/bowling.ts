export type Frame = number[];

export function bowlingScore(rolls: Frame[]): number {
    let score = 0;
    rolls.forEach((a) => {score += a.reduce((a, b) => a + b)});
    return score;
}