import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import SearchPageComponent from '../../components/SearchPage/SearchPage';
import backendAPI from '../../../backend'
import queryString from 'query-string'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': []
        }
    }

    searchAPI = () => {
        let values = queryString.parse(this.props.location.search)
        fetch(backendAPI+'/api/v1/sanphams?q='+values.q).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                if (data['status'] === true){
                    this.setState({items:data['sanphams']})
                } else {
                    this.setState({items: false})
                }
            }
        )
    }
    componentDidMount() {
        this.searchAPI();
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.searchAPI();
        }
    }

    render() {
        return (
            <SearchPageComponent items={this.state.items}/>
        );
    }
}

export default withRouter(SearchPage);