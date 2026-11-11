
function ExpensesList({ expenses, t }) {
  return (
    <section className="university-expenses-section">
      <h2>💰 {t.mainExpenses}</h2>

      <ul className="university-requirements">
        {expenses?.map((expense, index) => (
          <li key={`${expense}-${index}`}>
            {expense}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ExpensesList;
