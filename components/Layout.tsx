import React, { PropsWithChildren, ReactElement } from 'react'
import Header from './Header'

export default function Layout({ children }: PropsWithChildren<{}>) {
    return (
        <>
            <div className="body-container flex">
                <Header />
                <main className='w-full sm:w-[95%] sm:ml-[90px]'>
                    {children}
                </main>
            </div>
        </>
    )
}
export const getLayout = (page: ReactElement) => (
    <Layout>{page}</Layout>
);