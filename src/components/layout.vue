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
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#383a4b"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="2">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <el-main></el-main>
          <el-footer>July Design ©2016 Created by July</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'layout',

    data () {
      return {}
    },

    mounted: function () {
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
    },

    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
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
