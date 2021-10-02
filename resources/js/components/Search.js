import React from "react";
import { Redirect, Route, withRouter, Link } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: "" };
    }
    handleOnInputChange = event => {
        // const query = event.target.value;
        this.setState({ query: event.target.value });
    };
    submit() {
        this.setState({
            data: true
        });
    }
    componentWillMount() {
        const {
            match: { params }
        } = this.props;
        this.setState({ query: params.query });
    }
    render() {
        return (
            <div>
                <p>{this.state.query}</p>

                <Redirect
                    // to={`/result/${this.state.query}`}
                    to={{
                        pathname: "/result",
                        state: {
                            data: this.state.query
                        }
                    }}
                />
            </div>
        );
    }
}
export default Search;
