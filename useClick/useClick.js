const useClick = onClick => {
  if (!onClick || typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  const handleClick = event => {
    event.preventDefault();
    onClick();
  };

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", handleClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return element;
};
