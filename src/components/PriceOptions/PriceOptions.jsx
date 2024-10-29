
import PriceOption from "./PriceOption";
const PriceOptions = () => {


    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to all gym equipment",
                "Locker access",
                "One complimentary fitness assessment",
                "Free water bottle on sign-up"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to all gym equipment",
                "Locker access",
                "Two complimentary fitness assessments",
                "Access to group fitness classes",
                "10% discount on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 69.99,
            "features": [
                "Access to all gym equipment",
                "Locker access with towel service",
                "Monthly fitness assessments",
                "Unlimited access to group fitness classes",
                "15% discount on personal training sessions",
                "Free gym merchandise upon joining"
            ]
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": 99.99,
            "features": [
                "24/7 access to all gym facilities",
                "Private locker with towel service",
                "Weekly personal training sessions",
                "Unlimited group fitness and yoga classes",
                "Exclusive access to VIP lounge",
                "20% discount on all products and services"
            ]
        }
    ]



    return (
        <div className="space-y-2 m-12">
            <h2 className="text-5xl"> Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;