export const useNotification = (title, opts) => {
  if (!("Notification" in window)) {
    return;
  }
  const showNotification = () => {
    useCallback(() => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then(permission => {
          if (permission !== "granted") {
            return;
          } else {
            return new Notification(title, opts);
          }
        });
      } else {
        return new Notification(title, opts);
      }
    }, []);
  };
  return showNotification;
};
