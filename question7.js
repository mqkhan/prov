// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

const postsEl = document.getElementById("posts");
const postsWithCommentsEl = document.getElementById("postsWithComments");

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);

  const filterdData = data.filter((post) => {
    return post.userId == 1;
  });
  console.log(filterdData);

  filterdData.forEach((post) => {
    const titleEl = document.createElement("p");
    titleEl.setAttribute("class", "title");
    titleEl.innerHTML = `<b>${post.title} </b>`;
    titleEl.style.color = "red";
    postsEl.appendChild(titleEl);

    const bodyEl = document.createElement("p");
    bodyEl.setAttribute("class", "body");
    bodyEl.style.backgroundColor = "lightgrey";
    bodyEl.innerHTML = `${post.body}`;
    postsEl.appendChild(bodyEl);

    titleEl.addEventListener("mouseover", function () {
      bodyEl.style.backgroundColor = "white";
    });
  });
}
getPost();

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentstData = await response.json();

  // time over
}
console.log(getPosts);
