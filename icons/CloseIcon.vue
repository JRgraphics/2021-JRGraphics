<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="['ionicon', classes]"
    viewBox="0 0 512 512"
  >
    <title>Close</title>
    <path
      fill="none"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
      d="M368 368L144 144M368 144L144 368"
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
