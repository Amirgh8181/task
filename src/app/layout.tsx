import type { Metadata } from "next";
import "@/assets/style/globals.css";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
import ShowRoute from "@/components/ShowRoute";

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

      <body>
        <HeaderComponent />
        <ShowRoute />
        <main className="container min-h-screen mx-auto md:my-12 my-8">
          {children}
        </main>
        <FooterComponent />
        <div className='w-full grid place-items-center  bg-white py-4'>
          <p className="w-[80%] h-full flex items-center text-xs 2xl:text-xl">
            © ۲۰۲۴ - ۲۰۲۱ | این سرویس به صورت متن باز و با لایسنس Apache-2.0 License منتشر شده است. | قوانین سرویس
          </p>
        </div>

      </body>
    </html>
  );
}


