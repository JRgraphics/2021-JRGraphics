<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['ionicon', classes]"
    viewBox="0 0 512 512"
  >
    <title>Chevron Back</title>
    <path
      fill="none"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M328 112L184 256l144 144"
    />
  </svg>
</template>

<script>
export default {
  props: {
    classes: {
      default: '',
    },
    color: {
      default: '#fff',
    },
  },
}
</script>

<style lang="scss" scoped></style>
