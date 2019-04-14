export const useTabs = (list, initial) => {
  const [selectedIndex, setSelectedIndex] = useState(initial);
  return {
    currentItem: list[selectedIndex],
    index: selectedIndex,
    setIndex: setSelectedIndex
  };
};
