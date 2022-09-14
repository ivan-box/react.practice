const MainButtoms = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log('expenses');
        }}
      >
        expenses
      </button>
      <button
        onClick={() => {
          console.log('income');
        }}
      >
        income
      </button>
    </div>
  );
};

export default MainButtoms;
