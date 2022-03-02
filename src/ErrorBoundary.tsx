import React, { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ERROR");
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Oops! Something went wrong 🤯</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
function logErrorToMyService(error: Error, errorInfo: any) {
  throw new Error("Function not implemented.");
}

function errorInfo(error: Error, errorInfo: any) {
  throw new Error("Function not implemented.");
}
