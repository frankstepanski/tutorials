import { useRouter } from 'next/router';
import Link from 'next/link';

const CoffeeStore = () => {
    const router = useRouter();
    //console.log(router);
    
    return (
        <>
        <h1>My Coffee Store {router.query.id}</h1>
            <Link href ="/">back to home
            </Link>
        </>
        );
    
}   
export default CoffeeStore;
