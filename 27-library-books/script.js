const book1 = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  pages: 432,
  avgTime: "7 Hours",
  copies: 3,
  checkOut: function() {
    this.copies--;
  },
  checkIn: function() {
    this.copies++;
  }
};

const book2 = {
  title: "The Old Man and the Sea",
  author: "Ernest Hemingway",
  pages: 127,
  avgTime: "3 Hours",
  copies: 2,
  checkOut: function() {
    this.copies--;
  },
  checkIn: function() {
    this.copies++;
  }
};

console.log(book2.title + " by " + book2.author);
console.log(book2.pages + ": " + book2.avgTime);
console.log(book2.copies + " copies available");
book2.checkOut();
console.log(book2.copies);
book2.checkIn();
console.log(book2.copies);
