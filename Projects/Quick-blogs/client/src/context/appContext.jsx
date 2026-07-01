import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export function AppContextProvider({ children }) {

    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    async function fetchBlogs() {
        try {
            const result = await axios.get('/api/blog/all');
            const data = result.data;

            if (data.success) {
                setBlogs(data.data);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchBlogs();
        const token = localStorage.getItem("token");
        if (token) {
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `${token}`
        }
    }, []);

    const value = { axios, navigate, token, setToken, blogs, setBlogs, input, setInput };

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>

}

export function useAppContext() {
    return useContext(AppContext);
}