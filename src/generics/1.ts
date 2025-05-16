import axios from 'axios';

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}


type User = {
  id: number;
  name: string;
  email: string;
};

const userData = await fetchData<User>('https://api.example.com/user/1');
console.log(userData.name); // TypeScript знає, що тут є поле name
