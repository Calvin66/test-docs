<template>
  <div class="layout-container">
    <div class="platform-container flex f-aic">
      <div class="left">
        <h1>赤兔实时计算平台</h1>
        <div>基于Apache Flink构建的企业级、一站式、高性能、低门槛实时大数据计算平台，广泛适用于流式数据开发应用场景。</div>
        <ul>
          <li>一站式的流任务管理平台</li>
          <li>一站式的流任务管理平台</li>
          <li>一站式的流任务管理平台</li>
          <li>一站式的流任务管理平台</li>
          <li>一站式的流任务管理平台</li>
        </ul>
        <div class="flex f-aic">
          <el-button>体验 Demo</el-button>
          <el-button>GitHub</el-button>
        </div>
      </div>
      <div class="right">
        <!-- <el-button type="success">按钮</el-button> -->
        <d-player ref="player"
                  :options="dplayerOpt"></d-player>
      </div>
    </div>
    <div class="application-container"></div>
    <div class="feature-container"></div>
    <div class="function-container"></div>
    <div class="footer-container"></div>
  </div>
</template>

<script>

  export default {
    name: '',
    components: {},
    props: {},
    data () {
      return {
        dplayerOpt: {
          video: {
            url: "https://bg-prd-cos-bdp-1257092428.cos.ap-guangzhou.myqcloud.com/bigdata/common/app/2023/0/14/211673703901088.mp4",
          },
        },
      }
    },
    computed: {},
    watch: {},
    created () { },
    mounted () { },
    methods: {},
  }
</script>
<style lang='scss' scoped>
  .layout-container {
    .platform-container {
      .left,
      .right {
        width: 50%;
        padding: 0 20px;
      }
    }
    .flex {
      display: flex;
    }

    .f-jcfs {
      justify-content: flex-start;
    }

    .f-jcfe {
      justify-content: flex-end;
    }

    .f-jcc {
      justify-content: center;
    }

    .f-jcsa {
      justify-content: space-around;
    }

    .f-jcsb {
      justify-content: space-between;
    }

    .f-aic {
      align-items: center;
    }

    .f-aifs {
      align-items: flex-start;
    }

    .f-aife {
      align-items: flex-end;
    }

    .f-1 {
      flex: 1;
    }

    .flex-d-col {
      display: flex;
      flex-direction: column;
    }
  }
</style>