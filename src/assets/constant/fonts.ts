import localFont from "next/font/local";

export const vazir = localFont({
    adjustFontFallback:'Arial',
    preload: true,
    variable: '--vazir',
    display: "swap",
    src: [
        {
            path: '../fonts/Vazir-FD-WOL.woff2',
            weight: 'normal',
            style: 'normal',
        },
        {
            path: '../fonts/Vazir-Medium-FD-WOL.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Vazir-Thin-FD-WOL.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../fonts/Vazir-Light-FD-WOL.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../fonts/Vazir-Bold-FD-WOL.woff2',
            weight: 'bold',
            style: 'normal',
        },
    ],
})