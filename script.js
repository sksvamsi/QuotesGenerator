function generate() {
  var quotes = {
    "-Rajam":
      "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
    "― Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty",
    "― Pierce Brown":
      "“Man cannot be freed by the same injustice that enslaved it.”",
    "Albert Einstein":
      '"A person who never made a mistake never tried anything new."',
    "Marie Curie":
      '"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."',
    "Les Brown":
      '"Too many of us are not living our dreams because we are living our fears."',
  };
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes[author];
  // console.log(quote)
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
