import axios from 'axios';
import {url} from '../config';
interface CreateNGOUserParams {
  name: string;
  phone_no: string;
  email: string;
  password: string;
  ngo_name: string;
  ngo_category?: string;
}

interface CreateNGOUserResponse {
  message: string;
  user: {
    id: number;
    name: string;
    phone_no: string;
    email: string;
    ngo_name: string;
    ngo_category?: string;
    createdAt: string;
    updatedAt: string;
  };
}

export async function createNGOUser(
  data: CreateNGOUserParams
): Promise<CreateNGOUserResponse> {
  try {
    const response = await axios.post<CreateNGOUserResponse>(
      `${url()}/ngo-users`,
      data
    );
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || 'Failed to create NGO user.');
    }
    throw new Error('Unexpected error occurred.');
  }
}
