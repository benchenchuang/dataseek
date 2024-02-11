/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:38:09
 * @LastEditTime: 2024-02-10 11:01:57
 * @FilePath: /dataseek-website/src/components/SiteNavbar/index.tsx
 */
'use client';
import React, { useEffect, useState } from 'react'
import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname } from 'next/navigation';
import { Home, MenuItem, menuList, siteConfig } from '@/config/site';

const SiteNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [path, setPath] = useState<string>('');

    const pathname = usePathname();
    useEffect(() => {
        setPath(pathname)
    }, [])

    return (
        <>
            <Navbar
                shouldHideOnScroll
                className="bg-white sm:h-12 md:h-12 opacity-90 before:backdrop-blur-lg lg:h-16 border-b-1 border-[#e4e4e4]"
                maxWidth='xl'
                height={'3rem'}
                classNames={{
                    item: [
                        "flex",
                        "relative",
                        "h-full",
                        "data-[active=true]:after:content-['']",
                        "data-[active=true]:after:absolute",
                        "data-[active=true]:after:bottom-0",
                        "data-[active=true]:after:left-0",
                        "data-[active=true]:after:right-0",
                        "data-[active=true]:after:h-[4px]",
                        "data-[active=true]:after:rounded-[2px]",
                        "data-[active=true]:after:bg-block-primary",
                        // "data-[active=true]:bg-navbar-active",
                    ],
                }}>
                {/* pc端 */}
                <NavbarContent className="hidden md:flex">
                    <NavbarBrand>
                        <Link href={Home}>
                            <Image
                                width={132}
                                alt={siteConfig.name}
                                src="/images/common/logo.png"
                            />
                        </Link>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="md:hidden">
                    <NavbarBrand>
                        <Link href={Home}>
                            <Image
                                width={69}
                                alt={siteConfig.name}
                                src="/images/common/logo.png"
                            />
                        </Link>
                    </NavbarBrand>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="text-white"
                    />
                </NavbarContent>

                <NavbarContent className="hidden md:flex gap-0 md:h-12 lg:h-16">
                    {
                        menuList.map((menu: MenuItem) => {
                            return (
                                <NavbarItem
                                    key={menu.path}
                                    className='mx-4'
                                    isActive={pathname == menu.path ? true : false}>
                                    <Link
                                        className={`
                                        md:text-[14px] mx-5 xl:text-[16px] font-[400] h-full flex justify-center
                                        hover:text-site-primary ${pathname == menu.path ? "text-site-primary" : 'text-site-gray'}
                                        `}
                                        href={menu.path}
                                        disableAnimation={true}>{menu.name}</Link>
                                </NavbarItem>
                            )
                        })
                    }
                </NavbarContent>
                <NavbarMenu>
                    {menuList.map((menu: MenuItem) => (
                        <NavbarMenuItem
                            key={menu.path}
                            isActive={pathname == menu.path ? true : false}>
                            <Link
                                className="w-full text-site-black"
                                href={menu.path}
                            >{menu.name}</Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar >
        </>
    )
}

export default SiteNavbar