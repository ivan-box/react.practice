const TransactionHistoryPage = ({ transactionType, changePageHandler }) => {
  return (
    <>
      <h1>TransactionHistoryPage {transactionType}</h1>;
      <button
        type="button"
        onClick={() => {
          changePageHandler('main');
        }}
      >
        Back to Main
      </button>
      ;
    </>
  );
};

export default TransactionHistoryPage;
