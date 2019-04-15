import defaultAxios from "axios";

export const useAxios = ({ axiosInstance = defaultAxios, options }) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(new Date());
  };
  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInastance(options)
      .then(response =>
        setState({
          ...state,
          data: response,
          loading: false
        })
      )
      .catch(error =>
        setState({
          ...state,
          error,
          loading: false
        })
      );
  }, [trigger]);
  return { ...state, refetch };
};
