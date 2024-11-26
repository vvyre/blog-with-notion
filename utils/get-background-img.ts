export const getBackgroundImg = () => {
  const r = Math.random() * 26 - 0.00000000001;
  const num = r < 0 ? 0 : Math.floor(r);
  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num}.png`;
};
