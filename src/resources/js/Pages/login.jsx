import AppLayout from '@/Layout/AppLayout';
import LoginForm from '@/common/LoginForm';

export default function App() {
  return (
    <AppLayout>
      <LoginForm formTitle="ログイン" url={route('login.authenticate')} />
    </AppLayout>
  );
}
