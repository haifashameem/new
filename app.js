import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAv5ptP_UvhUyhZJIiezZT1DSKRWCaju5I",
  authDomain: "reading-list-d79c9.firebaseapp.com",
  projectId: "reading-list-d79c9",
  storageBucket: "reading-list-d79c9.firebasestorage.app",
  messagingSenderId: "822486468621",
  appId: "1:822486468621:web:bb3897f5c8a073c36f2d44"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchBooks(){
  const booksCollection =  collection(db, "books");
  const querySnapshot = await getDocs(booksCollection);
  const bookList = document.getElementById("book-list");
  bookList.innerHTML="";
  querySnapshot.forEach((doc)=>{
    const book = doc.data();
    const bookId = doc.id; 
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
    <img src="${book.coverImageUrl}" alt="${book.title} cover" class="book-cover">
    <h3>${book.title}</h3>
    <p>Author :${book.author}</p>
    <div class="layer">
        <button class="add-to-read" data-id="${book.id}" data-title="${book.title}" data-author="${book.author}" data-cover="${book.coverImageUrl}" data-pages="${book.pages}">ADD TO TBR</button>
      </div>

    `;
    bookList.appendChild(bookElement);
  });


bookList.addEventListener("click", function(event){
  if(event.target.classList.contains("add-to-read")){
    const bookId = event.target.getAttribute("data-id");
    const bookTitle = event.target.getAttribute("data-title");
    const bookAuthor = event.target.getAttribute("data-author");
    const bookCover = event.target.getAttribute("data-cover");
    const pages = event.target.getAttribute("data-pages");

    //object
    const bookData = {
      id: bookId,
      title: bookTitle,
      author: bookAuthor,
      coverImageUrl: bookCover,
      pages: pages,
    };
    const existingTBR = JSON.parse(localStorage.getItem("toread")) || [];
    existingTBR.push(bookData);

    localStorage.setItem("toread", JSON.stringify(existingTBR));
    alert(`"${bookTitle}" has been added to your TBR!`);

  }
});

}

fetchBooks();



