import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import LoginLayout from '@/Layouts/LoginLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <LoginLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Nome" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel htmlFor="password" value="Senha" />

                    <TextInput
                        id="password"
                        type={passwordVisibility ? 'text' : 'password'}
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <div
                        className="absolute right-1 top-8 text-gray-500"
                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                    >
                        {passwordVisibility ? <EyeOff size={24} /> : <Eye size={24} />}
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 relative">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirme a senha"
                    />

                    <TextInput
                        id="password_confirmation"
                        type={passwordVisibility ? 'text' : 'password'}
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />
                    <div
                        className="absolute right-1 top-8 text-gray-500"
                        onClick={() => setPasswordVisibility(!passwordVisibility)}
                    >
                        {passwordVisibility ? <EyeOff size={24} /> : <Eye size={24} />}
                    </div>
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>
                <div>
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Já registrado?
                    </Link>

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
