<template>
    <div class="flex flex-col border gap-4 bg-gray-800 rounded-xl border-white px-6 py-4">
    <div class="line-1 text-white mx-auto">
       Hi! I am Nihad :)
    </div>
</div>
</template>
<style scoped>
.line-1 {
  width: 17ch;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>