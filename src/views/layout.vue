<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width="200" collapsible v-model="collapsed" breakpoint="sm" class="sider-outer">
        <SideMenu :collapsible="collapsed" :list="routers"></SideMenu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" type="md-menu" :size="32" @click.native="handleCollapsed" />
        </Header>
        <Content class="content-con">
          <div>
            <Tabs type="card" @on-click="handleClickTab" :value="getTabNameByRoute($route)">
              <Tab-pane :label="labelRender(item)" :name="getTabNameByRoute(item)" v-for="(item, index) in tabList" :key="`tabNav${index}`"></Tab-pane>
            </Tabs>
          </div>
          <div class="view-box">
            <Card class="page-card" shadow>
              <router-view></router-view>
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import SideMenu from '@/views/side-menu'
import { mapState, mapActions } from 'vuex'
import { getTabNameByRoute, getRouteById } from '@/lib/util'
export default {
  data () {
    return {
      collapsed: false,
      getTabNameByRoute
    }
  },
  components: {
    SideMenu
  },
  methods: {
    ...mapActions([
      'handleRemove'
    ]),
    handleCollapsed () {
      this.collapsed = !this.collapsed
    },
    handleClickTab (id) {
      let route = getRouteById(id)
      this.$router.push(route)
    },
    handleTabRemove (id, event) {
      event.stopPropagation()
      this.handleRemove({
        id,
        $route: this.$route
      }).then(nextRoute => {
        this.$router.push(nextRoute)
      })
    },
    labelRender (item) {
      return h => {
        return (
          <div>
            <span>{item.meta.title}</span>
            <icon nativeOn-click={this.handleTabRemove.bind(this, getTabNameByRoute(item))} type="md-close-circle" style="line-height:10px"></icon>
          </div>
        )
      }
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    },
    ...mapState({
      tabList: state => state.tabNav.tabList,
      routers: state => state.router.routers.filter(item => {
        return item.path !== '*' && item.name !== 'login'
      }) // 过滤掉登录页面和错误页面
    })
  }
}

</script>
<style lang='less' scoped>
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.1);
    padding: 0 23px;
    position: relative;
    .trigger-icon{
      transition: all .3s ease;
      cursor: pointer;
      position: absolute;
      left: 23px;
      top: 20px;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: all .3s ease;
      }
    }
  }
  .sider-outer{
    height: 100%;
    overflow: hidden;
    .ivu-layout-sider-children{
      overflow-y: scroll;
      overflow-x: hidden;
      margin-right: -20px;
    }
  }
  .content-con{
    padding: 0px;
    .ivu-tabs-bar{
      margin-bottom: 0;
    }
    .view-box{
      padding: 0;
    }
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)";
  }
}
</style>
