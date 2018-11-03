import React, {Component} from "react";

class Cover extends Component {
    render () {
        return <div style={{
            width: this.props.width, height: this.props.height,
            position: 'relative',
            ...this.props.style,
        }} {...this.props}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundImage: `url(${this.props.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "50% 50%",
                backgroundClip: 'border-box',
                borderRadius: this.props.style && this.props.style.borderRadius,
            }}/>
        </div>;
    }
}

export default Cover;