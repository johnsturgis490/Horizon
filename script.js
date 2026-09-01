:root {
    --bg: #0f172a;
    --card: #1e293b;
    --accent: #38bdf8;
    --text: #f8fafc;
}

body {
    font-family: sans-serif;
    background-color: var(--bg);
    color: var(--text);
    margin: 0;
}

header {
    background: #1e293b;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

header h1 span { color: var(--accent); }

#searchInput {
    padding: 12px 20px;
    width: 300px;
    border-radius: 25px;
    border: none;
    background: #334155;
    color: white;
    margin-top: 15px;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    padding: 40px;
}

.game-card {
    background: var(--card);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    text-align: center;
    border: 1px solid #334155;
}

.game-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.game-card img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}

/* Modal / Game Player Styling */
.modal {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
}

.modal-content {
    width: 90%;
    max-width: 1000px;
    margin: 20px auto;
    background: var(--card);
    border-radius: 10px;
}

.modal-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;
}

#closeBtn {
    background: none; border: none; color: white;
    font-size: 30px; cursor: pointer;
}

.iframe-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 ratio */
    height: 0;
}

.iframe-container iframe {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
}

.modal-footer { padding: 15px; text-align: center; }

.modal-footer button {
    background: var(--accent);
    border: none; padding: 10px 20px;
    border-radius: 5px; cursor: pointer; font-weight: bold;
}