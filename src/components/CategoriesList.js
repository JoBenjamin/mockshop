import { useSelector } from "react-redux"

export const CategoriesList = () => {
    
    const productsByCategory = useSelector(state=>state.products)
    const handleClick = () => {
        console.log(productsByCategory);
    }

    const renderCategories = () => {
        const names = Object.keys(productsByCategory);
        console.log(names);
        return names.map((item, index)=>{
            return <li key={index}>{item}</li>
        });
    }

    return (<div><ul>{productsByCategory ? renderCategories() : 'LOADING'}</ul><button onClick={handleClick}>list stuff</button></div>)
}
