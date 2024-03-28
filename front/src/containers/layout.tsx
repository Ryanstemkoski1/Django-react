import React from "react"
import { Header } from "../components/organisms/header"

export const PublicLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export const AuthLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}

export const PrivateLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}