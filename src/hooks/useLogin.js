import { useState } from "react"
import { toast } from "react-hot-toast"
import {useAuthContext} from "../context/AuthContext"


const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext();


    const login = async (info) => {
        const success = handleInputErrors(email, password);
		if (!success) return;

        setLoading(true)

        try {
            const res = await fetch("https://appsala-backend.netlify.app/.netlify/functions/index/api/admin/login", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info)
            })
            const data = await res.json()

            if (data.status === false) {
                toast.error(data.data)
            } else {
                toast.success("Logged In")
            }

            localStorage.setItem("userInfo", JSON.stringify(data.data))
            setAuthUser(data.data);

        } catch (err) {
            toast.error(err.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading , login}
}

export default useLogin

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}