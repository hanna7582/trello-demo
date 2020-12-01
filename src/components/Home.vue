<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" 
        v-for="b in boards" :key="b.id"
        :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a href="" class="new-board-btn" @click.prevent="addBoard">
          Create new board
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @close="isAddBoard=false" @submit="onAddBoard"/>
  </div>
</template>

<script>
import {board} from '../api'
import AddBoard from "@/components/AddBoard";
export default {
  components: {
    AddBoard
  },
  data() {
    return {
      loading: true,
      boards:'',
      error:'',
      isAddBoard:false
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading=true 

      board.fetch()
      .then(res => {
        this.boards=res.list
      })
      .finally(() => {
        this.loading=false
      })
    },
    addBoard(){
      this.isAddBoard=true;
    },
    onAddBoard(title){
      board.create(title)
      .then(res => {
        this.fetchData()
      })
    }
  },
  updated(){
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor
    })
  }
}
</script>

<style lang="scss">
  .home-title {
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  .board-list {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
  .board-item {
    width: calc(24% - 1%);
    height: 100px;
    margin: 0 2% 20px;
    border-radius: 3px;
    &-new {
      background-color: #ddd;
    }
    a {
      text-decoration: none;
      display: block;
      width: 100%;
      height: 100%;
    }
    a:hover,
    a:focus {
      background-color: rgba(0,0,0, .1);
      color: #666;
    }
    &-title {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      padding: 10px;
    }
    a.new-board-btn {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      height: 100px;
      width: inherit;
      color: #888;
      font-weight: 700;
      font-size: 13px;
    }
  }
</style>