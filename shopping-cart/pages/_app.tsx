import type { AppProps } from "next/app"
import { Inter as FontSans } from "@next/font/google"
import { ThemeProvider } from "next-themes"
import   CartProvider from '../contexts/cart.context'
import { Provider } from "react-redux"
import { store } from "@/store/Store"

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Provider store={store}>
        <CartProvider>
        <Component {...pageProps} />
        </CartProvider>
        </Provider>
      </ThemeProvider>
    </>
  )
}
