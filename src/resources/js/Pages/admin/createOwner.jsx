import AdminAppLayout from "@/Layout/AdminAppLayout";
import CreateUserForm from "@/common/createUserForm";
export default function App() {
    return (
        <AdminAppLayout>
            <CreateUserForm formTitle="オーナー登録" submitText="登録" url={route('owner.login.store')} />
        </AdminAppLayout>
    );
}