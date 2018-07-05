<template>
  <Layout>
    <div
      slot="content"
      class="item1">
      <div class="text">
        <el-button
          type="primary"
          @click="handleOpen">全部打开</el-button>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from 'components/layout1';
import Modal from 'components/modal';

export default {
  components: {
    Layout
  },
  methods: {
    handleOpen() {
      Modal.confirmModal('确定打开所有设备吗?');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~leaflet/dist/leaflet.css';
// @import '~leaflet-compass/src/leaflet-compass.css';

</style>
