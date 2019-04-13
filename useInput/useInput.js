export function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);
  function onChange(event) {
    const {
      target: { value: newValue }
    } = event;
    let shouldUpdate = true;
    if (typeof validator === "function") {
      shouldUpdate = validator(newValue);
    }
    if (shouldUpdate) {
      setValue(newValue);
    }
  }
  return {
    props: { value, onChange },
    utils: { setValue }
  };
}
