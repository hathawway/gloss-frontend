<template>
  <div class="footer-info">
    <hr class="hr-shadow">
    <p class="copyright">&copy; 2023 Okladnikova Olga</p>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  components: {}
}
</script>

<style>
.footer-info {
  flex: 0 0 auto;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.copyright {
  font-size: 18px;
  padding: 15px;
  font-weight: 900;
}

.hr-shadow {
  width: 100%;
  margin-bottom: 5px;
  padding: 0;
  height: 15px;
  border: none;
  background-color: rgba(234, 230, 215, 0.99);
  background-image: linear-gradient(90deg, rgba(234, 230, 215, 0.99), orange 33.33%, transparent 33.33%, transparent 100%);
  background-size: 3px 100%;
}

</style>
