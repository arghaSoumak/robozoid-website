import React from 'react'
import { Icon } from '@material-ui/core'
class ExpandSection extends React.Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <React.Fragment>
                <div className="expand_section">
                    <div className="expand_header" onClick={this.toggle}>
                        <h1>{this.props.resource.resource_title}</h1>
                        {!this.state.isOpen ? (
                            <Icon>expand_more</Icon>
                        ) : (
                            <Icon>expand_less</Icon>
                        )}
                    </div>
                    {this.state.isOpen ? (
                        <div className="expand_details">
                            {this.props.resource.resource_links.map(
                                (link, i) => (
                                    <h1>
                                        <a href={link}>{link}</a>
                                    </h1>
                                )
                            )}
                        </div>
                    ) : null}
                </div>
            </React.Fragment>
        )
    }
}

export default ExpandSection
