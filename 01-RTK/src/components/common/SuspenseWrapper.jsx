import React, {Suspense} from 'react'
import Loader from './Loader'

const SuspenseWrapper = ({component}) => {
  return (
      <Suspense fallback={<Loader />}>{component}</Suspense>
  )
}

export default SuspenseWrapper
