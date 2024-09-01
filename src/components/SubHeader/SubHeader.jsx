import './SubHeader.css'
import { Link } from "react-router-dom";
import Arrow from '../../assets/Arrow';

const SubHeader = () => {
    return (
        <div className="sub-header-container">
            <div className="sub-header-inner">
                <div className="nav-list-container">
                    <div className="all-category">
                        <span>ALL CATEGORIES</span>
                        <span className="category-down-arrow">
                            <button>
                                <Arrow />
                            </button>
                        </span>
                    </div>
                    <div className="individual-categories">
                        <ul className="categroy-list">
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>Cars</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>MotorCycles</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>Mobile Phones</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>For Sale: Houses & Apartments</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>Scooters</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>Commercial & Other Vehicles</Link>
                            </li>
                            <li className="list-item">
                                <Link className="item-link" to={"#"}>For Rent: Houses & Apartments</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;