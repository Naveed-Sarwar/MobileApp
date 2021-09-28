import { useEffect, useState } from "react";
import Axios from "axios"
export function FetchProducts() {

    const [product, setProducts] = useState([]);
    const [load, setLoading] = useState(false);
    // using fetch Builting javascript
        async function Pro() {
            try{
                setLoading(true);
            let ping = await fetch('https://fakestoreapi.com/products')
            let Store = await ping.json();
            setProducts(Store);}
            catch(err){
    console.log("error",err);
            }
            finally{
                setLoading(false)
            }
    }
    // using Axios get post delete update
    // async function Pro() {
    //     try {
    //         setLoading(true)

    //         let mns = await Axios.get('https://fakestoreapi.com/products')

            
    //         setProducts(mns);
    //     }
    //     catch (err) {
    //         console.log("Error");
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }

    useEffect(() => {
        Pro()
    },500)
    return [product,load];
}
