import {Component, ReactChild, ReactNode, Stateless} from 'react';

interface BreadcrumbProps {
    children: ReactNode;
    crumb?: string
}

interface Crumbs {
    backtrace: (name: string, payload?: object) => any;
}

type HOC<C> = (Component: C) => C;

export declare function leaveBreadcrumb<C>(crumb: string): HOC<C>;
export declare function withBreadcrumb<C>(Component: C): C & Crumbs;
export declare function addSpices<C>(spiceFactory: (payload: Object) => Object): HOC<C>;
export declare function connectBacktrace<C>(callback: (name: string[], payload?: object) => any): HOC<C>;

export default class extends Component<BreadcrumbProps, {}> {}

