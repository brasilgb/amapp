import PrimaryButton from '@/Components/PrimaryButton';
import { Button } from '@/Components/ui/button';
import LoginLayout from '@/Layouts/LoginLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <LoginLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Obrigado por se inscrever! Antes de começar, você poderia verificar
                seu endereço de e-mail clicando no link que acabamos de enviar
                para você? Se você não recebeu o e-mail, teremos prazer em enviar
                outro.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    Um novo link de verificação foi enviado para o endereço de e-mail
                    que você forneceu durante o registro.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <Button
                        variant="login"
                        className="w-full"
                        disabled={processing}
                    >
                        Entrar
                    </Button>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Log Out
                    </Link>
                </div>
            </form>
        </LoginLayout>
    );
}
