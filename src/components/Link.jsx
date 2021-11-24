import React, { Component } from 'react';

class Link extends Component {
    render() {
        const { name, className, href, handleLinkClick } = this.props
        return (
            <>
                <a
                    className={className}
                    href={href}
                    onClick={() => handleLinkClick(name)}
                    >
                    {name}
                </a>
            </>
        );
    }
}

export default Link;