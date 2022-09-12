const TransactionForm = () => {
    return (
        <form action="">
            <label>
                <p>Date</p>
                <input type="date" />
            </label>
            <label>
                <p>Time</p>
                <input type="time" />
            </label>
            <label htmlFor="">
                <p>Category</p>
                <input type="buttom" value={'food'} />
            </label>
            <label>
                <p>Sum</p>
                <input type="text" placeholder="input Sum" />
            </label>
            <label htmlFor="">
                <p>Currency</p>
                <input type="buttom" value={'UAH'} />
            </label>
            <label>
                <p>Bloc</p>
                <input type="text" placeholder="Coment" />
            </label>
        </form>
    );
}

export default TransactionForm;