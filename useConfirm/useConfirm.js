export const useConfirm = (question, callback) => {
  const confirmAction = () => {
    if (confirm(question)) {
      callback();
    }
  };
  return confirmAction;
};
