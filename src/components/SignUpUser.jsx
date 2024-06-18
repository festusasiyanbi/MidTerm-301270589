import React from 'react'

const SignUpUser = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const password = watch('password');

  return (
    <form id='signUpForm' onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName', { required: true })} placeholder="First Name" />
      {errors.firstName && <span>This field is required</span>}

      <input {...register('lastName', { required: true })} placeholder="Last Name" />
      {errors.lastName && <span>This field is required</span>}

      <input {...register('userName', { required: true })} placeholder="User Name" />
      {errors.userName && <span>This field is required</span>}

      <input {...register('email', {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      })} placeholder="Email" />
      {errors.email && <span>Enter a valid email</span>}

      <input {...register('password', { required: true })} type="password" placeholder="Password" />
      {errors.password && <span>This field is required</span>}

      <input {...register('confirmPassword', {
        required: true,
        validate: value => value === password || "Passwords do not match"
      })} type="password" placeholder="Confirm Password" />
      {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpUser