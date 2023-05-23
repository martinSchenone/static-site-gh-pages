export const load = async ({fetch}) => {
    const fetchData = async () => {
       try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await res.json();
        if(res.ok){
            return data;
        }
        
       } catch (error) {
        console.error(error)
       }
    }
    return{
        props:fetchData()
    }
}