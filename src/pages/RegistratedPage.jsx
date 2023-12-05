import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth.reducer';
import css from './RegistratedPage.module.css';

const RegistratedPage = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const name = e.currentTarget.elements.userName.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <p className={css.title}>Name:</p>
        <input
          className={css.input}
          type="text"
          placeholder="Enter your full name"
          required
          name="userName"
        />
      </label>
      <label>
        <p className={css.title}>Email:</p>
        <input
          className={css.input}
          type="email"
          placeholder="Enter your email"
          required
          name="userEmail"
        />
      </label>
      <label>
        <p className={css.title}>Password:</p>
        <input
          className={css.input}
          type="password"
          placeholder="Enter your password"
          required
          autoComplete="off"
          name="userPassword"
        />
      </label>
      <br />
      <button className={css.btn} type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default RegistratedPage;
