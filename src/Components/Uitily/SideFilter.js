import React from 'react'
import { Row } from 'react-bootstrap'
import SidebarSearchHook from '../../hook/search/sidebar-search-hook';

const SideFilter = () => {
  const [category, brand, clickCategory, clickBrand, priceFrom, priceTo] = SidebarSearchHook();
  let localFrom = localStorage.getItem("priceFrom")
  let localTo = localStorage.getItem("priceTo")
  return (
    <div className="mt-3">
      <Row>
        <div className="d-flex flex-column mt-2">
          <div className="filter-title">Catégorie</div>
          <div className="d-flex mt-3">
            <input onChange={clickCategory} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">tout le monde</div>
          </div>
          {
            category ? (category.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input onChange={clickCategory} type="checkbox" value={item._id} />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              )
            })) : <h6>Il n'y a pas de classifications</h6>
          }
        </div>

        <div className="d-flex flex-column mt-2">
          <div className="filter-title mt-3">Marque</div>
          <div className="d-flex mt-3">
            <input onChange={clickBrand} type="checkbox" value="0" />
            <div className="filter-sub me-2 ">tout le monde</div>
          </div>

          {
            brand ? (brand.map((item, index) => {
              return (
                <div key={index} className="d-flex mt-3">
                  <input onChange={clickBrand} type="checkbox" value={item._id} />
                  <div className="filter-sub me-2 ">{item.name}</div>
                </div>
              )
            })) : <h6>Il n'y a pas de marques</h6>
          }
        </div>

        <div className="filter-title my-3">le prix</div>
        <div className="d-flex">
          <p className="filter-sub my-2">depuis:</p>
          <input
            value={localFrom}
            onChange={priceFrom}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
        <div className="d-flex">
          <p className="filter-sub my-2">à:</p>
          <input
            onChange={priceTo}
            value={localTo}
            className="m-2 text-center"
            type="number"
            style={{ width: "50px", height: "25px" }}
          />
        </div>
      </Row>
    </div>
  )
}

export default SideFilter
