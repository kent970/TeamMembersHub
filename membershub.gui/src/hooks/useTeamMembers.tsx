import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

// Custom hook for fetching team members data
const useTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const response = await axios.get('http://localhost:5261/api/members/getAll');
                setTeamMembers(response.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        };

        fetchTeamMembers();
    }, []);

    return { teamMembers, loading, error };
};

export default useTeamMembers;
