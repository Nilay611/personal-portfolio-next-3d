export interface Company {
  companyId: number;
  companyName: string;
  designation: string;
  period: string;
  summary: { id: number; point: string }[];
  tech: string;
}
