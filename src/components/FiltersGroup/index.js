import './index.css'
import {IoIosSearch} from 'react-icons/io'

const FiltersGroup = props => {
  const {
    updateTitleSearch,
    ratingsList,
    categoryOptions,
    clearFilter,
    updateCategory,
    updateRating,
  } = props
  const onChangeHandler = value => {
    updateTitleSearch(value)
  }

  const handleClearFilter = () => {
    clearFilter()
  }
  const returnCategory = eachItem => {
    const handleCategory = () => {
      updateCategory(eachItem.categoryId)
    }

    return (
      <li key={eachItem.categoryId}>
        <button
          type="button"
          className="category-button"
          onClick={handleCategory}
        >
          <p>{eachItem.name}</p>
        </button>
      </li>
    )
  }

  const returnRating = eachItem => {
    const handleRating = () => {
      updateRating(eachItem.ratingId)
    }
    return (
      <li className="rating-item-container" key={eachItem.ratingId}>
        <button
          type="button"
          className="category-button"
          onClick={handleRating}
        >
          <img
            src={eachItem.imageUrl}
            alt={`rating ${eachItem.ratingId}`}
            width="200px"
          />
          <p>&up</p>
        </button>
      </li>
    )
  }
  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="searchElement"
          placeholder="search"
          onKeyDown={e => {
            if (e.key === 'Enter') onChangeHandler(e.target.value)
          }}
        />
        <IoIosSearch className="searchIcon" />
      </div>
      <div>
        <div className="category-container">
          <h4>Category</h4>
          <ul style={{listStyleType: 'none'}}>
            {categoryOptions.map(eachItem => returnCategory(eachItem))}
          </ul>
        </div>
        <div className="ratings-container">
          <h4>Rating</h4>
          <ul style={{listStyleType: 'none'}}>
            {ratingsList.map(eachItem => returnRating(eachItem))}
          </ul>
        </div>
        <button
          type="button"
          className="filter-button"
          onClick={handleClearFilter}
        >
          Clear Filters
        </button>
      </div>
    </div>
  )
}
export default FiltersGroup
