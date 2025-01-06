// Sélectionner le bouton, l'icône et l'élément <html> ou <body>
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');
const htmlElement = document.documentElement;

// Appliquer le thème actuel si disponible
if (currentTheme) {
  htmlElement.setAttribute('data-theme', currentTheme);
  themeIcon.classList = currentTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'; // Mettre l'icône appropriée
}

// Ajouter un événement au bouton pour basculer le thème
themeToggleButton.addEventListener('click', () => {
  const newTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Sauvegarder le thème dans le localStorage

  // Changer l'icône selon le thème
  if (newTheme === 'dark') {
    themeIcon.classList = 'fas fa-moon'; // Icône de lune pour le mode sombre
  } else {
    themeIcon.classList = 'fas fa-sun'; // Icône de soleil pour le mode clair
  }
});


