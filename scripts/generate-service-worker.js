import fs from 'fs'

let serviceWorkerContent = ''

const updateServiceWorkerVersion = () => {
  const date = new Date()
  const timestamp = Date.now()
  serviceWorkerContent = serviceWorkerContent
    .replace('const BUILD_VERSION = 1', `const BUILD_VERSION = ${timestamp} // ${date}`)
    .replace('const CACHE_NAME = 2', `const CACHE_NAME = 'offline-cache-${timestamp}' // ${date}`)
}

const generateServiceWorker = async () => {
  const serviceWorkerBoilerPlate = './src/utils/PWA/service-worker.js'

  const readFile = (resolve) => {
    serviceWorkerContent = fs.readFileSync(serviceWorkerBoilerPlate, 'utf-8')
    resolve()
  }

  const saveServiceWorkerDataIntoAFile = () => {
    try {
      fs.writeFileSync('./build/service-worker.js', serviceWorkerContent)

      console.log('\n---------------------------------')
      console.log('Service Worker Generated 😄')
      console.log('---------------------------------')
    } catch (e) {
      console.log('\n---------------------------------')
      console.log('Unable to create Service Worker file 😔')
      console.log('---------------------------------')
      throw e
    }
  }

  new Promise((resolve) => readFile(resolve))
    .then(updateServiceWorkerVersion())
    .then(saveServiceWorkerDataIntoAFile())
}

export default generateServiceWorker
