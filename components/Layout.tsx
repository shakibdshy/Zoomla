import React, { PropsWithChildren, ReactElement } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <div className="body-container flex">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}
export const getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
);