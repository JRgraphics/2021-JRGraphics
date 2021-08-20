<template>
  <div
    :key="name"
    :class="['home-section', !!open ? 'slide-in' : 'slide-out']"
    :style="{
      animationDelay: `${delay}s`,
      transform: !open ? 'translateY(0)' : 'translateY(-100%)',
    }"
  >
    <div
      class="home-section__background"
      :style="{ background: backgroundProp }"
    ></div>
    <div
      v-if="name === 'gallery'"
      class="home-section__background-overlay"
    ></div>
    <div :style="{ transform: `translateY(${translateValue})` }">
      <img
        v-if="name === 'title'"
        src="~/assets/images/JRlogo-min.png"
        alt="JR"
        class="home-section__image"
      />
      <div
        v-if="name === 'mywork'"
        class="home-section__scrabble"
        :style="{ color: '#fff' }"
      >
        <v-scrollin :key="this.scrabbleIndex" :speed="60" :misses="8">{{
          this.scrabbleData[this.scrabbleIndex]
        }}</v-scrollin>
      </div>
      <button
        v-if="link"
        class="button button--transparent home-section__link slide-in-left"
        @click="navigate(link)"
        :style="{
          animationDelay: `${textDelay}s`,
          color: name === 'title' ? '#000' : '#fff',
        }"
      >
        <v-scrollin :speed="50" :misses="3">{{ label }}</v-scrollin>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrabbleData: ['HTML', 'CSS', 'React', 'Vue'],
      scrabbleIndex: 0,
      scrabbleTimer: null,
    }
  },
  props: [
    'name',
    'backgroundProp',
    'delay',
    'open',
    'link',
    'translateValue',
    'label',
    'textDelay',
  ],
  mounted() {
    this.scrabbleTimer = setInterval(() => {
      if (this.scrabbleIndex < this.scrabbleData.length - 1) {
        this.scrabbleIndex += 1
      } else {
        this.scrabbleIndex = 0
      }

      console.log(this.scrabbleIndex)
    }, 3000)
  },
  destroyed() {
    clearInterval(this.scrabbleTimer)
  },
  methods: {
    navigate(link = '/') {
      this.$emit('onClick', link)
    },
    scrabbleValue() {
      return this.scrabbleData[this.scrabbleIndex]
    },
  },
}
</script>

<style lang="scss" scoped>
.slide-in {
  animation: slide-in 0.5s ease-out forwards;
}

.slide-out {
  animation: slide-out 0.5s ease-out forwards;
}

@keyframes slide-in {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
