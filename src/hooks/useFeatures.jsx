import { useQuery } from "@tanstack/react-query";

const useFeatures = () => {
    
    const {data: features = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['features'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/features');
            return res.json();
        }
    })
    return [features, loading, refetch]

}

export default useFeatures;