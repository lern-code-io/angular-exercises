export interface User
{
  name: string;
  phone: string;
  website: string;
  company: companyData;
}

interface companyData
{
  name: string,
  catchPhrase: string,
  bs: string
}
