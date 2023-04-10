export function calculateCalories(
  proteins: number,
  carbs: number,
  fats: number,
): number {
  return proteins * 4 + carbs * 4 + fats * 9;
}
