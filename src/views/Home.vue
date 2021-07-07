<template>
  <div class="home">
    <a-button type="primary">
      <template #icon><SearchOutlined /></template>
      Search
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "Home",
  components: {
    SearchOutlined
  }
});
</script>
