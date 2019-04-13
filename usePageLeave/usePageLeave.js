export const usePageLeave = onPageLeave => {
  if (!onPageLeave || typeof onPageLeave !== "function") {
    return;
  }
  const handleMouseOut = event => {
    const { clientY } = event;
    if (clientY < 0) {
      onPageLeave();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseOut);
    return () => document.removeEventListener("mouseleave", handleMouseOut);
  }, []);
};
