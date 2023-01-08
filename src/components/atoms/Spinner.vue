<template>
  <div v-if="type === 'arc'" class="spinner arc"  :class="variant">
    <slot />
  </div>
  <div v-else class="spinner circle" :class="variant">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <slot />
  </div>
</template>

<script setup lang="ts">

/**
 * isVisible: use v-show
 */
withDefaults(defineProps<{
  size?: string
  type?: 'circle' | 'arc'
  variant?: 'brand' | 'inverse' | 'neutral'
}>(), {
  size: '3rem'
})
</script>

<style scoped lang="scss">
.spinner {
  width: v-bind(size);
  height: v-bind(size);
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.spinner.circle {
  z-index: 5000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0;
  color: #ddd;

    > div {
      width: calc(v-bind(size) * 0.16);
      height: calc(v-bind(size) * 0.16);
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 5000;
      transform: translate(-50%, -50%) rotate(90deg);
      display: inline-block;
      float: none;
      background-color: currentColor;
      border: 0 solid currentColor;
      margin-top: -4px;
      margin-left: -4px;
      border-radius: 100px;
      animation: ball-spin-clockwise 1s infinite ease-in-out;
    }
    > div:nth-child(1) {
        top: 5%;
        left: 50%;
        animation-delay: -0.875s;
        color: #fe4849;
    }
    > div:nth-child(2) {
        top: 18.1801948466%;
        left: 81.8198051534%;
        animation-delay: -0.75s;
        color: #ff6837;
    }
    > div:nth-child(3) {
        top: 50%;
        left: 95%;
        animation-delay: -0.625s;
        color: #f8d832;
    }
    > div:nth-child(4) {
        top: 81.8198051534%;
        left: 81.8198051534%;
        animation-delay: -0.5s;
        color: #c7e46a;
    }
    > div:nth-child(5) {
        top: 94.9999999966%;
        left: 50.0000000005%;
        animation-delay: -0.375s;
        color: #1de9b6;
    }
    > div:nth-child(6) {
        top: 81.8198046966%;
        left: 18.1801949248%;
        animation-delay: -0.25s;
        color: #1ad1a3;
    }
    > div:nth-child(7) {
        top: 49.9999750815%;
        left: 5.0000051215%;
        animation-delay: -0.125s;
        color: #01b6f5;
    }
    > div:nth-child(8) {
        top: 18.179464974%;
        left: 18.1803700518%;
        animation-delay: 0s;
        color: #5c56b6;
    }
    @keyframes ball-spin-clockwise {
        0%,
        100% {
            opacity: 1;
            transform: scale(1);
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 0;
            transform: scale(0);
        }
    }
}

.spinner.arc {
  display: grid;
  place-content: center;
  
  &::before {
    --border-size: 0.1875rem;
    --border-shift: calc(-0.25 * var(--border-size)); 
    position: absolute;
    width: calc(v-bind(size) * 0.93);
    height: calc(v-bind(size) * 0.93);
    content: "";
    border-radius: 50%;
    border-top: var(--border-size) solid var(--unified-color, var(--c-brand));
    border-right: var(--border-size) solid transparent;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg);}
    }
  }
}

.spinner.brand,
.spinner.inverse,
.spinner.neutral {
  > div {
    color: var(--unified-color) !important;
  }
}

.spinner.brand {
  --unified-color: var(--c-brand);
}
.spinner.inverse {
  --unified-color: var(--c-mainBackground);
}
.spinner.neutral {
  --unified-color: var(--c-highlight);
}
</style>