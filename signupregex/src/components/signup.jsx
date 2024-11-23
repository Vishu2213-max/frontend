import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const SignUp = () => {
    const [popup, setPopup] = useState({ show: false, data: '' });
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            ph: '',
        },
        validate: values => {
            const errors = {};
            // Username validation
            if (!values.username) {
                errors.username = 'Required';
            } else if (!/^[a-zA-Z_]{3,30}$/.test(values.username)) {
                errors.username = 'Username can only contain letters and underscores, and no spaces';
            }

            // Email validation
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(values.email)) {
                errors.email = 'Invalid email address';
            } else if (/^\.|\.$/.test(values.email)) {
                errors.email = 'Email address cannot start or end with a dot';
            } 

            // Password validation
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            } else if (!/(?=.*[0-9])/.test(values.password)) {
                errors.password = 'Password must contain at least one number';
            } else if (!/^[a-zA-Z0-9!@#$%^&*()_+=-]+$/.test(values.password)) {
                errors.password = 'Password can only contain letters, numbers, and special characters';
            }

            // Phone number validation
            if (!values.ph) {
                errors.ph = 'Required';
            } else if (!/^\+91\-\d{5}\-\d{5}$/.test(values.ph)) {
                errors.ph = 'Phone number must be in the format +91-xxxxx-xxxxx';
            }
            return errors;
        },
        onSubmit: async (values) => {
            console.log('Submitting values:', values);
            setPopup({ show: true, data: values })
        },
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">Name</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div>{formik.errors.username}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="ph">Phone Number</label>
                    <input
                        id="ph"
                        name="ph"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ph}
                    />
                    {formik.touched.ph && formik.errors.ph ? (
                        <div>{formik.errors.ph}</div>
                    ) : null}
                </div>

                <button type="submit">Sign Up</button>
            </form>

            {popup.show && (
                <div className="popup">
                    <div className="popup-header">Details</div>
                    <div className="popup-content">
                        <p><strong>Username:</strong> {popup.data.username}</p>
                        <p><strong>Email:</strong> {popup.data.email}</p>
                        <p><strong>Password:</strong> {popup.data.password}</p>
                        <p><strong>Phone Number:</strong> {popup.data.ph}</p>
                        <Link to={"/"}><button onClick={() => { setPopup({ show: false, data: '' }) }}>ok</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUp;