console.log('Starting fetch call');
const postPromise = fetch('https://api.dailysmarty.com/posts')
console.log('After fetch call');
console.log(postPromise);
console.log('After program has run')

postPromise
  .then(data => data.json())
  .then(data => {
    data.posts.forEach((item) => {
      console.log(item.title);
    });
})
.catch((err) => {
  console.log(err);
});