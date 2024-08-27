// Homework 1
for (i = 0; i < 10; i++) console.log(i);
for (i = 5; i < 10; i++) console.log(i);
for (i = 5; i < 77; i++) console.log(i);
for (i = 50; i > 0; i--) console.log(i);
// Homework 1

// Homework 2
for (i = 0; i < 10; i++) if (i % 2 == 0) console.log(i);
for (i = 0; i < 10; i++) if (i % 2 == 1) console.log(i);
for (i = 12; i < 44; i++) if (i % 4 == 0) console.log(i);
// Homework 2

// Homework 3
for (i = 0; i < 10; i++) if (i % 2 == 0) console.log(i);
// Homework 3

// Homework 4
for (i = 1; i <= 10; i++)
  i % 2 == 0 ? console.log(`${i} არის ლუწი`) : console.log(`${i} არის კენტი`);
// Homework 4

// Homework 5

for (i = 0; i < 10; i++) {
  const h2 = document.createElement("h2");
  h2.textContent = `Hello I am h2`;
  h2.classList.add("hello-h2");

  //   h2.style.backgroundColor = "red";
  //   h2.style.color = "white";
  //   h2.style.borderRadius = "10px";

  document.body.append(h2);

  h2.addEventListener("click", function () {
    console.log(`H2 Was Clicked`);
  });
}
// Homework 5
