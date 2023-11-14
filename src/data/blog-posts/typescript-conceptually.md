---
title: TypeScript, Conceptually
slug: typescript-conceptually
description: An introduction to TypeScript and the problem it attempts to solve.
publishDate: 10/8/23
tags: [javascript, typescript]
---

TypeScript code can be incredibly complex. That complexity makes it daunting to approach and difficult to learn. I experienced this first-hand when presented with a project written in TypeScript and tasked with "figuring it out." Since then I have not fallen in love with TypeScript, but can appreciate what it is trying to do: add specificity to JavaScript.

## The Problem TypeScript Attempts to Solve

This function is an example of ambiguity (lack of specificity) in JavaScript.

```javascript
const addNumbers = (a, b) => a + b;
```

When the values of `a` and `b` are both numbers I can expect the function to return the sum of those numbers added together - as the function name implies.

```javascript
addNumbers(1, 2); // returns 3 (type: number)
```

What happens when the values of `a` and `b` are not both numbers? A string and number return a concatenated string.

```javascript
addNumbers("1", 2); // returns "12" (type: string)
```

A boolean and a string return a concatenated string.

```javascript
addNumbers(true, " lies"); // returns "true lies" (type: string)
```

A number and boolean return a number.

```javascript
addNumbers(0, true); // returns 1 (type: number)
```

I want the `addNumbers()` function to add `a` and `b` together and return a number, but the examples above show that isn't always the case. JavaScript won't prevent me from mixing and matching data types, so how can I make sure that `a` and `b` are numbers? By using TypeScript.

## "Converting" addNumbers() to TypeScript

To "convert" `addNumbers()` from JavaScript to TypeScript I will specify the type of `a` and `b` by adding a colon (:) and the desired data type (number) next to each parameter.

```typescript
const addNumbers = (a: number, b: number) => a + b;
```

TypeScript now knows that I specifically want `a` and `b` to be numbers and that values with any other data types are undesired. Trying to pass a value that is not a number into the function for `a` or `b` when using a code editor like Visual Studio Code will result in an error.

```typescript
addNumbers("1", 2); // Error message: Argument of type 'string' is not assignable to parameter of type 'number'.
```

Not all errors will have a message as clear as this one, but they should provide some indication of what, or where, the problem is. Depending on the type of error - like a typo - the message may include a more direct suggestion for resolving the error.

```typescript
adNumbers(1, 2); // Error message: Cannot find name 'adNumbers'. Did you mean 'addNumbers'?
```

## TypeScript tries to do as much work for you as it can

and the value returned by `addNumbers()` should also be a number

## Beyond the Basic Types
