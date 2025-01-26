
const finishedBooks = JSON.parse(localStorage.getItem('finishedBooks')) || [];


const finishedSection = document.querySelector('.finished-sec');


if (finishedBooks.length > 0) {
    finishedBooks.forEach(book => {
        createFinishedCard(book.image, book.title, book.author, book.pages);
    });
} else {
    finishedSection.innerHTML = '<p>No finished books yet.</p>';
}


function createFinishedCard(image, title, author, pages) {
    let html = `<div class="finished-card">
                    <div class="img2"><img src="${image}" alt="Book cover"></div>
                    <div class="details">
                        <h3>${title}</h3>
                        <p>${author}</p>
                        <p>${pages} pages</p>
                    </div>
                </div>`;
    finishedSection.innerHTML += html;
}
