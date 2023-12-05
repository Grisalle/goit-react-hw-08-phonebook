import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.reducer';
import css from './LogInPage.module.css';

const LogInPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };
    dispatch(loginThunk(formData));
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label>
        <p className={css.emailTitle}>Email:</p>
        <input
          className={css.input}
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className={css.passwordTitle}>Password:</p>
        <input
          className={css.input}
          type="password"
          placeholder="Enter your password"
          required
          name="userPassword"
          autoComplete="off"
          minLength={7}
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LogInPage;
