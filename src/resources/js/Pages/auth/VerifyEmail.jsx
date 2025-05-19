import {Link,usePage} from '@inertiajs/react';
import {useEffect} from 'react';
export default function App() {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.message) {
            alert(flash.message);
        }
    }, [flash.message]);
    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl font-bold m-3">メール認証</div>
            <div className="text-lg m-3">メールアドレスを認証してください。</div>
            <Link href={route('verification.send')} method="post" as="button" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                認証メールを再送信
            </Link>
        </div>
    );
    }