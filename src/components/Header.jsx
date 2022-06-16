import React from 'react';

class Header extends React.Component {
    render(){
        return(
            <React.Fragment>
                    <div className="topnav">
                        <a className="notes-header" href="/">E-NOTES</a>
                        <div class="search-container">
                        <form action="/action_page.php">
                             <button type="submit"><i class="fa fa-search"></i></button>
                            <input type="text" placeholder="Search.." name="search"/>
                            </form>
                        </div>  
                    </div>
            </React.Fragment>
        )
    }
}

export default Header;