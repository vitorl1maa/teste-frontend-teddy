export interface Client {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
  createdAt: string;
  updatedAt: string;
  selected?: boolean;
}



export interface ClientResponse {
  clients: Client[];
  totalPages: number;
  currentPage: number;
}
