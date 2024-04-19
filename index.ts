/*
* This program uses a method to reverse a string
*
* @author  Cristiano Sellitto
* @version 1.0
* @since   2024-04-19
*/

import { createPrompt } from 'bun-promptx'

/**
 * Reverses strings using recursion.
 *
 * @param stringToReverse the string to reverse
 * @returns the reversed string
 */
function reverseString(stringToReverse: string): string {
  if (stringToReverse == "") {
    return ""
  } else {
    let firstCharacter: string = stringToReverse[0]
    let restOfString: string = stringToReverse.slice(1, stringToReverse.length)

    return reverseString(restOfString) + firstCharacter
  }
}

const selectedString = createPrompt('Enter a string to reverse: ').value

console.log(`The reversed string is ${reverseString(selectedString)}`);
 
console.log('\nDone.')