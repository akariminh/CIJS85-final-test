import { FILTER_OPTIONS } from "../utils/constants";
import { useState } from "react";
export const Filter = () => {
  const [filterOption, setFilterOptions] = useState(FILTER_OPTIONS.DEFAULT);
  return (
    <div className="stt-container">
      <button
        className={
          "filter-btn " + (filterOption === FILTER_OPTIONS.DEFAULT ? "active" : "")
        }
        onClick={() => setFilterOptions(FILTER_OPTIONS.DEFAULT)}
      >
        All
      </button>
      <button
        className={
          "filter-btn " +
          (filterOption === FILTER_OPTIONS.COMPLETED ? "active" : "")
        }
        onClick={() => setFilterOptions(FILTER_OPTIONS.COMPLETED)}
      >
        Completed
      </button>
      <button
        className={
          "filter-btn " +
          (filterOption === FILTER_OPTIONS.UNCOMPLETED ? "active" : "")
        }
        onClick={() => setFilterOptions(FILTER_OPTIONS.UNCOMPLETED)}
      >
        Uncompleted
      </button>
    </div>
  );
};
