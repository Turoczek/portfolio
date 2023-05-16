const Licz = (arr: Array<number>) => {
  const grouped: Array<[number, number]> = [];
  const used = [];
  for (let i = 0; i < arr.length; i += 2) {
    grouped.push([arr[i], arr[i + 1]]);
  }

  for (let i = 0; i < grouped.length; i += 1) {
    const reversed = [grouped[i][1], grouped[i][0]];
    for (let j = i + 1; j < grouped.length; j += 1) {
      if (reversed[0] === grouped[j][0] && reversed[1] === grouped[j][1]) {
        used.push(grouped[i], grouped[j]);
        break;
      }
    }
  }
  return {
    used,
    grouped,
  };
};

export const Moja = (arr: Array<number>) => {
  const arrGrouped: Array<[number, number]> = [];
  for (let i = 0; i < arr.length; i += 2) {
    arrGrouped.push([arr[i], arr[i + 1]]);
  }
  const { used } = Licz(arr);

  const resultPairs = arrGrouped.filter(
    (item) =>
      !used.some(
        (usedItem) => usedItem[0] === item[0] && usedItem[1] === item[1]
      )
  );
  const result: Array<number> = [];
  if (resultPairs.length === 0) return "yes";
  resultPairs.forEach((el) => {
    result.push(el[0]);
    result.push(el[1]);
  });
  console.log(result.join());
};
