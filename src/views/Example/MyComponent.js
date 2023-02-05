import React from "react";
import logo from '../../assets/images/don.png';

class MyComponent extends React.Component {
    render() {

        let name = 'Don';

        return (
            <>
                <div>Hello MyComponent, My name is: {name}</div>
                <div>
                    <img src={logo} style={{ width: '400px', height: '600px', marginTop: '20px' }} />
                </div>
            </>
        )
    }
}

export default MyComponent