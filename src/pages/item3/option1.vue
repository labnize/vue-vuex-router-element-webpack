<template>
  <layout>
    <div slot="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <div class="tabLine">
            <Lines :param="lineData" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </layout>
</template>

<script>
import Layout from 'components/layout';
import Axios from 'util/axios';
import Lines from './echarts/line';

const urlLine = 'claa/linelist';
export default {
  components: {
    Layout,
    Lines
  },
  data() {
    return {
      activeName: 'first',
      lineData: []
    };
  },
  mounted() {
    this.doQueryLine();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    doQueryLine() {
      const that = this;
      const param = {
        loadingFlag: true,
        url: urlLine,
        method: 'GET',
        data: {},
        successFn(data) {
          that.lineData = data.list;
        }
      };
      Axios.fetch(param);
    }
  }
};
</script>

<style lang="scss" scoped>
  .tabLine{
    height:400px;
    margin-top: 20px;
  }
</style>
