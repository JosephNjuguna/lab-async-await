function displayPosts(posts) {
    const ul = document.getElementById("post-list")
    posts.forEach((post) => {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        h1.textContent = post.title;
        p.textContent = post.body;
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li)
    });
}

async function toFetch() {
    try {
        const postData = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await postData.json();
        displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}

toFetch()