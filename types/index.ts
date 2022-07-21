import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type LayoutProps = {
    readonly children: ReactNode;
};