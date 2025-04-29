import AppLayout from '@/Layout/AppLayout';
import LoginForm from '@/common/LoginForm';

export default function App() {
  return (
    <AppLayout>
      <LoginForm formTitle="店舗代表者ログイン" url={route('owner.login.authenticate')} />
    </AppLayout>
  );
}
