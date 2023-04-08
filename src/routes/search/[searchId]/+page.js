export const load = async ({fetch,params}) => {
    const fetchData = async (name) => {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const data = await res.json();
        return data;
    }
    return{
        props:fetchData(params.searchId)
    }
}