import Link from 'next/link';
import React, { useEffect } from 'react'
export type KcHeaderProps = {
    disableDrawer?: boolean;
}

const KcHeader = (props: KcHeaderProps) => {

    const LinkItem = () => (
        <li>
            <a>
        
            </a>
        </li>
    )


    return (
        <header>
            <div className="drawer-content flex flex-col">
                <nav className="navbar drawer-content">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} htmlFor="header-drawer" className="btn btn-ghost md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-slate-400">
                                <li><Link href={"/tracks"}>Problemler</Link></li>
                                <li><Link href={"/contests"}>Yarışmalar</Link></li>
                                <li><Link href={"/challenges"}>Etkinlikler</Link></li>
                                <li><Link href={"/projects"}>Projeler</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl"><span className='text-[color:var(--brand-color)]'>Kod</span>Challenge</a>
                    </div>
                    <div className="navbar-center hidden md:flex">
                        <ul className="menu menu-horizontal px-1 text-slate-400">
                            <li><Link href={"/tracks"}>Problemler</Link></li>
                            <li><Link href={"/contests"}>Yarışmalar</Link></li>
                            <li><Link href={"/challenges"}>Etkinlikler</Link></li>
                            <li><Link href={"/projects"}>Projeler</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-primary">Giriş Yap</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default KcHeader