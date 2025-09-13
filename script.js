const pets = {
  dog: [
    { name: "Scooby (Labrador)", img: "images/labrador.png", age : 4 },
    { name: "Bella (German Shepherd)", img: "images/german_sheph.png" , age : 1},
    { name: "Rocky (Beagle)", img: "images/beagle.png", age : 1 }
  ],
  cat: [
    { name: "Santraa (Persian)", img: "images/persian_cat.png" , age : 2 },
    { name: "Luna (Siamese)", img: "images/siamese_cat2.png" , age : 3 },
    { name: "Munni (Bombay Cats)", img: "images/munni.png" , age : 1  },
    { name: "Oreo (Maine Coon)", img: "images/maine_coon_cat3.png" , age : 2  }
  ],
  parrot: [
    { name: "Coco (Macaw)", img: "images/macaw.png", age : 2 },
    { name: "Kiwi (Cockatiel)", img: "images/cockatiel.png", age : 1 },
    { name: "Rio (African Grey)", img: "images/africa_grey.png", age : 2 }
  ],
  rabbit: [
    { name : "Stapsee (Dutch Rabbit)" , img: "images/dutchrabbit.png", age : 1 },
    { name : "Conna (American Rabbit)" , img: "images/american_rabbit.png", age : 1 }
  ],
  hamster: [
    { name : "Stuart (Dwarf)" , img : "images/hamster.png", age : 2 },
    { name : "Goldee (Golden Hamster)" , img : "images/golden_hamster.png", age : 2 },
    { name : "Skyler (Winter white)" , img : "images/white_hamster.png", age : 2 }
  ]
};

const USERNAME = "manthan_terse";
const PASSWORD = "565758";


document.getElementById("loginb").addEventListener("click", () => {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (user === USERNAME && pass === PASSWORD) {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("dashboardPage").classList.add("active");
  } else {
    errorMsg.textContent = "❌ Invalid Username or Password!";
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
      <button onclick="adoptPet('${pet.name}')">Adopt Me</button>
    `;
    listDiv.appendChild(bio); 
  });

  petsSection.appendChild(listDiv);
}

function adoptPet(name) {
  alert(`You adopted ${name}!`);
}
