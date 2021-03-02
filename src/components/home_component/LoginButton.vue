<template>
    <div class="login">
        <a-button type="primary" @click="showModal">
      FOR SERVICE
    </a-button>
    <a-modal
      title="Login"
      :visible="visible"
      :confirm-loading="confirmLoading"
      :footer="null"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
        <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-button type="primary" html-type="submit" class="login-form-button">
      <router-link to="/map">
        Log in
        </router-link>
      </a-button>    
  </a-form>
    </a-modal>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ModalText: '',
      visible: false,
      confirmLoading: false,
    };
  },
   beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
      handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.ModalText = 'Wait.........';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.login{
    position: fixed;
    top: 100px;
    right: 50px;
    z-index: 999;
    transition: all 0.2s ease-in-out;
    & .ant-btn-primary{
        background-color: $main-yellow-color;
    border-color: $main-yellow-color;
    &:hover{
        filter: brightness(130%);
        animation: swing 1s ease;
animation-iteration-count: 1;
    }
    }
}
@keyframes swing {
15% {
transform: translateX(5px);
}
30% {
transform: translateX(-5px);
}
50% {
transform: translateX(3px);
}
65% {
transform: translateX(-3px);
}
80% {
transform: translateX(2px);
}
100% {
transform: translateX(0);
}
}
</style>