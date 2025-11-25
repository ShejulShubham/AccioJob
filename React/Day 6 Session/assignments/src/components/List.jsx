export default function List({items, children}){

    return (
        <>
        <h2>{children}</h2>
        <ul>
            {items ? (
                items.map((item, index)=>(
                    <li key={index} >{item}</li>
                ))
            ) : ("No items found!")}

        </ul>
        </>
    )
}