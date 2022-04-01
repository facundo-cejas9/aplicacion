 export const getGifs = async( categories ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categories ) }&limit=25&api_key=YYFscugXXa1UI3qNQiyDIKAVatvrZCNb`

    const respuesta = await fetch( url )

    const {data} = await respuesta.json()

    const gifs = data.map( imagen => {
        return {
            id: imagen.id,
            title: imagen.title,
            url: imagen.images.original.url
            
        }
    })
    
   return gifs;
    
}