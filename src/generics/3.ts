function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}


const merged = merge({ name: 'Anna' }, { age: 25 });
console.log(merged.name); // Anna
console.log(merged.age);  // 25
