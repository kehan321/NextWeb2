"use client";
import { useState, FormEvent } from 'react';
import { supabase } from '../supabase/page'; // Adjust the import based on your structure

const Form: React.FC = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submittedData, setSubmittedData] = useState<{ name: string; email: string } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true); // Start loading state
        setError(null); // Reset error state

        // Sign up the user with Supabase
        const { data, error } = await supabase.auth.signUp({
            email,
            password, // Use the password entered by the user
        });

        if (error) {
            setError(error.message);
            setLoading(false); // Stop loading state
            return;
        }

        // Set submitted data if successful
        setSubmittedData({ name, email });
        setName('');
        setEmail('');
        setPassword(''); // Reset password field
        setLoading(false); // Stop loading state
    };

    return (
        <div className='border border-gray-900 p-2'>
            <h1 className='bg-red-200 font-bold text-3xl py-2'>Simple Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            className='mt-2 ms-2 border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            className={`mt-2 ms-3 rounded-md p-2 transition-all duration-200 border border-gray-400 
                            ${isFocused ? 'border border-blue-300' : 'border border-transparent'} focus:outline-none`}
                            type="email"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            className='mt-2 ms-2 border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring focus:ring-blue-200'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button className='mt-9 ms-9 flex justify-center items-center bg-blue-300 px-2 py-1 rounded-lg' type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit'}
                </button>
            </form>

            {error && <p className="text-red-500">{error}</p>}

            {submittedData && (
                <div>
                    <h2>Submitted Data</h2>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    );
};

export default Form;
