import { useState } from 'react';
import axios from 'axios';

const useAddRandomUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleAdd = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5261/api/members/addRandom');
            console.log('Response:', response.data);
            setSuccess(true);
        } catch (error:any) {
            console.error('Error:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, success, handleAdd };
};

export default useAddRandomUser;
