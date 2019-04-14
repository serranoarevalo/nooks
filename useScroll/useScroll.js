export const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });
  const handleScroll = () => {
    setState({
      x: window.scrollX,
      y: window.scrollY
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return state;
};
