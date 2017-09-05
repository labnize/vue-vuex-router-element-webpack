<template>
  <div class="layout">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">菜单一</el-menu-item>
      <el-submenu index="2">
        <template slot="title">菜单二</template>
        <el-menu-item index="2-1">子菜单一</el-menu-item>
        <el-menu-item index="2-2">子菜单二</el-menu-item>
        <el-menu-item index="2-3">子菜单三</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="https://july.life/" target="_blank">July's Blog</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
