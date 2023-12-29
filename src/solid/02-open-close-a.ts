import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { httpClient } from './02-open-close-c';

(async () => {
  const httpClilent = new httpClient();

  const todoService = new TodoService(httpClilent);
  const postService = new PostService(httpClilent);
  const photosService = new PhotosService(httpClilent);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
