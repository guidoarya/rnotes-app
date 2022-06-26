import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          searchValue: '',
        };
      }

      onSearchChangeHandler(event) {
        this.setState(() => {
          return {
            searchValue: event.target.value,
          };
        });
      }


    render(){
        return(
            <React.Fragment>
                    <div className="topnav">
                        <a className="notes-header" href="/">E-NOTES</a>
                        <div className="search-container">
                        <form>
                            <button type="submit"><i className="fa fa-search"></i></button>
                            <input type="text" placeholder="Search title here..." value={this.state.searchValue} onChange={this.onSearchChangeHandler}/>
                            {this.state.searchValue}
                        </form>
                        </div>  
                    </div>
            </React.Fragment>
        )
    }
}

export default Header;