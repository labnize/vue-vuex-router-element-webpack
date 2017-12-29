<template>
  <div class="layout">
    <el-container style="min-height: 100vh">
      <el-header>
        <div width="200px" class="logo"/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <template v-if="menu.length">
                <el-menu
                  :default-active="defaultActive"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#383a4b"
                  text-color="#fff"
                  active-text-color="#ffd04b"
                  :router="true">
                  <template v-for="item in menu">
                    <template v-if="item.sub">
                      <el-submenu :index="item.key" :key="item.key">
                        <template slot="title">
                          <i class="el-icon-location"/>
                          <span>{{ item.name }}</span>
                        </template>
                        <el-menu-item v-for="subItem in item.sub" :index="subItem.key" :key="subItem.key">
                          {{ subItem.name }}
                        </el-menu-item>
                      </el-submenu>
                    </template>
                    <template v-else>
                      <el-menu-item :index="item.key" :key="item.key">
                        <i class="el-icon-menu"/>
                        <span slot="title">{{ item.name }}</span>
                      </el-menu-item>
                    </template>
                  </template>
                </el-menu>
              </template>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <slot name="content"/>
          </el-main>
          <el-footer>July Design ©2017 Created by July</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
const operateUrl = 'claa/menulist';

export default {
  name: 'Layout',
  data() {
    return {
      defaultActive: 'item1'
    };
  },

  created() {
    this.defaultActive = this.$route.path.split('/')[1] ? this.$route.path.split('/')[1] : 'item1';
  },
  mounted() {
    this.doQuery();
  },

  computed: {
    menu() {
      return this.$store.state.menu.menuList;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    doQuery() {
      const param = {
        loadingFlag: true,
        url: operateUrl,
        method: 'POST',
        data: {
          type: 'on'
        }
      };
      this.$store.dispatch('fetch', param);
    }
  }
};
</script>

<style lang="scss" scoped>
  .logo{

  }
  .el-header, .el-footer {
    background-color: #383a4b;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #383a4b;
    .el-menu{
      border-right: 0;
    }
  }

  .el-main {
    background-color: #E9EEF3;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
