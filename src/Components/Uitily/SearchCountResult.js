import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../images/sort.png'
const SearchCountResult = ({ title ,onClick}) => {
    const handler = () => {

    }
    const clickMe = (key) => {
        localStorage.setItem("sortType", key)
        onClick();
    }
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex ">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="mx-1">
                            <img
                                width="20px"
                                height="20px"
                                className="ms-1"
                                src={sort}
                                alt=""
                            />
                     Trier par
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
                    <div className="card-filter">
                        <div onClick={() => clickMe("")} className="border-bottom card-filter-item">Sans arrangement</div>
                        <div onClick={() => clickMe("Best-seller")} className="border-bottom card-filter-item">Best-seller</div>
                        <div onClick={() => clickMe("La plus élevée d'évaluation")} className="border-bottom card-filter-item">La plus élevée d'évaluation</div>
                        <div onClick={() => clickMe("Le prix est au moins au plus haut")} className="border-bottom card-filter-item">
                            السعر من الاقل للاعلي
                        </div>
                        <div onClick={() => clickMe("Le prix est à la hauteur")} className=" card-filter-item">Le prix est à la hauteur</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
