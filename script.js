
const dialog = document.querySelector("dialog");
const cardContainer = document.getElementById('cardContainer');
const form = document.querySelector('form');

function Book(Title, Author, Pages, Choice) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Choice = Choice;
}

const myLibrary = [];



function displayBookCard(book, index) {
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "X";
    
    // Create toggle button
    const toggle = document.createElement("button");
    toggle.innerHTML = "Toggle";
    
    // Create paragraph for "Read" status
    const choiceParagraph = document.createElement('p');
    choiceParagraph.innerHTML = `<strong>Read:</strong> ${book.Choice}`;

    // Add event listener to remove button
    removeBtn.addEventListener('click', () => {
        // Remove book from array
        myLibrary.splice(index, 1);
        // Remove card from DOM
        card.remove();
    });
    
    // Add event listener to toggle button
    toggle.addEventListener("click", () => {
        // Toggle the choice between "Yes" and "No"
        book.Choice = (book.Choice === "Yes") ? "No" : "Yes";
        // Update the "Read" status displayed on the card
        choiceParagraph.innerHTML = `<strong>Read:</strong> ${book.Choice}`;
    });

    // Populate card content
    const titleParagraph = document.createElement('p');
    titleParagraph.innerHTML = `<strong>Title:</strong> ${book.Title}`;

    const authorParagraph = document.createElement('p');
    authorParagraph.innerHTML = `<strong>Author:</strong> ${book.Author}`;

    const pagesParagraph = document.createElement('p');
    pagesParagraph.innerHTML = `<strong>Pages:</strong> ${book.Pages}`;

    // Append content elements to the card
    card.appendChild(removeBtn);
    card.appendChild(titleParagraph);
    card.appendChild(authorParagraph);
    card.appendChild(pagesParagraph);
    card.appendChild(choiceParagraph);
    card.appendChild(toggle);
    
    // Append card to the card container
    cardContainer.style.display = "flex";
    cardContainer.style.justifyContent = "space-between";
    cardContainer.style.position = "absolute";
    cardContainer.style.left = "5%";
    cardContainer.style.top = "70%";
    cardContainer.appendChild(card);
}


function displayLibrary() {
    // Clear existing cards
    cardContainer.innerHTML = '';

    // Loop through myLibrary and display each book
    myLibrary.forEach((book, index) => {
        displayBookCard(book, index);
    });
}


form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const yesRadio = document.getElementById('yes_radio');
    const noRadio = document.getElementById('no_radio');
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pg').value;

    // Function to get user choice
    function getUserChoice() {
        if (yesRadio.checked) {
            return "Yes";
        } else if (noRadio.checked) {
            return "No";
        } else {
            // If neither Yes nor No is checked
            return "Undefined";
        }
    }

    // Example usage
    const choice = getUserChoice();
    const bookinfo = new Book(title, author, pages, choice);
    myLibrary.push(bookinfo);

    // Display book card
    displayLibrary();

    // Reset form
    form.reset();
    
    // Close dialog
 
 
});

// Initial display of library when the page loads
displayLibrary();
