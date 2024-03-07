// Importez les fonctions à tester
const { afficherMot, updateMauvaiseLettre, afficherNotification } = require('./douaa'); // Remplacez 'votreFichier' par le nom de votre fichier contenant les fonctions à tester

describe('Test des fonctions du jeu de devinette de mots', () => {
    // Test de la fonction afficherMot
    test('Test de la fonction afficherMot', () => {
        // Définir l'état initial
        const motE1 = document.createElement('div');
        motE1.id = 'mot';
        document.body.appendChild(motE1);

        const bonneslettresArr = ['a', 'e'];

        // Exécuter la fonction à tester
        afficherMot(bonneslettresArr);

        // Vérifier si l'affichage est correct
        expect(motE1.innerHTML).toBe('<span class="lettre"></span><span class="lettre">a</span><span class="lettre"></span><span class="lettre">e</span>');
    });

    // Test de la fonction updateMauvaiseLettre
    test('Test de la fonction updateMauvaiseLettre', () => {
        // Définir l'état initial
        const mauvaiseLettres = document.createElement('div');
        mauvaiseLettres.id = 'mauvaises-lettres';
        document.body.appendChild(mauvaiseLettres);

        const figurePartie = document.createElement('div');
        figurePartie.className = 'figure-partie';
        document.body.appendChild(figurePartie);

        const mauvaisesLettresArr = ['x', 'y', 'z'];

        // Exécuter la fonction à tester
        updateMauvaiseLettre(mauvaisesLettresArr);

        // Vérifier si l'affichage est correct
        expect(mauvaiseLettres.innerHTML).toBe('<span>x</span><span>y</span><span>z</span>');
        expect(figurePartie.style.display).toBe('block');
    });

    // Test de la fonction afficherNotification
    test('Test de la fonction afficherNotification', () => {
        // Définir l'état initial
        const notification = document.createElement('div');
        notification.id = 'notification-contenant';
        document.body.appendChild(notification);

        // Exécuter la fonction à tester
        afficherNotification();

        // Vérifier si la notification est affichée
        expect(notification.classList.contains('afficher')).toBe(true);
    });
});

// Test des événements de frappe de clavier et de clic sur le bouton de rejouer
describe('Test des événements', () => {
    // Mock de la fenêtre pour simuler l'événement de frappe de clavier
    beforeAll(() => {
        Object.defineProperty(window, 'addEventListener', {
            value: jest.fn(),
            writable: true
        });
    });

    // Test de l'événement de frappe de clavier
    test('Test de l\'événement de frappe de clavier', () => {
        // Exécuter le code pour écouter l'événement de frappe de clavier
        require('./douaa'); // Remplacez 'votreFichier' par le nom de votre fichier contenant les événements

        // Vérifier si l'événement de frappe de clavier est correctement ajouté à la fenêtre
        expect(window.addEventListener).toHaveBeenCalled();
    });

    // Test de l'événement de clic sur le bouton de rejouer
    test('Test de l\'événement de clic sur le bouton de rejouer', () => {
        // Définir l'état initial
        const rejouerBtn = document.createElement('button');
        rejouerBtn.id = 'input';
        document.body.appendChild(rejouerBtn);

        // Exécuter le code pour écouter l'événement de clic sur le bouton de rejouer
        require('./douaa'); // Remplacez 'votreFichier' par le nom de votre fichier contenant les événements

        // Simuler un clic sur le bouton de rejouer
        rejouerBtn.click();

        // Insérer des assertions supplémentaires si nécessaire
    });
});
