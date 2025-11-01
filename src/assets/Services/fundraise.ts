    // sendFundraise.ts
    import axios from 'axios';
    import {url} from '../config';
    export interface FundraiseData {
    name: string;
    phone: string;
    email: string;
    website?: string;
    location: string;
    contact_person?: string;
    authorized_name?: string;
    date: string;
    user_type: string;
    purpose: string;
    focus_area: string[];
    summary?: string;
    achievements?: string;
    beneficiaries?: string;
    }

    export const sendFundraise = async (fundraiseData: FundraiseData) => {
    try {
        const response = await axios.post(`${url()}/fundraises`,
        fundraiseData);

        console.log('Response:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('Error sending fundraise:', error.response?.data || error.message);
        throw error;
    }
    };
