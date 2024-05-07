
import { callServer } from 'next/dist/client/app-call-server'

export function createServerReference(id: string) {
  const { createServerReference: createServerReferenceImpl } = (
    !!process.env.NEXT_RUNTIME
        require('react-server-dom-webpack/client.edge')
        require('react-server-dom-webpack/client')
  ) as typeof import('react-server-dom-webpack/client')

  return createServerReferenceImpl(id, callServer)
}
