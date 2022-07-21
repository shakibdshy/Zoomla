import React, { PropsWithChildren, ReactElement } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}
export const getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
);