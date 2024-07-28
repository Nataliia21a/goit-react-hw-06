// import { useDispatch, useSelector } from "react-redux";
// import { deposit, withdraw, reset } from "../../redux/balanceSlice";
// import { useState } from "react";

// export default function Balance() {
//   const dispatch = useDispatch();
//   const creditState = useSelector((state) => state.balance.value);

//   const [value, setValue] = useState(0);

//   const handleChange = (event) => {
//     setValue(Number(event.target.value));
//   };

//   const handleDeposit = () => {
//     dispatch(deposit(value));
//   };

//   const handleWithdraw = () => {
//     dispatch(withdraw(value));
//   };

//   const handleReset = () => {
//     dispatch(reset());
//   };

//   return (
//     <div>
//       <p>Balance: {creditState} credits</p>
//       <input type="number" value={value} onChange={handleChange} />
//       <button onClick={handleDeposit}>Deposit credits {value}</button>
//       <button onClick={handleWithdraw}>Withdraw credits {value}</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }
