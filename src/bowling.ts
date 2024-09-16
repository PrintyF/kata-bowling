export function bowlingScore(rolls: number[]): number {
    return rolls.reduce((a, b) => a + b);
}