import { Web3Storage } from 'web3.storage'


// Create a web3.storage client
const MakeStorageClient = () => {
  return new Web3Storage({token: process.env.WEB3STORAGE_TOKEN})
}

// Send data to IPFS
const saveToIpfs = async (files) => {
  const client = MakeStorageClient()
  const cid = await client.put([files])
  console.log(`File stored to IPFS with CID: ${cid}`)
  return cid
}

const retriveData = async (cid) => {
  const client = MakeStorageClient()
  const res = await client.get(cid)
  console.log(`Got a response! [${res.status}] ${res.statusText}`)
  if (!res.ok) {
    throw new Error(`failed to get ${cid} - [${res.status}] ${res.statusText}`)
  }

  // unpack File objects from the response
  const files = await res.files()
  for (const file of files) {
    console.log(`${file.cid} -- ${file.path} -- ${file.size}`)
  }
}