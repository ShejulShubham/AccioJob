export default function PropDrilling(prop){

    return (
        <Child1 prop={prop} />
    )
};

function Child1(prop){

    return <Child2 >{prop}</Child2>
}

function Child2({children}){

    return <Child3 children={children} />
}

function Child3({children}){

    return <p>{children.prop.message}</p>
}