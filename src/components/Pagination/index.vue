<template>
  <div class="pagination">
    <button :disabled='pageNo==1'
      @click="getPageNo(pageNo-1)">上一页</button>
    <button v-if="startNumAndEndNum.start>1"
      @click="getPageNo(1)"
      :class="{active:pageNo==1}">1</button>
    <button v-if="startNumAndEndNum.start>2">···</button>
    <!-- 中间部分 -->
    <template v-for="(page,index) in startNumAndEndNum.end">
      <button v-if="page >= startNumAndEndNum.start"
        :key="index"
        @click="getPageNo(page)"
        :class="{active:pageNo==page}">{{page}}</button>
    </template>
    <button v-if="startNumAndEndNum.end<totalPage-1">···</button>
    <button v-if="startNumAndEndNum.end<totalPage"
      @click="getPageNo(totalPage)"
      :class="{active:pageNo==totalPage}">{{totalPage}}</button>
    <button @click="getPageNo(pageNo+1)"
      :disabled='pageNo==totalPage'>下一页</button>

    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['pageNo', 'pageSize', 'total', 'continues'],
  computed: {
    //总共多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize)
    },
    //计算出连续的页码的起始数字和结束数字[连续的页码的数字至少是5]
    startNumAndEndNum() {
      const { continues, pageNo, totalPage } = this
      //先定义两个变量存储起始的数字和结束的数字
      let start = 0,
        end = 0
      //不正常现象[总页数 没有连续得页码多]
      if (totalPage < continues) {
        start = 1
        end = totalPage
      } else {
        //正常现象[连续页码是5,但是你的总页数一定是大于5的]
        start = pageNo - Math.floor(continues / 2)
        end = pageNo + Math.floor(continues / 2)
        if (start < 1) {
          start = 1
          end = continues
        } else if (end > totalPage) {
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return { start, end }
    },
  },
  methods: {
    getPageNo(pageNo) {
      this.$bus.$emit('getPageNo', pageNo)
    },
  },
}
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  margin-bottom: 100px;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
