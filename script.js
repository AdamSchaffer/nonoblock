const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});
document.querySelector('.acceptButton').addEventListener('click', function() {
    document.querySelector('.card').classList.add('hidden');
    document.getElementById('contentWrapper').classList.add('unblurred');
});
