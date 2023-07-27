// const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
// if (response.ok) {
//   const data = await response.json();
//   console.log(data);
// }

const URL = 'https://jsonplaceholder.typicode.com/users';
const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const lion = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, restOptions);
  if (response.ok) response.data = await response.json();

  return response;
};

const response = await lion({
  url: URL,
  method: 'POST',
  body: JSON.stringify({ name: 'tiger' }),
});

const userData = response.data;

// userData.forEach((el) => {
//   console.log(el);
// });

lion.get = (url, options) => {
  return lion({
    url,
    ...options,
  });
};

lion.post = (url, body, options) => {
  return lion({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

lion.delete = (url, options) => {
  return lion({
    method: 'DELETE',
    url,
    ...options,
  });
};

lion.put = (url, body, options) => {
  return lion({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

const response1 = await lion.get(URL);
// console.log(response1.data);
