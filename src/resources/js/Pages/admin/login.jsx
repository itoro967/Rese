import AppLayout from '@/Layout/AppLayout';
import LoginForm from '@/common/loginForm';

export default function App() {
  return (
    <AppLayout>
      <LoginForm formTitle="管理者ログイン" url={route('admin.login.authenticate')} />
    </AppLayout>
  );
}
