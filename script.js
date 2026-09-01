let gamesData = [];

const gameGrid = document.getElementById('gameGrid');
const gameView = document.getElementById('gameView');
const gameFrame = document.getElementById('gameFrame');
const backBtn = document.getElementById('backBtn');
const searchBar = document.getElementById('searchBar');

// 1. Fetch the data from JSON file
fetch('games.json')
    .then(response => response.json())
    .then(data => {
        gamesData = data;
        displayGames(gamesData);
    })
    .catch(err => console.error("Error loading games:", err));

// 2. Function to create game cards
function displayGames(games) {
    gameGrid.innerHTML = ''; // Clear current grid
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        card.onclick = () => loadGame(game.url);
        gameGrid.appendChild(card);
    });
}

// 3. Search functionality
searchBar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = gamesData.filter(game => 
        game.title.toLowerCase().includes(term)
    );
    displayGames(filtered);
});

// 4. Load game into iframe
function loadGame(url) {
    gameGrid.classList.add('hidden');
    gameView.classList.remove('hidden');
    gameFrame.src = url;
}

// 5. Back button logic
backBtn.onclick = () => {
    gameGrid.classList.remove('hidden');
    gameView.classList.add('hidden');
    gameFrame.src = ''; // Stop the game when leaving
};
