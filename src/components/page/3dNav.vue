<template>
  <div class="overall">
    <ul>
      <li>
        <section class="nav-z">
          <span class="nav">
            <span class="title">HOVER</span>
          </span>
        </section>
        <section class="nav-f">
          <span class="nav">
            <span class="title">HOVER</span>
          </span>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  background: rgb(128, 128, 128);
  list-style: none;
  padding: 0;
  li {
    overflow: hidden;
    perspective: 500px;
    cursor: pointer;
    user-select: none;
    display: block;
    width: 150px;
    height: 60px;
    color: #808080;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover .nav-z {
      top: -60px;
      transform: rotateX(90deg);
    }
    &:hover .nav-f {
      z-index: 5;
      top: 0;
      transform: rotateX(0deg);
    }
    section {
      transition: 0.3s;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform-style: preserve-3d;
      position: absolute;
      left: 0;
      top: 0;
    }
    .nav-z {
      transform-origin: 50% 100%;
      background: white;
      top: 0;
      z-index: 5;
      color: black;
      font-weight: bold;
    }
    .nav-f {
      transform-origin: 50% 0%;
      background: black;
      transform: rotateX(-90deg);
      top: 60px;
      color: white;
      font-weight: bold;
    }
  }
}
</style>