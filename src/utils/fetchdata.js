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

const fetchLocationById = async (id) => {
  try {
    const locations = await fetchLocation();
    // Ici, on compare les IDs comme des chaînes de caractères
    const location = locations.find(
      (location) => location.id === id // Comparaison en tant que chaîne
    );
    if (location) {
      return location;
    } else {
      throw new Error("L'appartement n'est pas trouvé ");
    }
  } catch (error) {
    return error;
  }
};

export { fetchLocation, fetchLocationById };
