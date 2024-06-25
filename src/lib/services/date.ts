/*
* @/lib/services/date.ts
* Services pour formater les dates
* Code: @aurelienLRY
*/

/**
 * Formate la date pour l'affichage
 * @param {string} date - La date à formater
 * @returns {string} - La date formatée
 */
export function dateToFr(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("fr-FR");
}

/**
 * Formate les heures pour l'affichage
 * @param {Object} item - L'objet contenant les heures de début et de fin
 * @param {string} item.startTime - L'heure de début
 * @param {string} item.endTime - L'heure de fin
 * @returns {string} - Les heures formatées
 */
export function formatHours(item: { startTime: string; endTime: string }) {
    const startTime = item.startTime.split(":");
    const endTime = item.endTime.split(":");
    return `de ${startTime[0]}h${startTime[1]} à ${endTime[0]}h${endTime[1]}`;
}