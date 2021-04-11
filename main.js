const postContainer = document.getElementById("postContainer");
const loader = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

async function getPosts() {
    const res = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json();
    return data;
}

async function showPosts() {
    const posts = await getPosts();
    posts.forEach(post => {
        const postEl = document.createElement('div');
        postEl.classList.add("post");
        postEl.innerHTML = `<div class = 'number'>${post.id}</div>
        <div class = 'postInfo'>
          <h2 class = 'postTitle'>${post.title}</h2>
          <p class = 'postBody'>${post.body}</div>
        </div>`;
        postContainer.appendChild(postEl);
    });
    console.log(posts);
}

function showLoader() {
    loader.classList.add("show");
}

showPosts();

window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} =  document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoader();
    }
});