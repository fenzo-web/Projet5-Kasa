const fetchLocation = async () => {
  try {
    const response = await fetch("/location.json");

    // Vérifie si la réponse est correcte
    if (response.ok) {
      const result = await response.json();
      return result; // Retourne les données si la réponse est valide
    } else {
      throw new Error(
        "Erreur lors du chargement des données : " + response.statusText
      );
    }
  } catch (error) {
    // Capture toute erreur
    console.error("Erreur dans fetchLocation :", error);
    return null; // Tu peux choisir de retourner `null` ou une valeur par défaut en cas d'erreur
  }
};
export { fetchLocation };
