// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CoinList from './components/CoinList';
import CoinDetails from './CoinDetails';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary'; // ایمپورت کردن ErrorBoundary

const App = () => {
  return (
    <Router>
      <div>
        <ErrorBoundary> {/* اضافه کردن ErrorBoundary برای رفع خطاها */}
          <Switch>
            <Route exact path="/" component={CoinList} />
            <Route path="/coins/:coinId" component={CoinDetails} />
            <Route component={NotFound} />
          </Switch>
        </ErrorBoundary>
      </div>
    </Router>
  );
};

export default App;
