import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ""
const options = {}

let client
let clientPromise: any;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}

const _global = global as any

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!_global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    _global._mongoClientPromise = client.connect()
  }
  clientPromise = _global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise