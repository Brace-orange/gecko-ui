<template>
  <div class="clarify-content">
    <div class="clarify-nav">
        <span class="title">
            {{clarigyName}}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="svg-triangle tran_angle">
              <polygon points="0,0 9,0 4.5,5" />
            </svg>
        </span>
        <span>共<span class="light_color">{{total}}</span>种商品</span>
    </div>
    <div class="clarify-list">
      <div class="list_one">
        <span class="item_one" v-for="(itemOne, indexOne) in listOne" :key="indexOne" @click="pickRank(itemOne, indexOne, 1)">
          {{itemOne.pubNavName}}
        </span>
      </div>
      <div class="list_two">
        <span class="item_two" v-for="(itemTwo, indexTwo) in listTwo[controlTwo]" :key="indexTwo" @click="pickRank(itemTwo, indexTwo, 2)">
          {{itemTwo.pubNavName}}
        </span>
      </div>
      <div class="list_three">
        <span class="item_three" v-for="(item, index) in threeList" :key="index">
          {{item.pubNavName}}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import result from './data'
export default {
  data() {
    return {
      total: 10,
      clarigyName: '按分类显示',
      result: result,
      controlOne: 0,
      controlTwo: 0,
      controlThree: 0,
      listOne: [],
      listTwo: [],
      listThree: [],
      threeList: []
    }
  },
  created() {
    this.$$loading(false)
    this.$$title('商品管理')
    this.partKinds()
  },
  methods: {
    partKinds() {
      this.result.map((item1, index1) => {
        let oneRank = this.addItem(item1)
        this.listOne.push(oneRank)
        let twoCount = 0
        let twoRankIndex = {}
        let threeSuperCount = 0
        let threeRankSuperBigIndex = {}
        item1.subNavList.map((item2, index2) => {
          twoCount = twoCount + 1
          let twoRankIndexItem = this.addItem(item2)
          twoRankIndex[twoCount] = twoRankIndexItem
          let threeRankBigIndex = {}
          let threeCount = 0
          threeSuperCount = threeSuperCount + 1
          item2.subNavList.map((item3, index3) => {
            threeCount = threeCount + 1
            let threeRankIndex = item3
            threeRankBigIndex[threeCount] = threeRankIndex
            threeRankSuperBigIndex[threeSuperCount] = threeRankBigIndex
          })
        })
        this.listThree.push(threeRankSuperBigIndex)
        this.listTwo.push(twoRankIndex)
      })
    },
    addItem(item) {
      let kindRank = {
        id: item.id,
        pubNavId: item.pubNavId,
        pPubNavId: item.pPubNavId,
        pubNavName: item.pubNavName,
        end: item.end,
        order: item.order,
      }
      return kindRank
    },
    pickRank(item, index, value) {
      if (value === 1) {
        this.controlOne = index
        this.controlTwo = index
      } else if (value === 2) {
        let pickThree = parseInt(index)
        let itemThree = this.listThree[this.controlTwo]
        this.threeList = itemThree[pickThree]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.clarify-content {
  background: #fff;
    .light_color {
      color: #FFB900;
    }
    .clarify-nav {
      height: rem(88px);
      // background-color: #fff;
      font-size: rem(28px);
      color: #333333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 rem(30px);
      // border: 1px solid red;
      // box-shadow: $inset 0 $width/(-1) 1px 0 $line-color, $inset $width 0 1px 0 $line-color, $inset 0px $width 1px 0 $line-color, $inset $width/(-1) 0 1px 0 $line-color;
      // background: linear-gradient(180deg, red 100%) no-repeat;
      // background-size: rem(1px);
      box-shadow: inset 0 -1px 1px 0 #E7E7E7;
      .title {
        display: flex;
        align-items: center;
        .tran_angle {
          transform: rotate(180deg);
        }
        .svg-triangle {
          width: rem(18px);
          height: rem(10px);
          margin-top: rem(3px);
          margin-left: rem(16px);
          polygon {
            fill: #4C4C4C;
          }
        }
      }
    }
    .clarify-list {
        // height: rem(420px);
        width: 100%;
        // overflow-x: hidden;
        height: 100%;
        display: flex;
        justify-content: space-between;
      .list_one, .list_two, .list_three,{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        // height: rem(420px);

        // padding-left: rem(30px);
      }
      .list_one {

      }
      .list_two {
        background: #FAFAFA;
      }
      .list_three {
        background: #F3F3F3;
        padding-right: rem(30px);
      }
      .item_one, .item_two, .item_three{
        height: rem(88px);
        line-height: rem(88px);
        padding-left: rem(30px);
      }
      .item_one {
        box-shadow: inset 0 -1px 1px 0 #E7E7E7;
      }
      .item_three {
      }
    }
}
</style>
