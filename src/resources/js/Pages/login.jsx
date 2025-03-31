import AppLayout from '@/Layout/AppLayout';
import { useForm } from '@inertiajs/react';
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
function LoginForm() {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
  });
  const submit = (e) => {
    e.preventDefault();
    post('/login', data);
  };

  return (
    <form onSubmit={submit} className="inline-block bg-white shadow-md rounded-md m-10">
      <div className="bg-blue-500 text-white rounded-t-md p-2">Login</div>
      <div className="p-4">
        <div className="flex items-center"><IoMdMail className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Email" /></div>
        <div className="flex items-center"><IoMdLock className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Password" /></div>
        <button type="submit" className="cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 my-3 float-right">ログイン</button>
      </div>
    </form>
  );
}

export default function App() {
  return (
    <AppLayout>
      <LoginForm />
    </AppLayout>
  );
}
