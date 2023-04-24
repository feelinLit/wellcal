export function calculateCalories(
  proteins: number,
  carbs: number,
  fats: number,
): number {
  return proteins * 4 + carbs * 4 + fats * 9;
}

export function getTime(date: string): string {
  const d = date ? new Date(date) : new Date();
  return d.getHours() + ':' + d.getMinutes();
}

export function showHumanDate(date: string): string {
  return new Date(date).toDateString();
}

export function getCurrentTime(): string {
  return new Date().toString();
}
