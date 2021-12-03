interface MetaData {
  user: Object
  project: Object
}

interface Design {
  designId: string
  name: string
  smiles: string
}

type messageHandler = (event: MessageEvent) => void
type connectionEstablishedHandler = () => void
type updateCurrentDesignHandler = (currentDesign: Design, metaData: MetaData) => void

export interface TXDAMessageHandlers {
  _message?: messageHandler
  connectionEstablished?: connectionEstablishedHandler
  updateCurrentDesign?: updateCurrentDesignHandler
}

export interface PortWrapper {
  port: MessagePort;
  requestCurrentDesign: () => void
}
