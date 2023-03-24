import React from "react"
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next"

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const HomePage: NextPage<HomePageProps> = () => {
  return <div className="center h-screen w-screen">Web3vents</div>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}

export default HomePage
