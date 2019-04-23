export default {
  data() {
    return {
      isEmpty: false,
      curPage: 1,
      busy: false,
      pageList: [],
      reqPath: "",
      params: {},
      mapFun: item => item
    };
  },
  methods: {
    initLoad() {
      this.curPage = 1;
      this.pageList = [];
      this.loadMore();
    },
    loadMore() {
      this.busy = true;
      let reqParams = this.getParams();
      reqParams.pageNo = this.curPage;
      console.log("this.$store", this.$store, this.reqPath);
      console.log("this.$store", this.reqPath);
      this.$store.dispatch(this.reqPath, reqParams).then(res => {
        let totalCount = res.totalCount || 0;
        this.isEmpty = totalCount <= 0;
        let totalPageNum = Math.ceil(totalCount / 10);
        console.log("totalPageNum", totalPageNum, res.totalCount);
        if (this.curPage <= totalPageNum) {
          this.curPage += 1;
          this.pageList = [...this.pageList, ...res.data.map(this.mapFun)];
          this.busy = false;
        }
      });
    }
  }
};
/** 
 * 功能:上拉加载更多
 * 具体使用：在create方法中
 * 1.初始化请求 this.reqPath = "QueryMagodPageList";
 * 2.初始化转换函数（不是必现的）
 *  this.mapFun = item => {
            return {
                userId: item.userId,
                icon: item.headImg,
                name: item.nickName,
                isOnLine: item.onlineStatus === 1,
                onlineStatusText: item.onlineStatusText,
                userEvaluateStar: item.userEvaluateStar,
                solveProblemCount: item.solveProblemCount,
                selfIntroduction: item.selfIntroduction,
                userId: item.userId,
                tags: item.domainTags.map(tagItem => {
                    return {
                        name: tagItem.tagName,
                        id: tagItem.tagId
                    };
                })
            };
        };
    3.调用 this.initLoad();
 *  
*/
