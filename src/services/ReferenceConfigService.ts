import { AxiosError } from 'axios'
import { getGlobalConfig } from '@/config'
import { ReferenceConfig } from '@/types'
import { ApiBase } from './BaseApiService'

const globalConfig = getGlobalConfig()

export class ReferenceConfigService extends ApiBase {
  resource = ''

  getAll = async () => {
    try {
      const url = new URL(`${globalConfig.appUrl}/referenceConfigs`)

      return (await this.theAxios.get<ReferenceConfig[]>(url.toString())).data
    } catch (error) {
      await this.handleError(
        error as AxiosError,
        'ReferenceConfigService.getAll'
      )

      throw error
    }
  }
}
