<template>
  <span :class="setColor">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: "SimpleBadge",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    rounded: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    setColor() {
      return `${this.rounded ? "rounded-2xl" : "rounded"} text-${
        this.color
      }-600 bg-${
        this.color
      }-200 inline-block px-3 py-2 text-xs font-semibold uppercase last:mr-0`;
    }
  }
};
</script>

<style></style>
