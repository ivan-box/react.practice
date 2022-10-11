import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtons from 'components/MainButtons/MainButtons';
import Categories from 'components/Categories';
import { categoriesList } from 'components/Data/categoriesList';
import { Component } from 'react';

class MainPage extends Component {
  state = {
    isCategories: false,
  };
  openCategories = () => {
    this.setState({ isCategories: true });
  };
  render() {
    return (
      <>
        {!this.state.isCategories ? (
          <>
            <Header btnContent={undefined} title={'Журнал видатків'} />
            <TransactionForm openCategories={this.openCategories} />
            <MainButtons changePage={this.props.changePage} />
          </>
        ) : (
          <Categories categoriesList={categoriesList} />
        )}
      </>
    );
  }
}

export default MainPage;
