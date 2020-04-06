<template>
  <div class="login-wrap" >
    <el-form class="form-login" label-position="top" label-width="80px" :model="formData">
      <h2 class="login-title">用户登陆</h2>
      <el-form-item label="账号">
        <el-input v-model="formData.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.userPwd"></el-input>
      </el-form-item>
      <el-button
      @click.prevent = 'handleLogin()'
      class="login-btn" type="primary">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
  import qs from 'qs'
  export default{

    data(){
      return{
        formData:{
          account:'',
          userPwd:''
        }
      }
    },
    methods :{
      handleLogin(){
      // this.$http.get('/admin/login',this.formData).then(res=>{

      // })
          this.$http.post('/admin/login',qs.stringify(this.formData)).then((res)=>{
                              if(res.data.code===200){
                                localStorage.setItem('token',res.data.data.token)
                                this.$router.push({name:'home'})
                                 this.$message({
                                          showClose: true,
                                          message: '登陆成功',
                                          type: 'success'
                                        });
                               }else{
                                this.$message({
                                          showClose: true,
                                          message: res.data.info,
                                          type: 'error'
                                        });
                               }
          })

        // this.$http.get('/admin/login', {
        //                 params: this.formData
        //             }).then((res) => {
        //                   if(res.data.code===200){
        //                     localStorage.setItem('token',res.data.data.token)
        //                     this.$router.push({name:'home'})
        //                      this.$message({
        //                               showClose: true,
        //                               message: '登陆成功',
        //                               type: 'success'
        //                             });
        //                    }else{
        //                     this.$message({
        //                               showClose: true,
        //                               message: res.data.info,
        //                               type: 'error'
        //                             });
        //                    }
        //             }).catch((error) => {
        //                 console.log(error)
        //             })
      }
    }
  }
</script>

<style>
.login-wrap{
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-wrap .form-login{
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}
.login-wrap .form-login .login-btn{
  width: 100%;
}
.login-title{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
