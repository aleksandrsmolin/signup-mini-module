const validate = values => {
  const errors = {};
 // if (!values.password) {
 //   errors.lastName = 'Required';
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
 //   if (!values.passwordConfirm) {
 //   errors.lastName = 'Required';
 // } else if (values.passwordConfirm !== values.password) {
 //   errors.passwordConfirm = 'Not matching';
 // }


  if (!values.day) {
    errors.sex = 'Required';
  } else if (!/([0-9])\w+/g.test(values.day)) {
    errors.day = 'Ivalide day';
  }
  if (!values.month) {
    errors.sex = 'Required';
  } else if (!/([0-9])\w+/g.test(values.month)) {
    errors.month = 'Invalide month';
  }
  if (!values.year) {
    errors.sex = 'Required';
  } else if (!/([0-9])\w+/g.test(values.year)) {
    errors.year = 'Ivalid year';
  }

  if (!values.sex) {
    errors.sex = 'Required';
  }
  return errors;
};

export default validate;
