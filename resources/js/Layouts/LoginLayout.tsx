import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';

export default function LoginLayout({ children }: PropsWithChildren) {
    const { setinfo } = usePage().props as any;

    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 justify-center sm:p-0 px-4">
            <Card className='sm:w-1/5 w-full'>
                <CardHeader>
                    <div className='flex items-center justify-center'>
                        <Link href="/">
                            <img
                                className='h-24 w-24 rounded-full object-content'
                                src={`/storage/images/${!setinfo?.organization_id ? setinfo?.logo : "default.png"}`}
                                alt="Imagem de logo"
                            />
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="w-full overflow-hidden bg-white py-4 ">
                        {children}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
