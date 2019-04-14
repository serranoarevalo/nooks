export const usePreventLeave = () => {
  const preventLeave = event => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () =>
    window.addEventListener("beforeunload", preventLeave);

  const disablePrevent = () =>
    window.removeEventListener("beforeunload", preventLeave);

  return { enablePrevent, disablePrevent };
};
