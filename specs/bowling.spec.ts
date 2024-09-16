import { bowlingScore  } from "../src/bowling";

describe('bowling', () => {

   it("should calculate basic scores when no strikes or spare", () => {
    const rolls = [2,3];
    expect(bowlingScore(rolls)).toEqual(5);
   } );
});