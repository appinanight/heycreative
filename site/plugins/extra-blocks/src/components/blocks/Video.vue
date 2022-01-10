<template>
  <k-block-figure
    :caption="content.caption"
    :empty-text="$t('field.blocks.video.placeholder') + ' …'"
    :is-empty="!video"
    empty-icon="video"
    @open="open"
    @update="update"
  >
    <k-aspect-ratio ratio="16/9">
      <div class="video-overlay" v-if="imgSrc">
        <div class="playbtn">
          <svg version="1.1" x="0px" y="0px" viewBox="0 0 17.804 17.804" style="enable-background:new 0 0 17.804 17.804;" xml:space="preserve">
            <path d="M2.067,0.043C2.21-0.028,2.372-0.008,2.493,0.085l13.312,8.503c0.094,0.078,0.154,0.191,0.154,0.313
            c0,0.12-0.061,0.237-0.154,0.314L2.492,17.717c-0.07,0.057-0.162,0.087-0.25,0.087l-0.176-0.04
                c-0.136-0.065-0.222-0.207-0.222-0.361V0.402C1.844,0.25,1.93,0.107,2.067,0.043z"/>
          </svg>
        </div>
        <img :srcset="imgSrc"/>
      </div>
      <iframe v-if="video" :src="video" />
    </k-aspect-ratio>
  </k-block-figure>
</template>

<script>
export default {
  computed: {
    video() {
      var url = this.content.url;
      if (!url) {
        return false;
      }
      var youtubePattern = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      var youtubeMatch = url.match(youtubePattern);
      if (youtubeMatch) {
        return "https://www.youtube.com/embed/" + youtubeMatch[2];
      }
      var vimeoPattern = /vimeo\.com\/([0-9]+)/;
      var vimeoMatch = url.match(vimeoPattern);
      if (vimeoMatch) {
        return "https://player.vimeo.com/video/" + vimeoMatch[1];
      }
      return false;
    },
    imgSrc() {
        if (this.content.image[0] && this.content.image[0].url) {
          return this.content.image[0].image.cards.srcset;
        }
      return false;
    },
  }
};
</script>

<style lang="scss">

  .k-block-container-type-video .k-block-figure {
      position: relative;
  }

  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    .playbtn {
      position: absolute;
      width: 70px;
      height: 70px;
      height: auto;
      left: 50%;
      top: 50%;
      transform: translate( -50%, -50%);
      border-radius: 10000px;
      background-color: rgb(219, 219, 219);

      svg {
        width: 100%;
        height: auto;
        display: block;
        fill: rgb(48, 48, 48);
        transform: scale(0.4) translateX(7%);
      }
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
</style>
