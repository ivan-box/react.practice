import Header from '../Header';
import TransactionForm from 'components/TransactionForm';
import MainButtoms from 'components/MainButtoms/MainButtoms';
import Categories from 'components/Categories';
import { categoriesList } from 'components/Data/categoriesList';

const MainPage = props => {
  return (
    <>
      <Header title="Журнал видатків" />
      <main>
        <TransactionForm />
        <MainButtoms />
        <Categories categoriesList={categoriesList} />
      </main>
    </>
  );
};

export default MainPage;
