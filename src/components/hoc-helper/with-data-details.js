import React, { Component } from 'react';
import Spinner from '../spinner';


const WithDataDetails = (View) => {
    return class extends Component {
        
        state = {
            item: null,
            loading: false  
        };

        componentDidMount() {
            this.updateItem();            
        }

        componentDidUpdate(prevProps) {
            if (this.props.item !== prevProps.item ||
                this.props.getData !== prevProps.getData) this.updateItem();            
        }
        
        updateItem = () => {
            this.setState({ loading: true });
            const { item } = this.props;
            
            if (!item) return;        
            this.props.getData(item)
                .then((item) => {
                    this.setState({
                        item, 
                        loading:false                        
                        });
                });           
        }

        render() {
            const { item, loading } = this.state;        
            if (!item) return <span>Select a item from a list</span>;        
            const { name, image } = item;
            if (loading) return <Spinner />

            return <View {...this.props} name={name} item={item} image={image}/>;
        }
    }

};

export default WithDataDetails;