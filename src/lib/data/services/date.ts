// function qui permet de mettre la date en fr 
export function dateToFr(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("fr-FR");
}

// Format les heures pour l'affichage 
// item.startTime et item.endTime sont des string de la forme "hh:mm:ss"
export function formatHours(item: { startTime: string; endTime: string }) {
    const startTime = item.startTime.split(":");
    const endTime = item.endTime.split(":");
    return `de ${startTime[0]}h${startTime[1]} à ${endTime[0]}h${endTime[1]}`;
}