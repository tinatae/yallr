import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchbarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const filter = Object.assign({}, this.state);
        this.props.changeFilter('searchQuery', this.state.searchQuery);
           
        this.props.history.push(`/businesses?query=${this.state.searchQuery}`)
    };

    render() {
        const {searchQuery} = this.state;

        return (
            <div className="searchbar-form">         
                <form onSubmit={this.handleSubmit}>
                    <div id="searchbar-container">                 
                        <input id="searchbar-input" type="text" placeholder="  Find | So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')} />                              
                        <input id="white-magnifying-glass" type="image" src="/white-magnifying-glass.svg" alt="Submit Query"/>                          
                    </div>
                </form>        
            </div>
        )
    };
};

export default withRouter(SearchbarForm);

// ------------------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { withRouter, Link } from 'react-router-dom';

// const handleQuery = (filter, changeFilter) => e => (
//     changeFilter(filter, e.currentTarget.value)
// );

// const update = (field) = e => {
//     return e => this.setState({ [field]: e.currentTarget.value });
// };


// const SearchbarForm = ({ searchQuery, changeFilter}) => (
//     <div>
//         <form onSubmit={this.handleQuery('searchQuery', changeFilter)}>
//             <input type="text" placeholder="So what are we looking for.." value={searchQuery} onChange={this.update('searchQuery')}/>

//             <input type="submit" value="Look Me Up!" />
//         </form>
//     </div>

// );

// export default withRouter(SearchbarForm);

// ----------------------------------------------------------

// onChange = { this.update('searchQuery') }

{/* <input type="text" placeholder="So what are we looking for" value={searchQuery} onChange={handleQuery('searchQuery', updateFilter)} /> */ }
