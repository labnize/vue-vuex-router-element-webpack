<template>
  <div id="lineChart" style="width: 100%; height: 100%" />
</template>

<script>
import echarts from 'echarts';

let LineChart = echarts;
export default {
  name: 'Lines',
  props: {
    param: {
      type: Array,
      required: true
    }
  },
  watch: {
    param() {
      if (this.param && this.param.length) {
        this.initLines();
      }
    }
  },
  mounted() {
    LineChart = echarts.init(document.getElementById('lineChart'));
    if (this.param && this.param.length) {
      this.initLines();
    }
  },
  methods: {
    initLines() {
      const successrate = [];
      const maxsuccessimagerate = [];
      const maxsuccessregionrate = [];
      const maxfailimagerate = [];
      const maxfailregionrate = [];
      const counttime = [];
      this.param.forEach((value) => {
        successrate.push(value.successrate);
        maxsuccessimagerate.push(value.maxsuccessimagerate);
        maxsuccessregionrate.push(value.maxsuccessregionrate);
        maxfailimagerate.push(value.maxfailimagerate);
        maxfailregionrate.push(value.maxfailregionrate);
        counttime.push(value.counttime);
      });

      const option = {
        title: {
          text: '堆叠区域图',
          x: 'center'
        },
        color: ['#dd5820', '#007ac2', '#81c267', '#facc41'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '30',
          data: ['测试一', '测试二', '测试三', '测试四', '测试五']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          right: 60,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: counttime
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#5a6c77',
                fontSize: '12',
                extraCssText: 'line-height:30px'
              }
            }
          }
        ],
        series: [
          {
            name: '测试一',
            type: 'line',
            data: successrate
          }, {
            name: '测试二',
            type: 'line',
            data: maxsuccessimagerate
          }, {
            name: '测试三',
            type: 'line',
            data: maxsuccessregionrate
          }, {
            name: '测试四',
            type: 'line',
            data: maxfailimagerate
          }, {
            name: '测试五',
            type: 'line',
            data: maxfailregionrate
          }
        ]
      };

      LineChart.setOption(option);
    }
  }
};
</script>
