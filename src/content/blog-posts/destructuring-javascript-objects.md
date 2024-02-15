---
title: Destructuring Javascript Objects
slug: destructuring-javascript-objects
description: This blog post - a reference for destructuring Javascript objects - was originally a GitHub Gist.
publishDate: 5/21/19
tags: [javascript]
---

Say you have an object

```js
const user = { id: 1, name: "Joe" };
```

You could access a property of the object appending the property name to the variable name.

```js
console.log(user.name); // Logs "Joe" to the console
```

You could also do the same thing, but assign the name to a variable first.

```js
let userName = user.name;

console.log(userName); // Logs "Joe" to the console
```

If you wanted to also assign the id, you would have to create a second variable.

```js
let userID = user.id;
let userName = user.name;

console.log(userID); // Logs "1" to the console
console.log(userName); // Logs "Joe" to the console
```

With destructuring you could assign the name and id at the same time.

```js
let { id, name } = user;

console.log(id); // Logs "1" to the console
console.log(name); // Logs "Joe" to the console
```

"id" and "name" are not great variable names. Thankfully we can re-assign them.

```js
let { id: userID, name: userName } = user;

console.log(userID); // Logs "1" to the console
console.log(userName); // Logs "Joe" to the console
```

Let's make our object a bit more complicated.

```js
const user = {
	id: 1,
	name: "Joe",
	address: { street: "123 Main St", city: "Dallas", state: "Texas" },
};
```

We could get the address object by itself.

```js
let { address } = user;

console.log(address); // Logs "{ street: '123 Main St', city: 'Dallas', state: 'Texas' }" to the console
```

We can also get parts of the address.

```js
let { street, city, state } = user.address;

console.log(street); // Logs "123 Main St" to the console
console.log(city); // Logs "Dallas" to the console
console.log(state); // Logs "Texas" to the console
```

We could re-assign them to different names if we wanted to.

```js
let { street: userStreet, city: userCity, state: userState } = user.address;

console.log(userStreet); // Logs "123 Main St" to the console
console.log(userCity); // Logs "Dallas" to the console
console.log(userState); // Logs "Texas" to the console
```
