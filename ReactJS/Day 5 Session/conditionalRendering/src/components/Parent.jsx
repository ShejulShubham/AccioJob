

export default function Parent(){

    return (
        <Dashboard />
    )
};


function Dashboard(){

    const user = { name: "Shubham", age: 22};

    return (
        <Sidebar user={user} />
    )
};


function Sidebar({user}){

    return (
        <UserInfo user={user} />
    )
};

function UserInfo({user}){

    return (
        <Avatar user={user} />
    )
}

function Avatar({user}){
    return (
        <h1>{user.name}, {user.age}</h1>
    )
}