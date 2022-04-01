import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchgifs = (  categories ) => {


const [state, setState] = useState({
    data: [],
    loading: true
});

useEffect( ( )=> {

    getGifs( categories )
    .then( imgs=> {
       setTimeout(() => {
        setState({
            data: imgs,
            loading: false
        })
       }, 1500);
    })

}, [ categories ] )



return state;

}