export default {
  '*.{js,jsx}': ['eslint . --fix --cache', 'prettier . --write'],
  '*.{json,md,css,scss,html,svg}': ['prettier --write']
};
