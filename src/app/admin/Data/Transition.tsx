export interface Transaction {
  id: string;
  companyId: string;       // references companies.id
  userId: string;
  amountPaise: number;
  cashbackPaise: number;
  status: 'approved' | 'pending';
  date: string;            // ISO yyyy-mm-dd
}

export const transactions: Transaction[] = [
  { id: 'tx_1001', companyId: 'cmp_amazon', userId: 'usr_1', amountPaise: 120000, cashbackPaise: 12000, status: 'approved', date: '2025-09-21' },
  { id: 'tx_1002', companyId: 'cmp_amazon', userId: 'usr_2', amountPaise: 90000, cashbackPaise: 9000, status: 'pending', date: '2025-09-22' },
  { id: 'tx_2001', companyId: 'cmp_flipkart', userId: 'usr_3', amountPaise: 80000, cashbackPaise: 8000, status: 'approved', date: '2025-09-20' },
  { id: 'tx_3001', companyId: 'cmp_verma_elec', userId: 'usr_4', amountPaise: 45000, cashbackPaise: 3000, status: 'approved', date: '2025-09-12' },
];

export const listTransactionsByCompany = (companyId: string) => transactions.filter(t => t.companyId === companyId);