import Header from "../components/organisms/header"

export const PublicLayout = ({children}) => {
  return (
    <>
      <Header />
      <div className="">
        {children}
      </div>
    </>
  )
}

export const PrivateLayout = ({children}) => {
  return (
    <>
      <Header />
      <div className="">
        {children}
      </div>
    </>
  )
}
