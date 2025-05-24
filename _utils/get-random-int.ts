const randomInt = (num: number) => Math.floor(Math.random() * num)

export const getRandomInt = (range: [number, number]): number => {
  const [low, high] = range[0] < range[1] ? [range[0], range[1]] : [range[1], range[0]]

  return randomInt(high - low) + low
}
