import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useProduct = () => {
    const {user, loading} = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`https://jerins-parlour-server-five.vercel.app/features?email=${user.email}`, { headers: {
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json()
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/products?email=${user?.email}`)
            return res.data;
        },
    })

    return [products, refetch]

}

export default useProduct;