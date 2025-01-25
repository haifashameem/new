// Retrieve the "To-Read" list from localStorage



const toReadList = JSON.parse(localStorage.getItem("toread")) || [];
console.log(toReadList);
const toReadSection = document.querySelector(".toread-sec");

// function readValue() {
//     var inputValue = document.getElementById('yourlibrary').value;
//     alert('The value entered is: ' + inputValue);
// }
// started card
if(toReadSection === 0){
    toReadSection.innerHTML = `<p>To read list is empty..add books from Library!</p>`
}
else{
toReadList.forEach((book) => {
    createReadcard(book.coverImageUrl);
});}


function createReadcard(image){
let html=`<div class="toread-card">
           <div class="overlay">
                    <button class="select-book">Read</button>
                </div>
            <div class="img2"><img src="${image}"></div>
        </div>`;
       document.querySelector(".toread-sec").innerHTML += html;
}

function updateData(){
prompt("enter your current page")

}
function createCard(title, writer, image, num, totalnum) {
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