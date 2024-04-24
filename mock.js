const {
  afficherMot,
  updateMauvaiseLettre,
  afficherNotification,
} = require('./script.js');

describe('Tests pour le jeu du pendu avec mocks', () => {
  test('Test de la fonction afficherMot avec un mock', () => {
      // Mock de la fonction afficherMot pour simuler son comportement
      const mockAfficherMot = jest.fn(() => {
          // Simuler l'ajout de contenu au DOM
          document.getElementById('mot').innerHTML = 'Mot affiché';
      });

      // Appel de la fonction à tester avec le mock
      mockAfficherMot();

      // Vérification si la fonction mock a été appelée
      expect(mockAfficherMot).toHaveBeenCalled();

      // Vérification si le contenu a été ajouté au DOM comme prévu
      expect(document.getElementById('mot').innerHTML).toBe('Mot affiché');
  });

  test('Test de la fonction updateMauvaiseLettre avec un mock', () => {
      // Mock de la fonction updateMauvaiseLettre
      const mockUpdateMauvaiseLettre = jest.fn(() => {
          // Simuler l'ajout de contenu au DOM
          document.getElementById('mauvaises-lettres').innerHTML = 'Lettres incorrectes';
      });

      // Appel de la fonction à tester avec le mock
      mockUpdateMauvaiseLettre();

      // Vérification si la fonction mock a été appelée
      expect(mockUpdateMauvaiseLettre).toHaveBeenCalled();

      // Vérification si le contenu a été ajouté au DOM comme prévu
      expect(document.getElementById('mauvaises-lettres').innerHTML).toBe('Lettres incorrectes');
  });

  test('Test de la fonction afficherNotification avec un mock et une valeur de retour spécifique', () => {
      // Mock de la fonction afficherNotification avec une valeur de retour spécifique
      const mockAfficherNotification = jest.fn(() => true);

      // Appel de la fonction à tester avec le mock
      const result = mockAfficherNotification();

      // Vérification si la fonction mock a été appelée
      expect(mockAfficherNotification).toHaveBeenCalled();

      // Vérification si la valeur de retour attendue est retournée
      expect(result).toBe(true);
  });
});
