import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import LoginLayout from "@/Layouts/LoginLayout";
import { Head, Link, useForm } from '@inertiajs/react';
import { AtSign, Eye, EyeOff, LockKeyhole, User } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <LoginLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className='relative'>
                    <div
                        className="absolute left-1 top-2 text-gray-500"
                    >
                        <AtSign size={22} />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 pl-8 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-6 relative">
                    <div
                        className="absolute left-1 top-2 text-gray-500"
                    >
                        <LockKeyhole size={22} />
                    </div>
                    <TextInput
                        id="password"
                        type={passwordVisibility ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-1 px-8 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <div
                        className="absolute right-1 top-2 text-gray-500"
                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                    >
                        {passwordVisibility ? <EyeOff size={22} /> : <Eye size={22} />}
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Lembrar
                        </span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Perdeu sua senha?
                        </Link>
                    )}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <Button
                        variant="login"
                        className="w-full"
                        disabled={processing}
                    >
                        Entrar
                    </Button>
                </div>
            </form>
        </LoginLayout>
    );
}
