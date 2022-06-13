import useFirebase from "./useFirebase";

const useAuth = () => {
   const auth = useFirebase();
   return auth;
}

export default useAuth;