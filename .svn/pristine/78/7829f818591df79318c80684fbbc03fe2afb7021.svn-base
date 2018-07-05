import qs from 'qs'
import Axios from 'axios'

const apiPost = (url,data) => {
  _g.openGlobalLoading() 
  url = rootPath + url
  data = qs.stringify(data)
  return new Promise((resolve,reject)=>{
    Axios.post(url,data).then(res=>{
      resolve(res.data)
      _g.closeGlobalLoading() 
    }).catch(res=>{
      resolve(res)
      _g.closeGlobalLoading()
    })
  })
}

export default apiPost