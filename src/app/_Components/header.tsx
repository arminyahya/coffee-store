import Link from 'next/link';

export default function Header({ }) {
    return (

        <div className="header">
            <div className="header-inner-top">
                <div className="header-item">Your Cart</div>
                <div className="header-item">UserInfo</div>
                <div className="header-item">
                    <Link href="/">
                        LOGO
                    </Link>
                </div>
                <div className="header-item">Socials</div>
            </div>
            <div className="header-inner-bottom">
                <div className="header-item"><Link href="/Mix">Mix</Link></div>
                <div className="header-item"><Link href="/Turk">Turk</Link></div>
                <div className="header-item"><Link href="/Decaff">Decaff</Link></div>
                <div className="header-item"><Link href="/Posts">Posts</Link></div>
                <div className="header-item"><Link href="/About Us">About Us</Link></div>
            </div>
        </div>
    )
}