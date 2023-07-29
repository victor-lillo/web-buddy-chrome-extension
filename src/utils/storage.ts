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

export async function setStorage(value: { [key: string]: string | number | Array<any> }) {
  await chrome.storage.sync.set(value)
}

export async function getStorage(key: string) {
  const result = await getWholeStorage()
  return result[key]
}

export async function getWholeStorage() {
  const result = await chrome.storage.sync.get()
  return result
}

export async function clearStorage() {
  await chrome.storage.sync.clear()
}
