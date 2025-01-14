import axios, { Axios, AxiosRequestConfig } from 'axios'
import FormData from 'form-data'
import stream from 'stream'

export class ApipilotRequest {
  private static instance: ApipilotRequest

  private static axiosInstance: Axios

  constructor() {}

  static initAxiosInstance() {
    let timeout = 5000;
    let createParams = <AxiosRequestConfig>{
      withCredentials: true,
    }
    createParams.timeout = Number(timeout)
    if (createParams.timeout == 0) {
      // web平台timeout为0时，表示设置0ms超时，适配成0表示不超时
      createParams.timeout = 9999999
    }

    this.axiosInstance = axios.create(createParams)
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ApipilotRequest()
      this.initAxiosInstance()
    }
    return this.instance
  }

  public get(url: string, params?: object, config?: object): Promise<any> {
    return ApipilotRequest.axiosInstance.get(url, {
      data: {},
      ...config,
      params: Object.assign({}, params),
    })
  }
  public post(
    url: string,
    params?: object,
    config?: {
      [key: string]: any
    }
  ): Promise<any> {

    const headers = {
      ...config?.headers,
    }
    const contentType =
      headers['Content-Type'] ||
      headers['content-type'] ||
      headers['Content-type'] ||
      headers['content-Type']
    let _data: any = { ...params }
    let requestParams: { [x: string]: any }

    if (
      contentType == 'application/x-www-form-urlencoded' ||
      contentType == 'multipart/form-data'
    ) {
      // 构造 FormData
      requestParams = new FormData()
      let _type
      for (let k in _data) {
        _type = Object.prototype.toString.call(_data[k])
        if (_type === '[object Array]') {
          _data[k].forEach((item: any) => {
            if (Object.prototype.toString.call(item) == '[object Uint8Array]') {
              const bufferStream = new stream.PassThrough()
              requestParams.append(k, bufferStream.end(item), ' ')
            } else {
              requestParams.append(k, item)
            }
          })
        } else if (_type == '[object Uint8Array]') {
          const bufferStream = new stream.PassThrough()
          requestParams.append(k, bufferStream.end(_data[k]), ' ')
        } else {
          requestParams.append(k, _data[k])
        }
      }
    } else {
      requestParams = { ..._data }
    }

    return ApipilotRequest.axiosInstance.post(url, requestParams, {
      data: {},
      ...(config || {}),
      headers,
    })
  }
}
