/**
 * 数据请求hooks
 * @author 施阳 2019-9-20
 * @return {data, isLoading, dispatch}
 * data： 请求结果
 * isLoading：true-请求中 false-请求结束
 * dispatch：手动触发请求
 */
import Taro, { useState, useEffect, useCallback } from '@tarojs/taro'
/**
 * @param {fuction} url 请求方法
 * @param {obj}} params 请求参数
 * @param {bool} isImmediately 是否立即执行
 */
const useFetch = (url, params, isImmediately = true) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  // 接口请求
  const fetch = useCallback(
    (value = params) => {
      setIsLoading(true)

      return new Promise((resolve, reject) => {
        url(value)
          .then(e => {
            setData(e)
            resolve(e)
          })
          .catch(err => {
            reject(err)
          })
          .finally(() => setIsLoading(false))
      })
    },
    [params, url]
  )

  /**
   * 手动触发接口请求
   * @param {obj} value 手动触发请求时可直接传入请求参数，否则取默认参数
   */
  const dispatch = useCallback((value = params) => fetch(value), [fetch, params])

  useEffect(() => {
    isImmediately && fetch()
  }, [fetch, isImmediately])

  return { data, isLoading, dispatch }
}

export default useFetch
