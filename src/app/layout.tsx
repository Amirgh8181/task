import type { Metadata } from "next";
import "@/assets/style/globals.css";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import { vazir } from "@/assets/constant/fonts";

export const metadata: Metadata = {
  title: "دایرکتوری حذف حساب های کاربری| حق فراموش شدن",
  description: "برای حذف حساب‌های کاربری خود در سرویس‌ها / اپلیکیشن‌ها / وب‌سایت‌ها می‌توانید از سرویس حق فراموش شدن استفاده کنید. این سرویس به شما این امکان را می‌دهد که از روش حذف حساب‌کاربری خود یا اکانت خود در بخش‌های مختلف اینترنت آگاه شوید.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa">

      <body className={`${vazir.variable}`}>
        <HeaderComponent />
          {children}
        <FooterComponent />
      </body>
    </html>
  );
}


