/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-02-10 08:37:49
 * @FilePath: /dataseek-website/src/app/(pages)/layout.tsx
 */

import FormRequirement from "@/components/FormRequirement";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex flex-col min-h-[100vh]">
            <SiteNavbar />
            <div className="flex-1">
                {children}
            </div>
            <SiteFooter />
            <FormRequirement />
        </div>
    );
}
