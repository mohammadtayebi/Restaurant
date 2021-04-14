import React from "react";
import { useBlogContext } from "../../../../Contex/blog-context";
import { getUniqueValue } from "../../../../utils/help";
import "./FilterComponent.css";

const FilterComponent = () => {
  const {
    filter_foods,
    search,
    category_value,
    area_value,
    getValue,
    clearFilters,
  } = useBlogContext();
  const categories = getUniqueValue(filter_foods, "strCategory");
  const areaes = getUniqueValue(filter_foods, "strArea");

  return (
    <section>
      <form
        action="something.php"
        className="position-relative"
        style={{ direction: "ltr" }}
      >
        <div>
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
          <input
            name="search"
            type="text"
            className="search-input text-b"
            placeholder="search"
            value={search}
            onChange={getValue}
          />
        </div>
        {/* we put all the categories the we got from thw api  */}
        <div className="form-group my-5">
          <h3>Categories</h3>
          <label htmlFor="sel1">Select list:</label>
          <select
            className="form-control"
            id="sel1"
            name="category_value"
            value={category_value}
            onChange={getValue}
          >
            {categories.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/* we put all the areas the we got from thw api  */}
        <div className="form-group">
          <h3>Areas</h3>
          <label htmlFor="sel1">Select list:</label>
          <select
            name="area_value"
            className="form-control"
            id="sel1"
            value={area_value}
            onChange={getValue}
          >
            {areaes.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <br />
      <div className="clear-filters d-flex my-2">
        <button
          className="btn btn-warning text-center mx-auto"
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </section>
  );
};

export default FilterComponent;
