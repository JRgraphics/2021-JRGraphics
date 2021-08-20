<template>
  <div key="home" class="home page">
    <div class="main-container">
      <HomeSection
        :key="item.name"
        v-for="item in homeSections"
        :name="item.name"
        :label="item.label"
        :backgroundProp="item.backgroundProp"
        :delay="item.delay"
        :open="slider"
        :link="item.link"
        :translateValue="item.translateValue"
        :textDelay="item.textDelay"
        @onClick="navigate"
      />
    </div>
  </div>
</template>

<script>
/* Images */

import gallery_bg from '~/assets/images/gallery_bg.jpg'
import jere from '~/assets/images/jere.jpg'

export default {
  computed: {
    navTransition() {
      return this.$store.state.nav.navTransition
    },
  },
  data() {
    return {
      homeSections: [
        {
          name: 'jere',
          backgroundProp: 'url(' + jere + ')',
          delay: 0,
          link: null,
        },
        {
          name: 'gallery',
          label: 'Gallery',
          backgroundProp: 'url(' + gallery_bg + ')',
          delay: 0.15,
          link: '/gallery',
          translateValue: '-50px',
          textDelay: 0.8,
        },
        {
          name: 'title',
          label: 'About me',
          backgroundProp: '#fff',
          delay: 0.3,
          link: '/gallery',
          translateValue: '0px',
          textDelay: 1,
        },
        {
          name: 'mywork',
          label: 'My work',
          backgroundProp: '#000',
          delay: 0.45,
          link: '/gallery',
          translateValue: '50px',
          textDelay: 1.2,
        },
      ],
      slider: false,
    }
  },
  mounted() {
    this.slider = true
    this.$store.commit('nav/toggleNav', true)
  },
  destroyed() {
    this.slider = false
  },
  methods: {
    navigate(link) {
      this.slider = false
      setTimeout(() => {
        this.$router.push({
          path: link,
        })
      }, 1000)
    },
  },
}
</script>
