interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address; // необов’язкова властивість
}

// Приклади використання:
const mango: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA'
  }
};

console.log(mango.name); // Виведе: Mango


const poly: User = {
  name: 'Mango',
  age: 30,
  email: 'john@example.com'
};

console.log(poly.name); // Виведе: Mango
