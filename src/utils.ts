export const findMatch = (dropdownValue: string, data: string[]) => {
  return data.filter(el => el.includes(dropdownValue));
}
