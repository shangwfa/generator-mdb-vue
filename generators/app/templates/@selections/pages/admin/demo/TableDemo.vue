<template>
  <el-main class="tableDemo">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="item-row">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/heTdoQXAHjxNGiLSUkYA.svg"
            />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item-row">
            <p class="item-row-subtitle">总计邀请(个)</p>
            <p class="item-row-count">
              187
            </p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item-row">
            <p class="item-row-subtitle">正在进行中(个)</p>
            <p class="item-row-count">
              62
            </p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item-row">
            <p class="item-row-subtitle">已完成(个)</p>
            <p class="item-row-count">
              23
            </p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item-row">
            <p class="item-row-subtitle">完成平均时长(天)</p>
            <p class="item-row-count">
              39
            </p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="item-row">
            <p class="item-row-subtitle">参与成员(人)</p>
            <p class="item-row-count">
              96
            </p>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <div class="table-container">
      <div>
        <h4 class="tableTitle">邀请列表</h4>
        <el-button class="tableAction" type="primary">主要按钮</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="邮箱">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column label="职位">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button
            >
            <el-button
              type="text"
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "王小虎",
          email: "ice-admin@alibaba-inc.com",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          name: "王小虎",
          email: "ice-admin@alibaba-inc.com",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          name: "王小虎",
          email: "ice-admin@alibaba-inc.com",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          name: "王小虎",
          email: "ice-admin@alibaba-inc.com",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      alert("edit::" + index);
    },
    handleDelete(index, row) {
      console.log(index, row);
      alert("delete::" + index);
    }
  }
};
</script>
<style scoped>
.tableDemo {
  margin: 10px;
}
.table-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px;
}
.box-card {
  margin-bottom: 40px;
}
.item-row {
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item-row-subtitle {
  color: rgb(102, 102, 102);
  font-size: 14px;
}
.item-row-count {
  color: rgb(51, 51, 51);
  font-size: 36px;
  margin-top: 10px;
}
.tableTitle {
  display: inline;
  text-align: bottom;
}
.tableAction {
  float: right;
  display: inline;
}
</style>
