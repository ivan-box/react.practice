import { Component } from 'react';
import MainPage from './MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

class App extends Component {
  state = {
    activePage: 'main',
  };
  changePageHandler = page => {
    this.setState({ activePage: page });
  };
  render() {
    return (
      <div>
        {this.state.activePage === 'main' ? (
          <MainPage changePageHandler={this.changePageHandler} />
        ) : (
          <TransactionHistoryPage changePageHandler={this.changePageHandler} />
        )}
      </div>
    );
  }
}
export { App };
