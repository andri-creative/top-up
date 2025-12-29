'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
    Menu, X, ShoppingCart, User, Search,
    Home, Receipt, BadgePercent, HelpCircle
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const cartItems = 3

    useEffect(() => setMounted(true), [])

    const navigationItems = [
        {
            name: 'Home',
            href: '/',
            icon: Home,
            color: 'primary',
        },
        {
            name: 'Transaksi',
            href: '/transaksi',
            icon: Receipt,
            color: 'primary',
        },
        {
            name: 'Promo',
            href: '/promo',
            icon: BadgePercent,
            color: 'accent',
        },
        {
            name: 'Help',
            href: '/help',
            icon: HelpCircle,
            color: 'primary',
        },
    ]


    const getColorClass = (color: string) => {
        if (color === 'secondary') return 'hover:text-secondary'
        if (color === 'accent') return 'hover:text-accent'
        return 'hover:text-primary'
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-xl bg-card/95">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between min-h-[64px] sm:min-h-[72px] lg:min-h-[80px]">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            alt="Gemesio"
                            width={80}
                            height={80}
                            priority
                            className="w-20 h-20 object-contain"
                        />


                        <div className="leading-tight">
                            <span className="
                block font-black
                text-lg sm:text-xl lg:text-2xl xl:text-3xl
                bg-[linear-gradient(135deg,hsl(186_100%_50%),hsl(200_100%_55%))]
                bg-clip-text text-transparent
              ">
                                GEMESIO
                            </span>
                            <span className="
                block font-semibold
                text-xs sm:text-sm lg:text-base
                bg-[linear-gradient(135deg,hsl(31_100%_60%),hsl(20_100%_55%))]
                bg-clip-text text-transparent
              ">
                                Digital Hub
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigationItems.map(item => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`
                    flex items-center gap-2
                    px-3 lg:px-4 py-2
                    text-sm lg:text-base
                    font-bold rounded-lg
                    text-foreground/80
                    ${getColorClass(item.color)}
                    hover:bg-primary/10 transition
                  `}
                                >
                                    {typeof Icon === 'function'
                                        ? <Icon />
                                        : <Icon className="w-4 h-4 lg:w-5 lg:h-5" />}
                                    {item.name}
                                </a>
                            )
                        })}
                    </div>

                    {/* RIGHT ACTIONS */}
                    <div className="flex items-center gap-2">

                        {/* SEARCH */}
                        <div className="hidden lg:block relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                placeholder="Search games..."
                                className="
                  pl-10 pr-4 py-2
                  w-56
                  text-sm
                  bg-background/50 border rounded-lg
                  focus:outline-none focus:border-primary
                "
                            />
                        </div>

                        {/* THEME */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="
                  hidden sm:flex
                  w-9 h-9 lg:w-10 lg:h-10
                  items-center justify-center
                  border rounded-lg
                  hover:border-primary transition
                "
                            >
                                {theme === 'dark' ? '🌙' : '☀️'}
                            </button>
                        )}

                        {/* CART */}
                        <button className="
              relative
              w-9 h-9 lg:w-10 lg:h-10
              border rounded-lg
              flex items-center justify-center
              hover:border-secondary transition
            ">
                            <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
                            {cartItems > 0 && (
                                <span className="
                  absolute -top-1 -right-1
                  w-5 h-5 text-xs
                  bg-secondary text-secondary-foreground
                  rounded-full flex items-center justify-center
                ">
                                    {cartItems}
                                </span>
                            )}
                        </button>

                        {/* LOGIN */}
                        <button className="
              hidden md:flex
              items-center gap-2
              px-4 py-2
              text-sm lg:text-base
              bg-gradient-logo
              text-primary-foreground
              font-bold rounded-lg
              hover:scale-105 transition
            ">
                            <User className="w-4 h-4 lg:w-5 lg:h-5" />
                            Login
                        </button>

                        {/* MOBILE MENU */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="
                md:hidden
                w-9 h-9
                border rounded-lg
                flex items-center justify-center
              "
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
