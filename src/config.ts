export type Configuration = {
  inProductionEnvironment: boolean
  inDemo: boolean
  appUrl: string
}

const { VITE_API_URL } = import.meta.env

let globalConfig: Configuration | undefined = undefined

export const getGlobalConfig = (): Configuration => {
  if (globalConfig === undefined) {
    let config: Configuration

    if (import.meta.env.PROD) {
      config = {
        inProductionEnvironment: true,
        inDemo: false,
        appUrl: VITE_API_URL || '',
      }
    } else {
      config = {
        inProductionEnvironment: false,
        inDemo: true,
        appUrl: VITE_API_URL || '',
      }
    }

    globalConfig = config
  }

  return globalConfig
}
