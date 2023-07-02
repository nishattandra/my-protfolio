import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} | NISHAT JAHAN`;
    }, [title])
}

export default useTitle;