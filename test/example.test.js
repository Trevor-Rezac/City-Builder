// IMPORT MODULES under test here:
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('createCountString should return a string with the number of times each dropdown has changed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'You changed the skyline 2 times, the waterfront 3 times, and the castle 4 times.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCountString(2, 3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'returns a string with the number of times each dropdown changed');
});
