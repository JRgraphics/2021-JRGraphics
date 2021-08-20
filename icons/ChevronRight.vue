<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['ionicon', classes]"
    viewBox="0 0 512 512"
  >
    <title>Chevron Forward</title>
    <path
      fill="none"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="48"
      d="M184 112l144 144-144 144"
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
