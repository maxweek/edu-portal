import React from 'react';

export default class ModuleTitle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            classSuffix: '',
            textAlign: ' text-left'
        }
    }
    componentDidMount() {
        if (this.props.classSuffix !== undefined) {
            this.setState({ classSuffix: " " + this.props.classSuffix })
        }
        if (this.props.align !== undefined) {
            this.setState({ textAlign: " text-" + this.props.align })
        }
    }
    render() {
        return (
            <div className={"moduleTitle" + this.state.classSuffix + this.state.textAlign}>
                {this.props.value}
            </div>
        )
    }
}
