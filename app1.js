
function readValue() {
    var inputValue = document.getElementById('yourlibrary').value;
    alert('The value entered is: ' + inputValue);
}
// started card
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

// Example call
createCard("Harry Potter", "J.K. Rowling", "https://m.media-amazon.com/images/I/81YhQfeiynL.jpg", 54, 324);

function createReadcard(image){
let html=`<div class="toread-sec">
          <div class="toread-card">
           <div class="overlay">
                    <button class="select-book">Read</button>
                </div>
            <div class="img2"><img src="https://m.media-amazon.com/images/I/81YhQfeiynL.jpg"></div>
        </div>
       </div>`;
       document.querySelector(".toread-sec").innerHTML += html;
}

function updateData(num,totalnum) {
    let e = (num / totalnum) * 100; 
    console.log(e);
    let f = Math.floor(e);
    console.log(f);
    let g = (f / 100) * 80;
    console.log("c:", g);
    let statusBar = document.querySelector('.status-bar2');
    if (statusBar) {
        statusBar.style.width = `${g}vw`;
    }
    let percentage = document.getElementById('percentage');
    if (percentage) {
        percentage.textContent = `${f}%`;
    }
}

// Call the function to update the elements
updateData(60, 200);