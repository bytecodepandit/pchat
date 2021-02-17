
import { AUTH_BASE_URL } from "@app/app.config";

const ApiEndPoints = {
    signIn: {
        method: 'POST',
        api: () => `${AUTH_BASE_URL}/api/auth/oauth/token`
    },
}

export interface APIDef {
    method: string;
    api: any;
}

export interface APIInput {
    email?: string;
}

export default ApiEndPoints;