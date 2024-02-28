export interface IReport {
  description: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  user: {
    id: number;
    name: string;
    email: string;
    phone?: string;
    photo?: string;
  };
}

export interface ReportPublication {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  reportCount: number;
  pet: {
    name: string;
    age: number;
  };
}

export interface GetAllReportResponse {
  publication: ReportPublication;
  reports: IReport[];
}
