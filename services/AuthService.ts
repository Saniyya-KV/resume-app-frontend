import { api } from './api';

export const AuthService = {
    async register(data: Record<string, any>) {
        return api.post('/auth/register/', data);
    }
};
