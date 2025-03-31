import AppLayout from '@/Layout/AppLayout';
import { useForm } from '@inertiajs/react';
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { FaUser } from "react-icons/fa";
function LoginForm() {
  const { data, setData, post, errors } = useForm({
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
  });
  const submit = (e) => {
    e.preventDefault();
    post('/register', data);
  };

  return (
    <form onSubmit={submit} className="inline-block bg-white shadow-md rounded-md m-10">
      <div className="bg-blue-500 text-white rounded-t-md p-2">Register</div>
      <div className="p-4">
        <div className="flex items-center">
          <FaUser className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Name" value={data.name} onChange={e => setData('name', e.target.value)} />
          </div>
          {/* {errors.name && <div>{errors.name}</div>} */}
        <div className="flex items-center">
          <IoMdMail className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Email" value={data.email} onChange={e=>setData('email',e.target.value)}/>
          </div>
        <div className="flex items-center">
          <IoMdLock className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Password" value={data.password} onChange={e=>setData('password',e.target.value)}/>
          </div>
        <div className="flex items-center">
          <IoMdLock className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Password Confirmation" value={data.password_confirmation} onChange={e=>setData('password_confirmation',e.target.value)}/>
          </div>
        <button type="submit" className="cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 my-3 float-right">会員登録</button>
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
