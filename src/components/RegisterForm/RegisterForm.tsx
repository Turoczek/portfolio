import { register } from '@/utils/requests';
import React, { useEffect, useState } from 'react';
import styles from './RegisterForm.module.scss';
import { useRouter } from 'next/router';


export const RegisterForm = () => {
    const { push } = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const [isResponse, setResponse] = useState<number>();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        register(formData).then((e) => {
            setResponse(e.data.statusCode);
        });
    }

    useEffect(() => {
        if(isResponse === 200) {
            push('/');
        }
    }, [isResponse, push]);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    <h1>Register</h1>
                </legend>
                <div className={styles.formModule}>
                    <label htmlFor="username"><b>Username</b></label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                        required
                        aria-invalid="true"
                    />
                </div>

                <div className={styles.formModule}>
                    <label htmlFor="email"><b>Email</b></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        aria-invalid="true"
                    />
                </div>

                <div className={styles.formModule}>
                    <label htmlFor="pwd"><b>Password</b></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        name="pwd"
                        id="pwd"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                        aria-invalid="true"
                    />
                </div>

                <button className={styles.button} type="submit">Register</button>
            </fieldset>
        </form>
    )
}