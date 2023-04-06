import React, { FC } from 'react';
import { LayoutProps } from './Layout.types';
import { Header, PageRow } from '@/components'


export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <PageRow>
                <Header
                    navItems={[
                        {
                            name: 'Discord bot',
                            url: '/discordbot',
                        },
                        {
                            name: 'About me',
                            url: '/aboutme',
                        },
                    ]} />
            </PageRow>
            {children}
        </>
    )
}