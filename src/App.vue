<template>
  <UserProfile :user="user" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "@/components/UserProfile.vue";

export default defineComponent({
  name: "App",
  components: {
    UserProfile
  },
  data() {
    return {
      user: {
        avatar: "https://randomuser.me/api/portraits/men/64.jpg",
        nickname: "Mauris",
        firstname: "Nikita",
        lastname: "Hozya"
      }
    };
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
