type IStorage = {
  count: number
  installDate?: Date
}

const defaultStorage: IStorage = {
  count: 0,
}

export const storage = {
  get: (): Promise<IStorage> => chrome.storage.sync.get(defaultStorage) as Promise<IStorage>,
  set: (value): Promise<void> => chrome.storage.sync.set(value),
}

export async function setStorage(value: { [key: string]: string | number }) {
  await chrome.storage.sync.set(value)
}

export async function getStorage(key: string) {
  const result = await getFullStorage()
  console.log(`"${key}" value is: ${result[key]}`)
  return result[key]
}

export async function getFullStorage() {
  const result = await chrome.storage.sync.get()
  console.log('Full Storage is: ' + JSON.stringify(result))
  return result
}

export async function clearStorage() {
  await chrome.storage.sync.clear()
}
