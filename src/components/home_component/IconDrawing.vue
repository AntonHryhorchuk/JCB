<template>
  <svg
    width="46"
    height="47"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="1463 1448 46 47"
  >
    <image
      xlink:href="data:image/png;base64,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"
      width="46"
      height="47"
      x="1463"
      y="1448"
    />
  </svg>
</template>
