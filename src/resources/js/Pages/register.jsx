import AppLayout from '@/Layout/AppLayout';
import CreateUserForm from '@/common/createUserForm';
export default function App() {
  return (
    <AppLayout>
      <CreateUserForm formTitle="会員登録" submitText="登録" url={route('login.store')} />
    </AppLayout>
  );
}
