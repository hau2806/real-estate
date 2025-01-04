<template>
  <section>
    <!-- banner  -->
    <div class="position-relative">
      <img
        class="w-100"
        src="https://bds.com.vn/images/banners/original/banner-home-01_1722295623.jpg"
        alt=""
      />
      <div
        class="row-heder-filters position-absolute top-50 start-50 translate-middle"
      >
        <search></search>
      </div>
    </div>
    <!-- noi bat  -->
    <div class="bg-color">
      <div class="container">
        <div class="row">
          <div class="mt-5">
            <h2>bất động sản nổi bật</h2>
          </div>
          <outstanding-item></outstanding-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from "@/components/nav/NgSearch.vue";
import OutstandingItem from "@/components/homepage/OutstandingItem.vue";

export default {
  components: {
    Search,
    OutstandingItem,
  },
};
</script>

<style scoped>
h2 {
  text-transform: uppercase;
}

.bg-color {
  background-color: #f3f4f7;
}
</style>
