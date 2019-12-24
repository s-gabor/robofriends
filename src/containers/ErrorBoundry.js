import React from 'react';
import Card from '../components/Card';

class ErrorBoundry extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <Card key='666' name='Broken... :(' email='nope...'></Card>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;
