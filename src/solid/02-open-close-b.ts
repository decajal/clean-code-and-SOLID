// * Este es el código original, lo que aparece luego será el resultado de un refactor para cumplir
// * con el pincipio de open/close

// import axios from 'axios';

// export class TodoService {
//   async getTodoItems() {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//     return data;
//   }
// }

// export class PostService {
//   async getPosts() {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     return data;
//   }
// }

// export class PhotosService {
//   async getPhotos() {
//     const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
//     return data;
//   }
// }
// * Fin del código original

import { httpClient } from './02-open-close-c';

export class TodoService {
  constructor(private http: httpClient) {}
  async getTodoItems() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
  }
}

export class PostService {
  constructor(private http: httpClient) {}
  async getPosts() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
    return data;
  }
}

export class PhotosService {
  constructor(private http: httpClient) {}
  async getPhotos() {
    const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
    return data;
  }
}
