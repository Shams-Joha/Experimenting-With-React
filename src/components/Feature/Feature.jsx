import PropTypes from "prop-types";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
const Feature = ({ feature }) => {
    return (
        <div className="pt-3 flex gap-3 items-center">
            <IoCheckmarkDoneCircleOutline  className="text-2xl"/>
            <p className="text-white">{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;