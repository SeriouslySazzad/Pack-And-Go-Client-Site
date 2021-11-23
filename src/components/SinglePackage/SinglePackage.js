import { useEffect, useState } from "react";

const usePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://serene-hamlet-40607.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
            
    }, []);
    return { packages }
}

export default usePackages;