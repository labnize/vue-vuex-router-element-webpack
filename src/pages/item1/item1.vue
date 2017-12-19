<template>
  <Layout>
    <div slot="content" class="item1">
      <div class="text">
        item1
      </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from 'components/layout';
  // import './item1.scss';

  export default {
    components: {
      Layout
    }
  };
</script>

<style lang="scss">
  .item1{
    .text{
      color: red;
    }
  }
</style>
