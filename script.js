const pets = {
  dog: [
    { name: "Scooby (Labrador)", img: "images/labrador.png", age : "4 years" },
    { name: "Bella (German Shepherd)", img: "images/german_shepherd.png" , age : "1 year"},
    { name: "Rocky (Beagle)", img: "images/beagle.png", age : "1 year" }
  ],
  cat: [
    { name: "Santraa (Persian)", img: "images/persian_cat.png" , age : "2 years" },
    { name: "Luna (Siamese)", img: "images/siamese_cat2.png" , age : "1 year" },
    { name: "Munni (Bombay Cats)", img: "images/munni.png" , age : "2 years" },
    { name: "Oreo (Maine Coon)", img: "images/maine_coon_cat3.png" , age : "3 years" }
  ],
  parrot: [
    { name: "Coco (Macaw)", img: "images/macaw.png", age : "2 years" },
    { name: "Kiwi (Cockatiel)", img: "images/cockatiel.png", age : "1 year" },
    { name: "Rio (African Grey)", img: "images/africa_grey.png", age : "2 years" }
  ],
  rabbit: [
    { name : "Stapsee (Dutch Rabbit)" , img: "images/dutchrabbit.png", age : "2 years" },
    { name : "Conna (American Rabbit)" , img: "images/american_rabbit.png", age : "1 year" }
  ],
  hamster: [
    { name : "Stuart (Dwarf)" , img : "images/hamster.png", age : "6 months" },
    { name : "Goldee (Golden Hamster)" , img : "images/golden_hamster.png", age : "4 months" },
    { name : "Skyler (Winter white)" , img : "images/white_hamster.png", age : "2 months" }
  ]
};

document.getElementById("showLogin").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("signupPage").classList.remove("active");
      document.getElementById("loginPage").classList.add("active");
    });

    // Sign Up
    document.getElementById("signupBtn").addEventListener("click", () => {
      const newUser = document.getElementById("newUsername").value.trim();
      const newPass = document.getElementById("newPassword").value.trim();
      const newEmail = document.getElementById("newEmail").value.trim();
      const newPhone = document.getElementById("newPhone").value.trim();
      const signUpMsg = document.getElementById("signUpMsg");
       
      // Switch to signup
    document.getElementById("showSignup").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("loginPage").classList.remove("active");
      document.getElementById("signupPage").classList.add("active");
    });

      if (!newUser || !newPass || !newEmail || !newPhone) {
        signUpMsg.textContent = "⚠ Please fill all fields!";
        signUpMsg.style.color = "red";
        return;
      }

      if (accounts.some(acc => acc.username === newUser)) {
        signUpMsg.textContent = "❌ Username already exists!";
        signUpMsg.style.color = "red";
      } else {
        accounts.push({ username: newUser, password: newPass, email: newEmail, phone: newPhone });
        signUpMsg.textContent = "✅ Sign up successful! You can login now.";
        signUpMsg.style.color = "green";
      }
    });


const USERNAME = "manthan_terse";
const PASSWORD = "565758";

document.getElementById("loginb").addEventListener("click", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === USERNAME && password === PASSWORD) {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("dashboardPage").classList.add("active");
  } else {
    document.getElementById("errorMsg").textContent = "❌ Invalid Username or Password!";
  }
});


function showCategory(category) {
  const petsSection = document.getElementById("petsSection");
  petsSection.innerHTML = `<h2>Available ${category.charAt(0).toUpperCase() + category.slice(1)}s</h2>`;

  const listDiv = document.createElement("div");
  listDiv.className = "pet-list";

  pets[category].forEach(pet => {
    const bio = document.createElement("div");
    bio.className = "pet-bio";
    bio.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <h3>${pet.age}</h3>
      <button onclick="adoptPet('${pet.name}', '${pet.img}', '${pet.age}')">Adopt Me</button>
    `;
    listDiv.appendChild(bio); 
  });

  petsSection.appendChild(listDiv);
}

const waitingSection = document.createElement("div");
waitingSection.innerHTML = `
  <div id="waiting-approval"></div>
`;
document.body.appendChild(waitingSection);
const waitingDiv = waitingSection.querySelector("#waiting-approval");

<button onclick="adoptPet(event, '${pet.name}', '${pet.img}', '${pet.age}')">Adopt Me</button>


function adoptPet(event, name, img, age) {
  event.target.parentElement.remove();  // remove card

  const adopted = document.createElement("div");
  adopted.className = "adopted-pet";
  adopted.innerHTML = `
    <img src="${img}" alt="${name}">
    <h3>${name}</h3>
    <h3>${age}</h3>
    <p>👤 Adopted by: <strong>${USERNAME}</strong></p>
    <p style="color: red;">⏳ Waiting for Approval</p>
    <p>📧 Email: ${USERNAME.email}</p>
    <p>📞 Phone: ${USERNAME.phone}</p>
  `;
  waitingDiv.appendChild(adopted);
}

