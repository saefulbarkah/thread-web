import {
  addChild,
  show,
  onClick,
  setValue,
  getValue,
  container,
} from 'https://jscroot.github.io/element/croot.js';
import {
  addChildAsFirst,
  removeAttribute,
  removeClassValue,
  setAttribute,
  setClassValue,
  toggleClassValue,
} from './utils.js';
import { postClass, postContent, postTag } from './template/postList.js';
import { createPost, getPosts } from './api/posts/API.js';

async function getAllPosts() {
  const data = await getPosts();
  if (data !== null) {
    const loadingPost = container('loading-post');
    setClassValue(loadingPost, 'hidden');
    data.forEach((item) => {
      let content = postContent.replace('#content#', item.body);
      addChild('posts', postTag, postClass, content);
    });
  }
}

async function newPost() {
  const value = getValue('post-input');
  const loader = container('submit-post-loading');
  const btnPost = container('submitPost');
  setAttribute('submitPost', 'disabled', 'true');
  removeClassValue(loader, 'hidden');
  setClassValue(btnPost, 'opacity-75');
  try {
    const results = await createPost({ body: value });
    setValue('post-input', '');
    removeAttribute('submitPost', 'disabled');
    let content = postContent.replace('#content#', results.body);
    addChildAsFirst('posts', postTag, postClass, content);
    setClassValue(loader, 'hidden');
    removeClassValue(btnPost, 'opacity-75');
  } catch (error) {
    console.log(error);
    removeAttribute('submitPost', 'disabled');
    setClassValue(loader, 'hidden');
    setClassValue(btnPost, 'opacity-100');
  }
}

onClick('submitPost', () => {
  newPost();
});
getAllPosts();
