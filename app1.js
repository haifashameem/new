// Retrieve the "To-Read" list from localStorage



const toReadList = JSON.parse(localStorage.getItem("toread")) || [];
console.log(toReadList);
const toReadSection = document.querySelector(".toread-sec");

// function readValue() {
//     var inputValue = document.getElementById('yourlibrary').value;
//     alert('The value entered is: ' + inputValue);
// }
// started card

toReadList.forEach((book) => {
    createReadcard(book.coverImageUrl,book.title,book.author,book.pages);
});


function createReadcard(image,title,author,pages){
let html=`<div class="toread-card">
           <div class="overlay">
                    <button class="select-book" onclick="started('${image}','${title}','${author}',${pages})">Read</button>
                </div>
            <div class="img2"><img src="${image}"></div>
        </div>`;
       document.querySelector(".toread-sec").innerHTML += html;
}

function started(image,title,author,page){
    createCard(image,title,author, 0, page);
}

// function updateData(){
// prompt("enter your current page")

// }
function createCard(image,title,writer, num, totalnum) {
    let a = (num / totalnum) * 100; 
    console.log(a);
    let b = Math.floor(a);
    console.log(b);
    let c =(b/100)*80;
    console.log("c :",c);
    let html = `<div class="started-card">
        <div class="img">
            <img src="${image}" alt="Book cover">
        </div>
        
        <div class="stared-texts">
            <div class="details">${title}</div>
            <div class="writer-name">${writer}</div>
            <div class="percentageread">
                <div class="status-bar"><div class="status-bar2" style=" width:${c}vw;"></div></div>
                <h2 id="percentage">${b}%</h2>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".started-section").innerHTML += html;
}
<<<<<<< HEAD
=======
// function updateprompt(){
//     prompt("Enter current page number");

// }

// function updateData(num,totalnum) {
//     let e = (num / totalnum) * 100; 
//     console.log(e);
//     let f = Math.floor(e);
//     console.log(f);
//     let g = (f / 100) * 80;
//     console.log("c:", g);
//     let statusBar = document.querySelector('.status-bar2');
//     if (statusBar) {
//         statusBar.style.width = ${g}vw;
//     }
//     let percentage = document.getElementById('percentage');
//     if (percentage) {
//         percentage.textContent = ${f}%;
//     }
// }

// Call the function to update the elements
updateData(60, 200);
>>>>>>> af4e15712c3850b1505294455bf23de22b8ed23e
