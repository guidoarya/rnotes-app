import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          searchValue: '',
        };
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
      }

      onSearchChangeHandler(event) {
        this.setState(() => {
          return {
            searchValue: event.target.value,
          };
        });
        this.props.onSearch(this.state.searchValue);
      }

    render(){
      return(
            <React.Fragment>
                    <div className="topnav">
                        <a className="notes-header" href="/">E-NOTES</a>
                        <div className="search-container">
                        <form>
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Search title here..." onChange={this.onSearchChangeHandler}/>
                        </form>
                        </div>  
                    </div>
            </React.Fragment>
        )
    }
}

export default Header;