export const getBackgroundImg = () => {
  const num = Math.floor(Math.random() * 24);
  return `https://raw.githubusercontent.com/brewcold/blog/refs/heads/main/_backgrounds/brewcold-bg-${num}.png`;
};
