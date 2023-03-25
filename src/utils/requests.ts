import { RegisterModel } from '@/pages/api/register';
import axios from 'axios';

export const register = async (model: RegisterModel) => {
    return axios({
        method: 'POST',
        url: '/api/register',
        data: model,
    });
}