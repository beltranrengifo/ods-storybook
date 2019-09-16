<template>
  <div
    class="badges__wrapper">
    <ul class="badges__list">
      <li
        class="badges__item"
        v-for="(badge, index) in badges"
        :key="index">
        <img
          v-if="badge"
          :src="badge">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComponentBadges',
  props: {
    badges: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .badges {
    &__list {
      display: flex;
      margin-bottom: 36px;
    }
    &__item:not(:first-child) {
      margin-left: 12px;
    }
  }
</style>