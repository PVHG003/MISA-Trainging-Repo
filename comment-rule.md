Function Comment Documentation Rules

1. Begin every function with a clear JSDoc-style block comment (/** ... */).

2. Describe the function’s purpose in one concise sentence before listing parameters.

3. For each parameter, include:
    - @param {Type} followed by the parameter name and a brief explanation of its role.

4. Specify the return type and its meaning using @returns {Type} and a short description.

5. If the function throws an error, include @throws {ErrorType} and the reason.

6. Always include an author footer with your name and the date in the format dd/MM/yyyy.

7. Keep all descriptions factual and action-based; avoid filler adjectives.
   Example:

```js
/**
 * Generates a short description of a user including their name and age.
 *
 * @param {string} name - The user's full name.
 * @param {number} age - The user's current age in years.
 * @returns {string} A formatted string containing the user's name and age.
 * @throws {TypeError} If age is not a number.
 *
 * Author: Phạm Việt Hưng
 * @date 04/11/2025
 */
function exampleFunction(name, age) {
  if (typeof age !== 'number') throw new TypeError('Age must be a number');
  return `${name} is ${age} years old`;
}
````
