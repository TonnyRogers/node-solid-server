import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { createPostController } from "./useCases/createPost";
import { deletePostController } from "./useCases/deletePost";

const router = Router();

router.post('/users',(request, response) => {
  return createUserController.handle(request,response);
});

router.post('/posts',(request,response) => {
  return createPostController.handle(request,response);
});

router.delete('/posts/:id',(request, response) => {
  return deletePostController.handle(request,response);
})

export { router }