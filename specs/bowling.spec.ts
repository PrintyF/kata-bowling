import { bowlingScore  } from "../src/bowling";

describe('bowling', () => {

   it.each(
    [
        [[[2, 3]], 5],
        [[[3, 4]], 7]
    ])('should calculate basic scores of one frame %i with no strikes or spare', (rolls, expected) => {
    expect(bowlingScore(rolls)).toEqual(expected);
   });

   it.each(
    [
        [[[2, 3], [2, 3]], 10],
        [[[3, 4], [5, 1], [5, 0]], 18]
    ])('should calculate basic scores of several frames %s with no strikes or spare', (rolls, expected) => {
    expect(bowlingScore(rolls)).toEqual(expected);
   });

});