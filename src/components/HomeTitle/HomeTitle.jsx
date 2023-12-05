import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/auth.reducer';
import { selectUserData } from 'redux/auth/auth.selectors';
import LogoutIcon from '@mui/icons-material/Logout';
import css from './HomeTitle.module.css';

const HomeTitle = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const onLogOut = () => {
    dispatch(logoutThunk());
  };

  return (
    <div className={css.homePage}>
      <span className={css.title}>Hello, {userData.name}!</span>

      <span className={css.greeting}>This is your PHONEBOOK.</span>

      <button className={css.logoutBtn} onClick={onLogOut}>
        <LogoutIcon sx={{ marginRight: 1 }} />
        <span>Log Out</span>
      </button>
    </div>
  );
};

export default HomeTitle;
