export type Frame = number[];

export function bowlingScore(rolls: Frame[]): number {
    return rolls[0].reduce((a, b) => a + b);
}