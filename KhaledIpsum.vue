<template>
  <div v-html="ipsum"></div>
</template>

<script>
import KhaledIpsum from 'khaled-ipsum';

export default {
  name: 'khaled-ipsum',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  data() {
    return {
      ipsum: KhaledIpsum(this.options),
    };
  },
};
</script>
