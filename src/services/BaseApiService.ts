import axios, { AxiosError } from 'axios'
import i18next from 'i18next'

import { getGlobalConfig } from '@/config'

const globalConfig = getGlobalConfig()

export class ApiBase {
  protected theAxios = ApiBase.getAuthAxios()

  handleError = async (error: AxiosError, message: string) => {
    if (globalConfig.inProductionEnvironment) {
      // Send the error to error log in production
    } else {
      console.error(error, message)
    }
  }

  private static getAuthAxios = () => {
    const axiosApiInstance = axios.create()

    // Request interceptor for API calls
    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const lang = i18next.language

        if (config && config.headers) {
          config.headers.set('Accept-Language', lang)
        }

        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )

    return axiosApiInstance
  }
}
