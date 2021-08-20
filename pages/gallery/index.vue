<template>
  <div key="gallery" :class="['gallery', 'page', fader]">
    <button class="button button__close" @click="navigate">
      <CloseIcon :classes="'icon'" />
    </button>
    <img
      src="~/assets/images/spinni.jpg"
      alt="__"
      class="gallery__header flicker"
    />
    <div class="main-container">
      <Flipbook
        class="flipbook"
        :pages="pages"
        v-slot="flipbook"
        ref=""
        @flip-left-start="onFlipLeftStart"
        @flip-left-end="onFlipLeftEnd"
        @flip-right-start="onFlipRightStart"
        @flip-right-end="onFlipRightEnd"
        :flipDuration="500"
      >
        <div class="flipbook__footer">
          <button class="button button--transparent" @click="flipbook.flipLeft">
            <ChevronLeft :classes="'icon'" />
          </button>
          <button
            class="button button--transparent"
            @click="flipbook.flipRight"
          >
            <ChevronRight :classes="'icon'" />
          </button>
        </div>
      </Flipbook>
    </div>
  </div>
</template>

<script>
import avaruus_poster from '~/assets/images/avaruus_poster-min.jpg'
import CCCP_poster from '~/assets/images/CCCP_poster-min.jpg'
import disko_poster from '~/assets/images/disko_poster-min.jpg'
import melt_poster from '~/assets/images/melt_poster-min.jpg'
import ghetto_poster from '~/assets/images/ghetto_poster-min.jpg'
import FWR_poster from '~/assets/images/FWR_poster-min.jpg'
import jungle_poster from '~/assets/images/jungle_poster-min.jpg'
import spinni_page from '~/assets/images/spinni_page.jpg'
export default {
  computed: {
    navTransition() {
      return this.$store.state.nav.navTransition
    },
  },
  data() {
    return {
      currentPage: 1,
      previousPage: 0,
      pages: [
        null,
        avaruus_poster,
        CCCP_poster,
        jungle_poster,
        disko_poster,
        melt_poster,
        ghetto_poster,
        FWR_poster,
        spinni_page,
      ],
      fader: 'fade-in',
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    navigate() {
      ;(this.fader = 'fade-out'),
        setTimeout(() => {
          this.$router.push({
            path: '/',
          })
        }, 500)
    },
    onFlipLeftStart(page) {
      //   this.previousPage = page;
    },
    onFlipLeftEnd(page) {
      //   this.checkPage(page);
    },
    onFlipRightStart(page) {
      //   this.previousPage = page;
    },
    onFlipRightEnd(page) {
      //   this.checkPage(page);
    },
  },
}
</script>
