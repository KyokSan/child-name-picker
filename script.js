const remainingCount = document.getElementById("remaining-count");

// List of names
const names = [
  "Ada", "Adel", "Adela", "Adele", "Adelia", "Adelina", "Adriana", "Adrianna",
  "Agata", "Agnieszka", "Aleksandra", "Alia", "Alicja", "Alina",
  "Alisa", "Amanda", "Amelia", "Amina", "Amira", "Ana", "Anastazja", "Aneta", "Angelika", "Angelina", "Aniela", "Anita",
  "Anna", "Antonia", "Antonina", "Apolonia", "Aria", "Ariadna", "Ariana", "Arianna", "Arina",
  "Aurelia", "Aurora", "Barbara", "Beata", "Bianka", "Blanka", "Bogna",
  "Bogumiła", "Bożena", "Cecylia", "Celina", "Dagmara", "Dalia", "Daniela", "Danuta", "Daria", "Darina", "Daryna", "Diana",
  "Dobrawa", "Dobrosława", "Dominika", "Dorota", "Edyta", "Elena", "Eleonora", "Eliana", "Elif",
  "Elina", "Eliza", "Elżbieta", "Emili", "Emilia", "Emma", "Erika", "Estera", "Ewa", "Ewelina", "Fatima",
  "Faustyna", "Felicja", "Flora", "Florentyna", "Florianna", "Franciszka", "Gabriela",
  "Gabriella", "Gaia", "Gaja", "Gloria", "Gracja", "Halina", "Halszka", "Hana", "Hanna",
  "Helena", "Hiacynta", "Honorata", "Ida", "Idalia", "Iga", "Ilona", "Ina", "Ines",
  "Inez", "Inga", "Inka", "Irena", "Irmina", "Iryna", "Iwona", "Iza", "Izabela",
  "Izabella", "Jadwiga", "Jagna", "Jagoda", "Jana", "Janina", "Jasmin", "Jasmina", "Jaśmina",
  "Joanna", "Jolanta", "Jowita", "Józefina", "Judyta", "Julia", "Julianna", "Julita",
  "Justyna", "Kaja", "Kalina", "Kamila", "Karina", "Karolina", "Kasandra", "Katarzyna",
  "Kaya", "Kayla", "Kiara", "Kinga", "Kira", "Klara", "Klaudia",
  "Klementyna", "Konstancja", "Kornelia", "Krystyna", "Ksenia", "Laila", "Lara",
  "Larysa", "Laura", "Layla", "Lea", "Leia", "Leila", "Lena", "Leokadia", "Leonia", "Letycja",
  "Lia", "Liana", "Lidia", "Lila", "Lili", "Lilia", "Liliana", "Lilianna", "Lilla",
  "Lina", "Lisa", "Liwia", "Lucia", "Lucy", "Lucyna", "Luiza",
  "Lukrecja", "Luna", "Łucja", "Magda", "Magdalena", "Maia", "Maja", "Majka",
  "Małgorzata", "Malina", "Malwina", "Marcela", "Marcelina", "Marcjanna", "Margarita", "Maria",
  "Mariam", "Mariana", "Marianna", "Marietta", "Marika", "Marina", "Marlena", "Marta",
  "Martyna", "Matylda", "Maya", "Melania", "Melisa", "Melissa", "Mia", "Michalina",
  "Miia", "Mija", "Mila", "Milana", "Milena", "Miłosława", "Mira", "Mirella",
  "Miriam", "Mirosława", "Miya", "Monika", "Nadia", "Nadzieja",
  "Naomi", "Nastia", "Natalia", "Natasza", "Nel", "Nela", "Nelia", "Nella", "Nicole", "Nika",
  "Nikol", "Nikola", "Nina", "Noelia", "Noemi", "Ofelia", "Oktawia", "Ola",
  "Olena", "Olga", "Olimpia", "Oliwia", "Otylia", "Pamela", "Patrycja",
  "Paula", "Paulina", "Pola", "Polina", "Rita", "Roksana", "Roma", "Rose", "Róża",
  "Rozalia", "Sabina", "Sabrina", "Samanta", "Sandra", "Sara", "Sarah", "Selena", "Sofi",
  "Sofia", "Sofiia", "Sofija", "Sofiya", "Solomia", "Solomiia", "Solomija", "Solomiya", "Sonia",
  "Sophia", "Sophie", "Stanisława", "Stefania", "Stella", "Sylwia", "Tamara", "Teona", "Teresa",
  "Tina", "Tola", "Tulia", "Urszula", "Valeria", "Vanessa",
  "Varvara", "Veronica", "Veronika", "Victoria", "Viktoria", "Viktoriia", "Violetta", "Vira",
  "Vivien", "Vivienne", "Waleria", "Wanda", "Wanessa", "Weronika", "Wiktoria",
  "Wioletta", "Zoe", "Zofia", "Zoja", "Zoriana", "Zosia", "Zoya", "Zuza", "Zuzanna"
];

let currentName = null;
let remainingNames = [...names];

// Get elements
const name1Button = document.getElementById("name1");
const name2Button = document.getElementById("name2");
const congratsDiv = document.getElementById("congrats");
const finalNameDiv = document.getElementById("final-name");
const namePickerDiv = document.getElementById("name-picker");

// Utility to get a random name from the pool
function getRandomName(exclude) {
  const filtered = remainingNames.filter(n => n !== exclude);
  if (filtered.length === 0) return null;
  const index = Math.floor(Math.random() * filtered.length);
  return filtered[index];
}

// Render name options
function render() {
  if (!currentName) {
    // Pick the first name
    currentName = getRandomName(null);
    removeNameFromPool(currentName);
  }

  const newName = getRandomName(currentName);

  // Update remaining count
  remainingCount.textContent = `Pozostało imion do porównania: ${remainingNames.length}`;

  if (!newName) {
    // No more names to compare against
    showFinalName(currentName);
    return;
  }

  name1Button.textContent = currentName;
  name2Button.textContent = newName;

  name1Button.onclick = () => {
    // Keep currentName, remove newName
    removeNameFromPool(newName);
    render();
  };

  name2Button.onclick = () => {
    // Replace currentName, remove old currentName
    removeNameFromPool(currentName);
    currentName = newName;
    render();
  };
}

// Helper to remove a name from the pool
function removeNameFromPool(name) {
  const index = remainingNames.indexOf(name);
  if (index > -1) {
    remainingNames.splice(index, 1);
  }
}

// Final name display
function showFinalName(name) {
  namePickerDiv.style.display = "none";
  congratsDiv.classList.remove("hidden");
  finalNameDiv.textContent = name;
  launchConfetti();
}

// Confetti animation
function launchConfetti() {
  const duration = 4000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Start the app
render();
