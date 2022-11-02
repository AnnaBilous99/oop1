class User {
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    return this.books;
  }
}
let user1 = new User("Eli", "Grinberg", "Jerusalem");
let user2 = new User("Misha", "Vais", "Tel Aviv");
let user3 = new User("May", "Cohen", "Haifa");

user1.addBook("alice in wonderland");
user1.addBook("wonderful life");
user2.addBook("how to talk to anyone about anything");
user2.addBook("good vibes,good life");
user3.addBook("Little black book");
console.log(user1);
console.log(user2);
console.log(user3);
