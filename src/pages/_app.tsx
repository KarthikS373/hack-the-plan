import "../styles/globals.css"
import "mapbox-gl/dist/mapbox-gl.css"
import type { AppProps } from "next/app"
import { RecoilRoot } from "recoil"
import dynamic from "next/dynamic"

import NextNProgress from "nextjs-progressbar"
const Chakra = dynamic(() => import("../components/Root/Chakra.Root"))
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Chakra Component={Component} pageProps={pageProps}>
          {" "}
          <NextNProgress color="#6451FB" />
        </Chakra>
      </RecoilRoot>
    </>
  )
}

export default MyApp
