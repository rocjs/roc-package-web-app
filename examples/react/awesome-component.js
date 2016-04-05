import React from 'react';

export default class AwesomeComponent extends React.Component {
    render() {
        return (
            <div>
                <img src="http://i.giphy.com/xsBP0RdvxJfhu.gif"></img>
                <p style={{color: this.props.color }}>Pizza</p>
                <pre>{ JSON.stringify(this.props, null, 2) }</pre>
            </div>
        );
    }
}
