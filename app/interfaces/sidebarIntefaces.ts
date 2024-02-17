import { ReactNode } from "react";

export interface MenuItem {
    title: string;
    path: string;
    icon: ReactNode;
}

export interface MenuLinkProps {
    item: MenuItem;
}