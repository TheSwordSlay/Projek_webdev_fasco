import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';


export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className='columns-2'>
                <div>
                    <div className='flex justify-center mt-12'>
                        <div>
                            <Link href="/">
                                <ApplicationLogo className="w-80 h-28 fill-current text-gray-500" />
                            </Link>
                        </div>                        
                    </div>
                    <div className='flex justify-center'>                  
                        {children}
                    </div>
                </div>
                <div className="relative min-h-screen">
                    <img className="w-full aspect-square brightness-50" src="../img/decorationside.jpg"/>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 max-w-md text-center">
                    <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Kulinerfest</h1>
                    <p className="mb-5 text-xl font-normal text-white" >Dont have an account yet?</p>
                    <Link href={route('register')}>
                        <button className="btn btn-primary text-white">SIGN UP</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
