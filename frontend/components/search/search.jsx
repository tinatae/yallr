import React from 'react';
import BusinessMap from '../business_map/business_map';
import BusinessIndex from './business_index';
import FilterForm from './filter_form';

const Search = ({ businesses, minPricepoint, maxPricepoint, filterCategory, updateFilter }) => (
    <div className="indexpage">
        <div className="indexpage-filters">
            <h3>What are you Looking For?</h3>
                <FilterForm 
                    minPricepoint={minPricepoint}
                    maxPricepoint={maxPricepoint}
                    updateFilter={updateFilter}
                    filterCategory={filterCategory}
                />
        </div>
        <div className="indexpage-grid">
            <div className="indexpage-businesses">
                <BusinessIndex 
                businesses={businesses}
                // selectReviewsForBusiness={selectReviewsForBusiness}
                />
            </div>
            <div className="indexpage-map">
                <h2>So Where Are We Going!</h2>
                <BusinessMap
                    businesses={businesses}
                    updateFilter={updateFilter}
                    singleBusiness={false}
                />

            </div>
        </div>   
    </div>
);

export default Search;

// selectReviewsForBusiness