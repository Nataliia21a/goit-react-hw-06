import css from "../SearchBox/SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handlerChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label className={css.searchLabel} htmlFor="">
        Find contact by name
      </label>
      <input className={css.searchInput} type="text" onChange={handlerChange} />
    </div>
  );
}
