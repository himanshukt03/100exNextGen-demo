import Providers from "@/layouts/Providers";
import "../styles/index.scss";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: "swap",
  weight: ['300', '400', '500', '600', '700', '800',],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="keywords" content="100exNextGen, startup accelerator, holding company, exponential growth, venture capital" />
        <meta name="description" content="100exNextGen - Accelerating the future through exponential growth and transformative impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* For IE  */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}