import { useForm } from '@inertiajs/react';
import { IoMdMail } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
export default function LoginForm({formTitle,url}) {
  const { data, setData, post, errors } = useForm({
    email: '',
    password: '',
  });
  const submit = (e) => {
    e.preventDefault();
    post(url, data);
  };

  return (
    <form onSubmit={submit} className="inline-block bg-white shadow-md rounded-md m-10">
      <div className="bg-blue-500 text-white rounded-t-md p-2">{formTitle}</div>
      <div className="p-4">
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <div className="flex items-center"><IoMdMail className="size-6" /><input className="m-2 border-b border-gray-400 w-60" placeholder="Email" value={data.email} onChange={e => setData('email', e.target.value)}/></div>
        {errors.password && <div className="text-red-500">{errors.password}</div>}
        <div className="flex items-center"><IoMdLock className="size-6" /><input type="password" className="m-2 border-b border-gray-400 w-60" placeholder="Password" value={data.password} onChange={e => setData('password', e.target.value)}/></div>
        <button type="submit" className="cursor-pointer bg-blue-500 text-white rounded-md py-1 px-2 my-3 float-right">ログイン</button>
      </div>
    </form>
  );
}