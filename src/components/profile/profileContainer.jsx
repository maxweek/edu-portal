import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';


class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile
                loadOptions={this.props.loadOptions}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        loadOptions: state.shared.loadOptions,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
