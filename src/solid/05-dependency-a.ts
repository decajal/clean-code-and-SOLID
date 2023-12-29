// * Este es el código original
// import { PostService } from './05-dependency-b';

// // Main
// (async () => {
//   const postService = new PostService();

//   const posts = await postService.getPosts();

//   console.log({ posts });
// })();
// * Fin del código original

import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WenApiPostService } from './05-dependency-c';

// Main
(async () => {
  // const provider = new JsonDataBaseService();
  // const provider = new LocalDataBaseService();
  const provider = new WenApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
