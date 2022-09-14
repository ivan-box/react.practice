import { Component } from 'react';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

class App extends Component {
  state = {
    activePage: 'main',
  };
  render() {
    return (
      <div>
        {this.state.activePage === 'main' ? (
          <MainPage />
        ) : (
          <TransactionHistoryPage />
        )}
      </div>
    );
  }
}
export { App };
