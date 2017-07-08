const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

const validate = values => {
  const errors = {};
 // if (!values.password) {
 //   errors.lastName = 'Required';
 // } else if (values.password.length < 6) {
 //   errors.password = 'Min 6 characters';
 // }
 // if (!values.passwordConfirm) {
 //   errors.lastName = 'Required';
 // } else if (values.passwordConfirm !== values.password) {
 //   errors.passwordConfirm = 'Not matching';
 // }
 // if (!values.email) {
 //   errors.email = 'Required';
 // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
 //   errors.email = 'Invalid email address';
 // }


  if (!values.day) {
    errors.day = 'Required';
  } else if (!/([0-9])\d*/g.test(values.day)) {
    errors.day = 'Ivalide day';
  } else if (values.month === '2' && values.day > '29') {
    errors.day = 'Ivalide day';
  }


  if (!values.month) {
    errors.month = 'Required';
  } else if (!/([0-9])\d*/g.test(values.month)) {
    errors.month = 'Invalide month';
  }

  if (!values.year) {
    errors.year = 'Required';
  } else if (!/([0-9])\d+/g.test(values.year)) {
    errors.year = 'Ivalid year';
  }
  if (yyyy - values.year < 18) {
    errors.age = 'Too young';
  } else if (yyyy - values.year === 18 && values.month < mm) {
    errors.age = 'Too young';
  } else if (yyyy - values.year === 18 && values.month < mm && values.day < dd) {
    errors.age = 'Too young';
  }

  if (!values.sex) {
    errors.sex = 'Required';
  }
  return errors;
};

export default validate;
