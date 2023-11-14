---
title: Find a Value's Key in a JavaScript Object
slug: find-a-values-key-in-a-javascript-object
description: An exercise in breaking down code into smaller, more understandable, parts.
publishDate: 11/13/23
tags: [javascript]
---

I don’t know how many times I have accessed a JavaScript object’s value by its key or how I could arrive at a reasonable guess. What I do know is the number of times that I found the key from its corresponding value: once. This [StackOverflow post](https://stackoverflow.com/posts/28191966/revisions) is probably where you will end up if you search for how to accomplish this. The solution that I used and a variable version from [another solution on the same post](https://stackoverflow.com/posts/57944783/revisions) are copied below for reference.

```javascript
// As a function
function getKeyByValue(object, value) {
	return Object.keys(object).find((key) => object[key] === value);
}

// As a variable
const key = Object.keys(object).find((key) => object[key] === value);
```

Using the code without modifications worked flawlessly in my project, but for some reason it was difficult for me to understand exactly what the code did. Perhaps my confusion was from the multiple uses of "object" and "key" along with "Object" (capital O) and "keys" (plural). No matter the cause, breaking down the code and looking at the result of each step cleared up my confusion. This is what that process looked like.

## The Process

The first step is defining an object with some amount of data in it.

```javascript
const movies = {
	Inception: "Christopher Nolan",
	Jaws: "Steven Spielberg",
	Watchmen: "Zack Snyder",
};
```

Next, [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) is used to create an array of the object's keys.

```javascript
const arrayOfKeys = Object.keys(movies);
console.log(arrayOfKeys);

// Logs to the console: ["Inception", "Jaws", "Watchmen"]
```

Now that the keys are separated from their values and stored in an array, the [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) method is used to determine which key corresponds to our specified value. I updated the variable version of the code to be more specific to this example. Finding the movie that Steven Spielberg directed in the `movies` object looks like this.

```javascript
const correspondingKey = arrayOfKeys.find((title) => movies[title] === "Steven Spielberg");

console.log(correspondingKey);
// Logs to the console: "Jaws"
```

Thinking through each iteration of the keys can also be helpful. The first key in the array is "Inception." Does `movies[Inception] === "Steven Spielberg"`? No. The value of `movies[Inception]` is "Christopher Nolan." The second key in the array is "Jaws." Does `movies[Jaws] === "Steven Spielberg"`? Yes.
