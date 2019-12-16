import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';


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

        turnOnSpinner = () => {
            this.setState({ loading: true });
        }
        
        updateItem = () => {
            this.turnOnSpinner();
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
            if (loading) return <Spinner />
            
            const { name, image } = item;
            return (
                <ErrorBoundry>
                    <View {...this.props} name={name} item={item} image={image}/>
                </ErrorBoundry>
            );
        }
    }
};

export default WithDataDetails;