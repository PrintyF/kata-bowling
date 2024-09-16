import { bowlingScore  } from "../src/bowling";

describe('bowling', () => {

   it.each(
    [
        [[2, 3], 5],
        [[3, 4], 7]
    ])('should calculate basic scores %i with no strikes or spare', (rolls, expected) => {
    expect(bowlingScore(rolls)).toEqual(expected);
   });
});