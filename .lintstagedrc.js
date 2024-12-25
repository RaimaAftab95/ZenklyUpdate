export default {
  '*.{js,jsx}': ['eslint . --fix --cache', 'prettier . --write'],
  '*.{json,md}': ['prettier --write'],
  '*.{css,scss}': ['prettier --write']
};
