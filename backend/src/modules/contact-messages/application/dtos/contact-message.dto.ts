export interface CreateContactMessageInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface ContactMessageOutput {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}
