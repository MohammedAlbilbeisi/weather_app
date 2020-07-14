import React from 'react';

class list extends React.Component{
    state= {
        list:['Anas']
    }
    render(){
        return(
            <div className="list">
                <ul>
                    {this.state.list.map( (e, i) => (
                        <li> {e} </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default list;