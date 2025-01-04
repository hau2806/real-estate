<template>
  <div class="container">
    <div class="row">
      <div class="wapper-form col-xl-6 col-lg-7 col-md-9 col-sm-12 mx-auto">
        <div class="col-12 col-md-10 mx-auto">
          <form @submit.prevent="submitForm">
            <h2 class="frame_auto_head text-center pt-2">Đăng Ký</h2>
            <!-- Email -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="email" class="form-label">
                  <span style="color: #e30000">*</span> Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Nhập email"
                  v-model.trim="email"
                  required
                />
              </div>
            </div>

            <!-- Mật khẩu -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="password" class="form-label">
                  <span style="color: #e30000">*</span> Mật khẩu:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Nhập mật khẩu"
                  v-model.trim="password"
                  required
                />
              </div>
            </div>

            <!-- Họ và tên -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="fullname" class="form-label">Họ và tên:</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  placeholder="Nhập họ và tên"
                  v-model.trim="fullName"
                  required
                />
              </div>
            </div>

            <!-- Số điện thoại 1 -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="phone1" class="form-label">
                  <span style="color: #e30000">*</span> Số điện thoại 01:
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone1"
                  placeholder="Nhập số điện thoại 01"
                  v-model.trim="phone1"
                  required
                />
              </div>
            </div>

            <!-- Số điện thoại 2 -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="phone2" class="form-label">Số điện thoại 02:</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone2"
                  placeholder="Nhập số điện thoại 02"
                  v-model.trim="phone2"
                />
              </div>
            </div>

            <!-- Mô tả dịch vụ -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="serviceDescription" class="form-label">
                  <span style="color: #e30000">*</span> Mô tả dịch vụ:
                </label>
                <textarea
                  class="form-control"
                  id="serviceDescription"
                  rows="3"
                  placeholder="Nhập mô tả dịch vụ"
                  v-model.trim="serviceDescription"
                  required
                ></textarea>
              </div>
            </div>

            <!-- Thành viên giới thiệu -->
            <div class="row mb-3">
              <div class="col-12">
                <label for="referrer" class="form-label"
                  >Thành viên giới thiệu:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="referrer"
                  placeholder="Nhập tên thành viên giới thiệu"
                  v-model.trim="referrer"
                />
              </div>
            </div>

            <!-- Button Đăng Ký -->
            <div class="row">
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-danger my-3 px-5">
                  Đăng Ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      fullName: "",
      phone1: "",
      phone2: "",
      serviceDescription: "",
      referrer: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Họ và tên:", this.fullName);
      console.log("Số điện thoại 1:", this.phone1);
      console.log("Số điện thoại 2:", this.phone2);
      console.log("Mô tả dịch vụ:", this.serviceDescription);
      console.log("Thành viên giới thiệu:", this.referrer);
    },
  },
};
</script>

<style scoped>
.wapper-form {
  background-color: #fbfbfb;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 80px auto 70px auto;
  padding: 20px;
}

.frame_auto_head {
  font-size: 25px;
  text-transform: uppercase;
  margin-bottom: 20px;
  line-height: 25px;
  padding-bottom: 25px;
  margin-top: 25px;
  font-weight: bold;
  border-bottom: 1px solid #e6e6e6;
}
</style>
