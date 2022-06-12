import { useLocation } from "react-router-dom"

const useRouterPath = () => {
    const { pathname } = useLocation();

    return pathname.replace('/', '')

}

export default useRouterPath