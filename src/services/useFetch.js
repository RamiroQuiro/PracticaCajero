const urlFetchInsert='http://localhost:3000/api/cajeros/instert'


const fetchMSSQL=async (body)=>{
    const getQuery=await fetch(urlFetchInsert,{
        method:'PUT' ,
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body
    })
    return getQuery
}


const fetchQueryCajero=async (id)=>{
    const urlFetchQuery='http://localhost:3000/api/cajeros/'+id
    try {
        const queryGet=await fetch(urlFetchQuery,{
            cache:"no-cache"
        })
        return queryGet.json()
    } catch (error) {
        console.log(error)
    }
}
const urlFetchQueryAllCajeros='http://localhost:3000/api/hello'
const useFetchQueryCajeroAllCajeros=async ()=>{
    try {
        const queryGet=await fetch(urlFetchQueryAllCajeros)
        return queryGet.json()
    } catch (error) {
        console.log(error)
    }
}

export {fetchMSSQL,fetchQueryCajero,useFetchQueryCajeroAllCajeros}
