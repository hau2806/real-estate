<template>
  <div>
    <form class="navbar-search-form" @submit.prevent="submitForm">
      <input type="hidden" v-model="form.module" name="module" />
      <input type="hidden" v-model="form.view" name="view" />
      <input type="hidden" v-model="form.Itemid" name="Itemid" />
      <input type="submit" id="searchbt" class="searchbt" value="" />
      <div class="icon-close-search" @click="clearSearch"></div>
      <div class="group-local clearfix">
        <ul class="list-type clearfix">
          <li
            :class="{ active: form.sl_type === '1' }"
            @click="form.sl_type = '1'"
          >
            Nhà đất bán
          </li>
          <li
            :class="{ active: form.sl_type === '2' }"
            @click="form.sl_type = '2'"
          >
            Nhà đất cho thuê
          </li>
        </ul>
        <input
          type="hidden"
          id="sl_type"
          v-model="form.sl_type"
          name="sl_type"
        />
        <input
          class="keyword-search"
          type="text"
          placeholder="Nhập từ khóa, khu vực tìm kiếm. Ví dụ: Hà Đông"
          v-model="form.keyword"
        />
        <ul class="list-local clearfix"></ul>
      </div>
      <div class="clearfix">
        <span class="label_search">Hoặc chọn thuộc tính tìm kiếm dưới đây</span>
        <span id="advanced-search" class="advanced-search">Mở rộng</span>
      </div>
      <div class="box-search-select clearfix">
        <div class="left-box-search-select">
          <select class="sl-sear" v-model="form.sl_cate">
            <option value="0">-- Danh mục --</option>
            <option
              v-for="(option, index) in categories"
              :key="index"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <select class="sl-sear" v-model="form.sl_city">
            <option value="0">Tỉnh/Tp</option>
            <option
              v-for="(city, index) in cities"
              :key="index"
              :value="city.value"
            >
              {{ city.text }}
            </option>
          </select>
          <select class="sl-sear" v-model="form.sl_district">
            <option value="0">Quận / Huyện</option>
          </select>
          <select class="sl-sear" v-model="form.sl_ward">
            <option value="0">Xã / Phường</option>
          </select>
          <select class="sl-sear" v-model="form.sl_project">
            <option value="0">Chọn dự án</option>
          </select>
          <select class="sl-sear" v-model="form.sl_acreage">
            <option value="0">Diện tích</option>
            <option
              v-for="(acreage, index) in acreages"
              :key="index"
              :value="acreage.value"
            >
              {{ acreage.text }}
            </option>
          </select>
          <select class="sl-sear" v-model="form.sl_price">
            <option value="0">-- Mức giá --</option>
            <option
              v-for="(price, index) in prices"
              :key="index"
              :value="price.value"
            >
              {{ price.text }}
            </option>
          </select>
          <select class="sl-sear" v-model="form.sl_bedroom">
            <option value="0">Số phòng ngủ</option>
            <option
              v-for="(bedroom, index) in bedrooms"
              :key="index"
              :value="bedroom.value"
            >
              {{ bedroom.text }}
            </option>
          </select>
          <select class="sl-sear" v-model="form.sl_direction">
            <option value="0">Hướng</option>
            <option
              v-for="(direction, index) in directions"
              :key="index"
              :value="direction.value"
            >
              {{ direction.text }}
            </option>
          </select>
        </div>
        <span class="bt-sm" id="submitform" @click="submitForm">Tìm kiếm</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        module: "products",
        view: "search",
        Itemid: "10",
        sl_type: "2",
        keyword: "",
        sl_cate: "0",
        sl_city: "0",
        sl_district: "0",
        sl_ward: "0",
        sl_project: "0",
        sl_acreage: "0",
        sl_price: "0",
        sl_bedroom: "0",
        sl_direction: "0",
      },
      categories: [
        { value: "66", text: "Cho thuê căn hộ chung cư" },
        { value: "67", text: "Cho thuê nhà riêng" },
        // Add more categories...
      ],
      cities: [
        { value: "1", text: "Hà Nội" },
        { value: "79", text: "Hồ Chí Minh" },
        // Add more cities...
      ],
      acreages: [
        { value: "0-30", text: "Dưới 30m2" },
        { value: "30-50", text: "30m2 - 50m2" },
        // Add more acreage options...
      ],
      prices: [
        { value: "0-1000000", text: "< 1 triệu" },
        { value: "1000000-3000000", text: "1 - 3 triệu" },
        // Add more price options...
      ],
      bedrooms: [
        { value: "1", text: "1+" },
        { value: "2", text: "2+" },
        // Add more bedroom options...
      ],
      directions: [
        { value: "9", text: "Hướng Đông" },
        { value: "6", text: "Hướng Tây" },
        // Add more direction options...
      ],
    };
  },
  methods: {
    submitForm() {
      console.log("Submitted form:", this.form);
      // Handle form submission
    },
    clearSearch() {
      this.form.keyword = "";
    },
  },
};
</script>

<style scoped>
p {
  position: absolute;
}
</style>
