import React from 'react';

interface State {
  hasError: boolean
}
interface Props {}

export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: State) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    
    render() {
        
        if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
        }
  
      return this.props.children; 
    }
  }