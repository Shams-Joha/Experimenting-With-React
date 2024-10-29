import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-cyan-400 p-4 rounded-xl pl-10 flex flex-col justify-between">
            <h2 className="">
                <span className="text-7xl">{price}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            <div className="mb-12">
                {
                    features.map((feature, indx) => <Feature key={indx} feature={feature}></Feature>)
                }
            </div>

            <button className="btn w-auto ">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;