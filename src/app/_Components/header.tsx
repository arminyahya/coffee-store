import "server-only"
import Link from 'next/link';
import Cart from './cart';
import { cookies } from 'next/headers';

export default function Header({ }) {
    const isLoggin = cookies().get('session')?.value;
    console.log(isLoggin);
    return (

        <div className="header">
            <div className="header-inner-top">
                <div className="header-item" ><Cart /></div>
                <div className="header-item"><Link href={isLoggin ? "/" : "/LogIn"}>{isLoggin ? "logout" : "login" }</Link></div>
                <div className="header-item"><Link href="/">LOGO</Link></div>
                <div className="header-item">Socials</div>
            </div>
            <div className="header-inner-bottom">
                <div className="header-item"><Link href="/Product-Category/Mix">Mix</Link></div>
                <div className="header-item"><Link href="/Product-Category/Turk">Turk</Link></div>
                <div className="header-item"><Link href="/Product-Category/Decaff">Decaff</Link></div>
                <div className="header-item"><Link href="/Blog">Blog</Link></div>
                <div className="header-item"><Link href="/About Us">About Us</Link></div>
            </div>
        </div>
    )
}