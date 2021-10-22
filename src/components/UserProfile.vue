<template>
  <div>
    <!--    <img alt="Avatar" :src="user.picture.large" />
    <div>Имя пользователя: {{ user.login.username }}</div>
    <div>Пол: {{ user.gender }}</div>
    <div>Имя: {{ user.name.first }}</div>
    <div>Фамилия: {{ user.name.last }}</div>
    <div>Страна: {{ user.location.country }}</div>
    <div>Регион: {{ user.location.state }}</div>
    <div>Город: {{ user.location.city }}</div>
    <div>Улица: {{ user.location.street.name }}</div>
    <div>Дом: {{ user.location.street.number }}</div>
    <div>Почтовый индекс: {{ user.location.postcode }}</div>
    <div>Электронная почта: {{ user.email }}</div>
    <div>Телефон: {{ user.phone }}</div>-->
    {{ $route.params.id }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile"
});
</script>
