import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpUser = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        alert(
           `You have entered the following details: \n
            First Name: ${data.firstName}
            Last Name: ${data.lastName}
            Username: ${data.userName}
            Email: ${data.email}`
        );
    };
    const handleReset = () => {
        reset();
    }
    const password = watch('password');

    return (
        <form id="signUpForm" onSubmit={handleSubmit(onSubmit)}>
            <h1>React Hook Form</h1>

            <label htmlFor="firstName">
                First Name:
                <input
                    id="firstName"
                    {...register('firstName', { required: true })}
                    placeholder="First Name"
                />
                {errors.firstName && <span>This field is required</span>}
            </label>
            <label htmlFor="lastName">
                Last Name:
                <input
                    id="lastName"
                    {...register('lastName', { required: true })}
                    placeholder="Last Name"
                />
                {errors.lastName && <span>This field is required</span>}
            </label>
            <label htmlFor="userName">
                User Name:
                <input
                    id="userName"
                    {...register('userName', { required: true })}
                    placeholder="User Name"
                />
                {errors.userName && <span>This field is required</span>}
            </label>
            <label htmlFor="email">
                Email:
                <input
                    id="email"
                    {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    })}
                    placeholder="Email"
                />
                {errors.email && <span>Enter a valid email</span>}
            </label>
            <label htmlFor="password">
                Password:
                <input
                    id="password"
                    {...register('password', { required: true })}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <span>This field is required</span>}
            </label>
            <label htmlFor="confirmPassword">
                Confirm Password:
                <input
                    id="confirmPassword"
                    {...register('confirmPassword', {
                        required: true,
                        validate: value => value === password || "Passwords do not match"
                    })}
                    type="password"
                    placeholder="Confirm Password"
                />
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
            </label>
            <div className="operations-div">
                <button type="submit" id='submit-btn' onClick={handleSubmit}>Submit</button>
                <button type="submit" id='reset-btn' onClick={handleReset}>RESET</button>
            </div>
        </form>
    );
};

export default SignUpUser;
