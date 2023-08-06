import { useQuery } from "@tanstack/react-query";

const useServices = () => {
    // const [services, setServices] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => {
    //         setServices(data);
    //         setLoading(false)
    //     })
    // }, [])

    const {data: services = [], isLoading: loading} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/services');
            return res.json();
        }
    })
    return [services, loading]

}

export default useServices;