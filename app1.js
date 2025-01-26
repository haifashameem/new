// Retrieve the "To-Read" list from localStorage
const toReadList = JSON.parse(localStorage.getItem("toread")) || [];
console.log(toReadList);
const toReadSection = document.querySelector(".toread-sec");

// Create cards for "To-Read" list
toReadList.forEach((book) => {
    createReadcard(book.coverImageUrl, book.title, book.author, book.pages);
});

// Create "To-Read" card
function createReadcard(image, title, author, pages) {
    let html = `<div class="toread-card">
                   <div class="overlay">
                        <button class="select-book" onclick="started('${image}', '${title}', '${author}', ${pages})">Read</button>
                    </div>
                <div class="img2"><img src="${image}" alt="Book cover"></div>
            </div>`;
    document.querySelector(".toread-sec").innerHTML += html;
}

// Handle "Started" book creation
function started(image, title, author, pages) {
    createCard(image, title, author, 0, pages);  // Start from page 0
}

// Create a "Started" card with progress bar
function createCard(image, title, writer, currentPage, totalPages) {
    let progress = (currentPage / totalPages) * 100;
    let progressPercent = Math.floor(progress);
    let statusWidth = (progressPercent / 100) * 80;

    let html = `<div class="started-card">
                    <div class="img">
                        <img src="${image}" alt="Book cover">
                    </div>
                    <div class="overlay2">
                        <button class="update" onclick="updateprompt(${totalPages}, '${image}', '${title}', '${writer}', ${currentPage}, ${totalPages})">Update</button>
                    </div>
                    <div class="stared-texts">
                        <div class="details">${title}</div>
                        <div class="writer-name">${writer}</div>
                        <div class="percentageread">
                            <div class="status-bar"><div class="status-bar2" style="width:${statusWidth}vw;"></div></div>
                            <h2 id="percentage">${progressPercent}%</h2>
                        </div>
                    </div>
                </div>`;
    document.querySelector(".started-section").innerHTML += html;
}


function addfinishedbook(image, title, author, pages) {
    // Create an object for the finished book
    const finishedBook = { image, title, author, pages };

    // Retrieve the existing finished books from localStorage
    const finishedBooks = JSON.parse(localStorage.getItem('finishedBooks')) || [];

    // Add the current finished book to the list
    finishedBooks.push(finishedBook);

    // Save the updated list back to localStorage
    localStorage.setItem('finishedBooks', JSON.stringify(finishedBooks));

    // Optionally, you can also update the UI in the current page (if needed)
    let html = `<div class="finished-card">
                    <div class="overlay">
                        <button class="select-book" onclick="started('${image}', '${title}', '${author}', ${pages})">Read</button>
                    </div>
                    <div class="img2"><img src="${image}" alt="Book cover"></div>
                </div>`;
    document.querySelector(".finished-sec").innerHTML += html;
}


function updateprompt(totalPages, image, title, author, currentPage, totalPages) {
    let userPage = prompt("Enter current page number");
    let pageNum = parseInt(userPage);

    if (isNaN(pageNum) || pageNum < 1 || pageNum > totalPages) {
        alert("Invalid page number!");
        return;
    }

    
    localStorage.setItem("currentPage", pageNum);

    updateData(pageNum, totalPages, image, title, author);
}

function updateData(currentPage, totalPages, image, title, author) {
    let progress = (currentPage / totalPages) * 100;
    let progressPercent = Math.floor(progress);
    let statusWidth = (progressPercent / 100) * 80;

    let statusBar = document.querySelector('.status-bar2');
    if (statusBar) {
        statusBar.style.width = `${statusWidth}vw`;
    }

    let percentage = document.getElementById('percentage');
    if (percentage) {
        percentage.textContent = `${progressPercent}%`;
    }

    if (progressPercent === 100 || currentPage === totalPages) {
        addfinishedbook(image, title, author, totalPages);
        alert("Yay, you completed the book!");
    }
}
