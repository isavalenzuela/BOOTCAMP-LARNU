import UserContext from "../context/UserContext";
import { useContext } from 'react';

const useUser = () => useContext(UserContext);
export default useUser;