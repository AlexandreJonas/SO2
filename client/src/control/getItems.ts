 import Item from "../model/item"
//  Promise<{} | null>
 
 const query = async() =>  {
    try 
    {
        const response = await fetch(`http://localhost:8080/items`)
        const jsonData = await response.json()
        return jsonData
    } catch (error:any) {
        console.log(error.message)
        return ''
    }
}

const getItems = () => {
    const Items:any = query()
    return Items
}

export default getItems;