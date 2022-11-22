function Book(title, author) {
  this.title = title;
  this.author = author;
}

const StoredBooks = [
  {
    title: "Bible",
    author: "God",
  },
  {
    title: "Book Two",
    author: "random",
  },
  {
    title: "Don Quixote",
    author: "Cervantes ",
  }
];

const books = StoredBooks;


function UI() {}

UI.prototype.addBookToList = function (book) {
    

  const list = document.getElementById("book-list");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><a href="" class="delete">X</a></td>
    `;
  list.appendChild(row);
};

UI.prototype.displayBooks = function (book) {
  this.addBookToList(book);
  const render = new UI();
  books.forEach((book) => render.addBookToList(book));
};

const render = new UI();
render.displayBooks(books);

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
};

document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  const book = new Book(title, author);

  const ui = new UI();

  if (title === "" || author === "") {
    alert("please fill in all fields");
  } else {
    ui.addBookToList(book);

    ui.clearFields();
  }
  e.preventDefault();
});

UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();

  ui.deleteBook(e.target);

  e.preventDefault();
});
