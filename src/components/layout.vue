<template>
  <div class="layout">
    <el-container>
      <el-header>
        <div width="200px" class="logo"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#383a4b"
                text-color="#fff"
                active-text-color="#ffd04b"
                :router="true">
                <el-menu-item index="item1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航一</span>
                </el-menu-item>
                <el-menu-item index="item2">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-submenu index="item3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航三</span>
                  </template>
                  <el-menu-item index="item3-1">选项1</el-menu-item>
                  <el-menu-item index="item3-2">选项2</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main>
            <slot name="content"></slot>
          </el-main>
          <el-footer>July Design ©2017 Created by July</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {
        defaultActive: 'item1'
      };
    },

    mounted() {
      const layoutMain = $('.el-main');
      const aside = $('.el-aside');
      let heightMain = `${$(window).height() - 120}px`;
      let heightSide = `${$(window).height() - 60}px`;
      layoutMain.css('height', heightMain);
      aside.css('height', heightSide);
      $(window).resize(() => {
        heightMain = `${$(window).height() - 127}px`;
        heightSide = `${$(window).height() - 60}px`;
        layoutMain.css('height', heightMain);
        aside.css('height', heightSide);
      });
      this.defaultActive = this.$route.path.split('/')[1];
    },

    computed: {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
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
  }

  .el-main {
    background-color: #E9EEF3;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

</style>
