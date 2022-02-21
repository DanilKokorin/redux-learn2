import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  
  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  return (
    <div>
      <div style={{fontSize: '30px'}}>{cash}</div>

      <div style={{display: 'flex'}}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
      </div>
    </div>
  );
}
