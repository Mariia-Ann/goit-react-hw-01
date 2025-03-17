import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHeader}>Type</th>
          <th className={css.transactionHeader}>Amount</th>
          <th className={css.transactionHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id} className={css.transactionTr}>
            <td className={css.transactionInfo}>{type}</td>
            <td className={css.transactionInfo}>{amount}</td>
            <td className={css.transactionInfo}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
