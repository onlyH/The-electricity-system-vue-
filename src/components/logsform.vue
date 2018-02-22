<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名:</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>

      <div class="g-form-line">
        <div class="g-form-label">密码：</div>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>

      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
          <p>{{errorText}}</p>
        </div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        usernameModel: '',
        passwordModel: '',
        errorText :''
      }
    },
    computed: {
      userErrors() {
        let errorText, status
        if (!/@/g.test(this.usernameModel)) {
          status = false;
          errorText = '没有@哟'
        } else {
          status = true;
          errorText = ''
        }
        //!undefined = true,解决开始就报错的问题
        if(!this.userFlag) {
          errorText = '';
          this.userFlag = true
        }
        return {
          status,
          errorText
        }
      },
      passwordErrors() {
        let status,errorText;
        if(!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false;
          errorText = '不超过6位哦'
        }else{
          status = true;
          errorText = ''
        }
        if(!this.passwordFalg){
          errorText = '';
          this.passwordFalg = true;

        }
        return {
          status,
          errorText
        }
      }
    },
    methods: {
      onLogin () {
        if (!this.userErrors.status || !this.passwordErrors.status) {
          this.errorText = '部分选项未通过'
        }
        else {
          this.errorText = '';
          this.$http.get('api/login').then(function(res){
            var that = this;
            that.$emit('has-log',res.data)
            console.log(res.data  )
          },function(error) {
            console.log(error)
          })
        }
      }
    }
  }
</script>
