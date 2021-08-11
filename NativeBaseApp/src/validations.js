import * as yup from 'yup';

const validations = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email girin.')
    .required('Email alanı zorunludur.'),
  password: yup
    .string()
    .min(4, 'En az 4 karakter girmelisiniz.')
    .max(10, 'En fazla 10 karakter girmelisiniz.')
    .required('Bir parola belirtin.'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Parolalar eşleşmiyor.')
    .required('Parola tekrarını girin.'),
});

export default validations;
