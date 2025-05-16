type Params = Omit<Form, 'errors'>;


type Params = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
};
