import React, {Component} from "react";
import PropTypes from 'prop-types';

import './ImageItem.css';
import Cover from "../Cover/Cover";

class ImageItem extends Component {
    render() {
        const name = this.props.name;
        return (
            <li className='ImageItem-container'
            >
                <div
                    className={`ImageItem-photo ${this.props.disabled && 'ImageItem-photo-disabled'}`}
                    onClick={() => this.props.onClick(this.props.id)}
                >
                    <Cover alt={name} src={this.props.src}
                           className='cover-image'/>
                </div>
                <div className='ImageItem-details'>
                    <div
                        className='ImageItem-info'
                        onClick={() => this.props.onClick(this.props.id)}
                    >

                        <div className='ImageItem-name'>
                            {name}
                        </div>
                        {this.props.description && (
                            <div className='ImageItem-description'>
                                {this.props.description}
                            </div>
                        )}
                        {(this.props.description == null) || (
                            <div className='ImageItem-description'>
                                &nbsp;
                            </div>
                        )}
                    </div>
                </div>
            </li>
        );
    }
}

ImageItem.propTypes = {
    id: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    description: PropTypes.string,
    onClick: PropTypes.func,
};

export default ImageItem;