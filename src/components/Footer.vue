<template>
  <div class="page-wrapper">
    <!-- <div class="content"></div> -->
    <footer class="container-fluid">
      <div class="row">
        <p class="footer lead">
          made by Keira Kistensamy &copy;
          <span id="currYear">{{ currentYear }}</span>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getUTCFullYear(),
    };
  },
};
</script>

<style scoped>
/* :global(body) {
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  margin: 0;
  padding: 0;
} */

/* .page-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
} */

/* .content {
  flex: 1;
} */

footer {
  /* height: 10vh; */
  text-align: center;
  padding: 10px;
  border-top: 2px solid gray;
  color: #fff;
  background-color: rgb(9, 9, 51); /* Dark blue background */
}
</style>
