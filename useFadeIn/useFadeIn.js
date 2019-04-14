export const useFadeIn = (seconds, delay = 0) => {
  if (typeof seconds !== "number" || typeof delay !== "number") {
    return;
  }

  const element = useRef();
  const fadeElementIn = () => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${seconds}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  };
  useEffect(() => {
    fadeElementIn();
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
