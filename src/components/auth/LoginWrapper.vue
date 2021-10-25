<template>
  <div>
    <div v-if="$store.state.isLoggedIn">
      <slot />
    </div>
    <Setup v-else />
  </div>
</template>

<script>
import Setup from '@/components/partials/Setup.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Setup,
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>