
const API_URL = 'https://ghibliapi.vercel.app/films';
const searchInput = document.getElementById('searchInput');
const toggleDarkBtn = document.getElementById('toggleDark');
const sortBtn = document.getElementById('sortBtn');
const filmsList = document.getElementById('filmsList');

let films = [];         
let isSortedAsc = true;  

async function fetchFilms() {
  try {
    const res = await fetch(API_URL);
    films = await res.json();
    renderFilms(films);
  } catch (err) {
    console.error("Erreur de fetch :", err);
    filmsList.textContent = "Impossible de charger les films.";
  }
}

function renderFilms(data) {
  const html = data.map(film => `
    <li class="film" data-id="${film.id}">
      <h2>${film.title} (${film.release_date})</h2>
      <p>${film.description.slice(0, 200)}…</p>
    </li>
  `).join('');
  filmsList.innerHTML = html;
}

function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = films.filter(f => f.title.toLowerCase().includes(query));
  renderFilms(filtered);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function handleSort() {
  const sorted = [...films].sort((a, b) => {
    return isSortedAsc
      ? a.release_date - b.release_date
      : b.release_date - a.release_date;
  });
  isSortedAsc = !isSortedAsc;
  sortBtn.textContent = isSortedAsc ? 'Trier par année ↓' : 'Trier par année ↑';
  renderFilms(sorted);
}

function attachHoverEvents() {
  filmsList.addEventListener('mouseover', e => {
    const li = e.target.closest('.film');
    if (li) {
      li.style.background = '#ffd';
      setTimeout(() => li.style.background = '', 300);
    }
  });
}

searchInput.addEventListener('input', handleSearch);
toggleDarkBtn.addEventListener('click', toggleDarkMode);
sortBtn.addEventListener('click', handleSort);
attachHoverEvents();

fetchFilms();
