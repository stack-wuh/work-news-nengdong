const _g = {
  openGlobalLoading(){
    setTimeout(()=>{
      store.dispatch('showLoading',true) 
    })
  },
  closeGlobalLoading(){
    setTimeout(()=>{
      store.dispatch('showLoading',false)
    })
  },
  toastMsg(type, msg) {
    switch (type) {
      case 'normal':
        $bus.$message(msg) 
        break
      case 'success':
        $bus.$message({
          message: msg,
          type: 'success'
        })
        break
      case 'warning':
        $bus.$message({
          message: msg,
          type: 'warning'
        })
        break
      case 'error':
        $bus.$message({
          message:msg,
          type:'error'
        })
        break
    }
  },
}
export default _g