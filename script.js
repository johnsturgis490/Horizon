const gamesData = [
    {
        "id": "game1",
        "title": "Google Mirror",
        "thumbnail": "https://via.placeholder.com/150",
        "url": "https://www.google.com/search?igu=1"
    },
    {
        "id": "game2",
        "title": "Example Game",
        "thumbnail": "https://via.placeholder.com/150",
        "url": "https://example.com"
    }
];

const gameGrid = document.getElementById('gameGrid');
const gameView = document.getElementById('gameView');
const gameFrame = document.getElementById('gameFrame');
const backBtn = document.getElementById('backBtn');
const searchBar = document.getElementById('searchBar');

// Function to display the cards
function displayGames(games) {
    gameGrid.innerHTML = ''; 
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        card.onclick = () => {
            gameGrid.classList.add('hidden');
            gameView.classList.remove('hidden');
            gameFrame.src = game.url;
        };
        gameGrid.appendChild(card);
    });
}

// Initial display
displayGames(gamesData);

// Search functionality
searchBar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = gamesData.filter(game => 
        game.title.toLowerCase().includes(term)
    );
    displayGames(filtered);
});

// Back button
backBtn.onclick = () => {
    gameGrid.classList.remove('hidden');
    gameView.classList.add('hidden');
    gameFrame.src = '';
};
