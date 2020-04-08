import * as React from 'react'
import { Header, BackgroundLogo } from 'src/components'

const NotFound: React.FC = () => {
  return (
    <>
      <Header title="Niks gevonden" />
      <BackgroundLogo />

      <h1>Niks gevonden!</h1>
    </>
  )
}

export default NotFound
