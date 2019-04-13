export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  function updateTitle() {
    const titleHtml = document.querySelector("title");
    titleHtml.innerText = title;
  }
  useEffect(() => {
    updateTitle();
  }, [title]);
  return setTitle;
};
