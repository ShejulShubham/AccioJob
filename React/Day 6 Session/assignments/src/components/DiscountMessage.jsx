export default function DiscountMessage(){
    const isPremiumUser = true;

    return (
        <strong>
        {isPremiumUser && (<p>You get 50% discount!</p>)}
        {!isPremiumUser && (<p>Upgrade to premium discounts!</p>)}
        
        </strong>
    )
}