import Link from 'next/link'
import { getCurrentUser } from "aws-amplify/auth/cognito";

function Nav() {
        return ( <> 
            <div className='nav flex flex-nowrap midnight-dark text-gray-50 w-full border-b h-8'>
                <div className='flex items-center'>
                        <a href='#' className='text-gray-800 laffable -mt-1 ml-1'>
                            <Link href='/'><span>L&apos;Affable</span>
                            </Link>
                        </a>
                </div>
                <div className='flex midnight-dark text-sm items-center pr-1 mr-1'>        
                <div className='flex midnight-dark text-sm items-center pr-1 mr-1'>                        
                    <Link href='/myjokes'>
                                <button className='rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200'>
                                    <a className='mx-3'>My Jokes</a>                                        
                                </button>
                    </Link>
                </div>
                    <Link href='/api/auth/login'>
                                <button className='rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200'>
                                    <a className='mx-3'>Login</a>                                        
                                </button>
                    </Link> 
                </div>
                <div className='flex midnight-dark text-sm items-center pr-1 mr-1'>                        
                    <Link href='/api/auth/logout'>
                                <button className='rounded-xl bg-gray-100 text-gray-800 font-bold hover:bg-gray-200'>
                                    <a className='mx-3'>Sign Out</a>                                        
                                </button>
                    </Link>
                </div>  
            </div>
        </> 
        );
    }
export default Nav;