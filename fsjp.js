let accounts = [
  { username: "manthan_terse", password: "565758", email: "tersemanthan2006@gmail.com", phone: "9326692254" }
];
let currentUser = null;


const pets = {
  dog: [
    { name: "Scooby (Labrador)", img: "images/labrador.png", age: "4 years" },
    { name: "Bella (German Shepherd)", img: "images/german_shepherd.png", age: "1 year" },
    { name: "Rocky (Beagle)", img: "images/beagle.png", age: "1 year" }
  ],
  cat: [
    { name: "Santraa (Persian)", img: "images/persian_cat.png", age: "2 years" },
    { name: "Luna (Siamese)", img: "images/siamese_cat2.png", age: "1 year" },
    { name: "Munni (Bombay Cat)", img: "images/munni.png", age: "2 years" },
    { name: "Oreo (Maine Coon)", img: "images/maine_coon_cat3.png", age: "3 years" }
  ],
  parrot: [
    { name: "Coco (Macaw)", img: "images/macaw.png", age: "2 years" },
    { name: "Kiwi (Cockatiel)", img: "images/cockatiel.png", age: "1 year" },
    { name: "Rio (African Grey)", img: "images/africa_grey.png", age: "2 years" }
  ],
  rabbit: [
    { name: "Stapsee (Dutch Rabbit)", img: "images/dutchrabbit.png", age: "2 years" },
    { name: "Conna (American Rabbit)", img: "images/american_rabbit.png", age: "1 year" }
  ],
  hamster: [
    { name: "Stuart (Dwarf)", img: "images/hamster.png", age: "6 months" },
    { name: "Goldee (Golden Hamster)", img: "images/golden_hamster.png", age: "4 months" },
    { name: "Skyler (Winter White)", img: "images/white_hamster.png", age: "2 months" }
  ]
};

document.getElementById("showLogin").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("signupPage").classList.remove("active");
  document.getElementById("loginPage").classList.add("active");
});

document.getElementById("showSignup").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("loginPage").classList.remove("active");
  document.getElementById("signupPage").classList.add("active");
});

document.getElementById("signupBtn").addEventListener("click", () => {
  const newUser = document.getElementById("newUsername").value.trim();
  const newPass = document.getElementById("newPassword").value.trim();
  const newEmail = document.getElementById("newEmail").value.trim();
  const newPhone = document.getElementById("newPhone").value.trim();
  const signUpMsg = document.getElementById("signUpMsg");

  if (!newUser || !newPass || !newEmail || !newPhone) {
    signUpMsg.textContent = "⚠️ Please fill all fields!";
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

document.getElementById("loginb").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const found = accounts.find(acc => acc.username === user && acc.password === pass);

  if (found) {
    currentUser = found;
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("signupPage").classList.remove("active");
    document.getElementById("dashboardPage").classList.add("active");
    loadAdoptedPets();
  } else {
    errorMsg.textContent = "❌ Invalid Username or Password!";
  }
});

function showCategory(category) {
  const petsSection = document.getElementById("petsSection");
  petsSection.innerHTML = `<h2>Available ${category.charAt(0).toUpperCase() + category.slice(1)}s</h2>`;

  const listDiv = document.createElement("div");
  listDiv.className = "pet-list";

  const adoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || [];

  pets[category].forEach(pet => {
    const alreadyAdopted = adoptedPets.find(p => p.name === pet.name);

    const bio = document.createElement("div");
    bio.className = "pet-bio";
    bio.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <h3>${pet.age}</h3>
      ${
        alreadyAdopted
          ? `<p style="color: red;">⏳ Adopted by ${alreadyAdopted.user} (Waiting for Approval)</p>`
          : `<button onclick="adoptPet('${pet.name}', '${pet.img}', '${pet.age}')">Adopt Me</button>`
      }
    `;
    listDiv.appendChild(bio);
  });

  petsSection.appendChild(listDiv);
}

function adoptPet(name, img, age) {
  const adoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || [];
  adoptedPets.push({
    name,img, age,
    user: currentUser.username,
    email: currentUser.email,
    phone: currentUser.phone
  });
  localStorage.setItem("adoptedPets", JSON.stringify(adoptedPets));

  document.getElementById("flashPetImg").src = img;
  document.getElementById("flashPetName").textContent = name;
  document.getElementById("flashPetAge").textContent = age;
  document.getElementById("flashcard").style.display = "flex";
  loadAdoptedPets();
  showCategory(Object.keys(pets)[0]); 
}
function closeFlashcard() {
  document.getElementById("flashcard").style.display = "none";
}
function loadAdoptedPets() {
  const waitingDiv = document.getElementById("waiting-approval");
  waitingDiv.innerHTML = `
  <h2>Pets Awaiting Approval</h2>
  <p style="color: red;">(You cannot adopt more pets until current adoptions are approved)</p>
  <div id="waiting-approval"></div>
  `;
  const adoptedPets = JSON.parse(localStorage.getItem("adoptedPets")) || [];
  adoptedPets.forEach(pet => {
    const adopted = document.createElement("div");
    adopted.className = "adopted-pet";
    adopted.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <h3>${pet.age}</h3>
      <p>👤 Adopted by: <strong>${pet.user}</strong></p>
      <p>📧 Email: ${pet.email}</p>
      <p>📞 Phone: ${pet.phone}</p>
      <p style="color: red;">⏳ Waiting for Approval</p>
    `;
    waitingDiv.appendChild(adopted);
  });
}



