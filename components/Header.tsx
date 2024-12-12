import Link from "next/link";
import Image from "next/image";
import { Button } from '@/components/ui/button'
import {LayoutGrid, Search, ShoppingBasket} from "lucide-react";

export default function Header() {
    return (
        <div className='p-5 shadow-sm flex justify-between bg-green-300'>
            <div className='flex items-center gap-8'>


                <Link href={'/'}>
                    <Image src='/logo.png' alt='logo'
                           width={100}
                           height={80}
                           className='cursor-pointer hover:scale-x-105 transition-all duration-400'
                    />
                </Link>

                <h2 className='hidden md:flex gap-2 items-center
                border hover:scale-x-105 transition-all duration-400 rounded-full p-2 px-10 bg-slate-200 cursor-pointer
            '>
                    <LayoutGrid className='h-5 w-5'/> Category</h2>

            </div>

            <div className=' md:flex gap-3 items-center
             border rounded-full p-2 px-5
             hidden'>
                <Search className={'cursor-pointer'}/>
                <input type="text"
                       placeholder='Search'
                       className='outline-none rounded-md w-full px-2 cursor-pointer'
                />

            </div>
            <div className='flex gap-5 items-center'>
                <h2 className='flex gap-2 items-center text-lg cursor-pointer'>
                    <ShoppingBasket className='h-10 w-10  bg-white text-blue-600  rounded-full hover:scale-x-105 hover:bg-amber-300 transition-all duration-400'/>
                    <span className='text-white  px-2 bg-blue-700 rounded-full'>0</span>
                </h2>
                <Link href={'/'}>
                    <Button className={'bg-yellow-700 hover:scale-x-105 transition-all duration-400'}>
                        Login
                    </Button>
                </Link>
            </div>
        </div>

    )
}