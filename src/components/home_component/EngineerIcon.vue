<template>
  <svg
    width="42"
    height="42"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="413 2134 42 42"
  >
    <image
      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAHR0lEQVRYR92Zf4xcVRXHv+fNm8ruIuxWKK1iLGJF0wrCAlq7XWb33TfTRVqMpCbahhhJtWpSLfUPfyCuCv4KtAQSROAPIgUJVdQizO6+c7cDnRCLLfgDIrbBolRr1bKAzorMe++YA2+SZdOd92am+ofnr3m5757zeefec+49ZwjHQZYvX97V09OzHcClAHKJygjAA/l8/kPlcvnfnZqhThXofN/3N4rIdwFcA+BoovMNAK4SkU9Ya2/t1E5HoCMjI6fW6/V1AL4EoJeZ8zOBjDF1AM8B+GY+n7+rXC7/rV3gtkBHRkZOqtfr9wIYBqBwCnAiM3fPAp0G8AKAhQAU+hERucxa2/B6Zu6WQYvF4nAcxw8AOAFAFEXROY7jbCCijzJz7yzQ5wHc4DjOPXEc/xLA6wC8DOCDzKw6MktLoMaYywDsACAAygDeLyIKuk5ErmDmU2aB/h3ATY7jfD+O499rcAEYAaB21zPz3VlJM4N6nnc2ET2uXgQwGMfxy47j7COiDXEc3y8ib5mcnHx0puHh4eELiegPjuMMisi9cRz3O44zD8DDmh2I6D1BEOzNApsVlIwxRwCcCuAWjfDp6ekDPT09U0R0RxAEG5sZM8Z8B8CmWq3W193dvYSIPglA5xxlZtWpK9RUMoH6vr9GRH4KQPOh7jOVl5JAepyZL0gBndRVSAJK97aKBtnJRHRpEAQ7jwuoMaYC4M1hGJ41b968t0VR1A/gXCI6D8AhZr68mSHP824A8C4AvyCiR+M43jM4OHi4Wq0eAPAsMxc6Bi0UCgtd1z0sIlustVvTFLYy7nnelUR0fRiGiyqVyl+azU1des/z1hHR9iiKlu3atevJVkDS3h0aGlqay+WeEJH11tq7OgI1xuixuIWZu9IMtzNujPkXgOuZ+aqOQH3f1yhfxcyL2wFJm2OMeYaIxtIyR9Ol933/IhH5CoClRPSwiDhphlsZJ6JYRDQbPElEXw2C4KG55jcD1dypZ3UjnbTC0M67LzXbXk09WigUTsnlcvOJqATgRgCjInJcAoqIlqo+PQhEZDyKoucqlYoeuceU1KjXWcYYzXO7AAwxs+bUjqVVnf9foMVisT+O470iMmytVc92LJ7nDRHRpOM4509MTOxLU5jJo6tWrVochuFBIvpIEAQ/SFOaZdz3/Q+LyN2u654xNjb2TNqcTKBr167NTU1NvajHXRAEV6cpzTLu+/7X9Fju6+s7aceOHXp1bCqZQJOAmhSRnLX2ojSlWcY9z3uIiCJm1nImVTKDep63iYi25XK508fHxw+nam7yQqlUWhRF0SER2Wyt1bSXKplBNae6rvsnEbnOWqtVZ9vied61RPS5MAzf1Cx3zjSQGVQnJef++jAM31GpVA61Q1ooFE53XfcpvZGlne9tg3qedxoR6WX3YBiG/ZVKJWwFtlAouK7rPgZgsYgssdZqeZNJWvJoElT3A7gEwG+Y+Zws9U6DxBijxeG7AfyMmVdnIkxeagf05wDOT3pMT4RheEGlUtH6aU7p7+/P9/X16TwtXTQV7WXm9/7XQAuFwomu62pT4VsA1CNnA/iHiHzMWvvDYxkuFour4zi+Uws5XQUAWsh9PgzD3kql8s+ssC15NAH9I4AjtVrtvO7u7huJ6IqkoaBtGq02jyT3zNP0EgNgQbI97qjVap/u6enR5V+Qz+cXl8vlF48baLFYXCAia+I4XkNE7wOgXTqVx5i5v1QqaVV6C4CVALS5MFO031QVkY3W2v3GGD3TdflVjorII47j7CSinRMTE39tBn1Mj46OjjrVatUH8KkkcPRm/zsAVrslIvIZAMtE5Gpr7dcbBjzPu46ItugzEW0NguCV3yqe532ZiPTY3Oc4zrdF5EIAxWT7xBpgAG4eGBgIRkdH9fk18hpQTR/5fH69iHwRwBIAfxaR24noHmb+bWPmihUrXt/V1aXl7Qkicq619tc6ZoxRrzQ8rl0QXXaFbLSDph3HWTgxMVFr6BoeHj7TcZy1AD4O4AwAB4joG/V6ffvM9PcK6AxArQTPBLBHLyD1ev3Hc+VK3/eLIjKm/c+BgYEFu3fvvpiINHVp3aMdFR1fvXLlyger1ap+gFYKQ3PVRckqagNts34bgKeJ6Jre3t479dJCpVJpfhRF40nK2SMio9ZaBUgVY4x2kjcAeDDxxju1/s/n89NJ905X4SCAi7Wrx8ybUpW+ujKaurRM0RKIwzBcrQXczWqMiC5v565pjNF2oi6ZygFmfnuyDX6V7D993M/MZ2WBnPlOktp+pD1WBdXou89aq55pWXzff6OIPAtAA252V063Vuw4zqK0qJ7LsOd5t2kjTUFV+ZXMvK1lymSCfiyAvqTvOVONpqwXmHl+B7p1z25tgG5mZu24tSXGGL2cPD17eY0x+wG8lZndthS/ul8/C2BbA/QnSbS2rI+I9ED4AoCnAHxvlgI9tZYBuBbAnDV7ilGtKD6goFP610vLhP/bCc//B52LEkhou36/AAAAAElFTkSuQmCC"
      width="42"
      height="42"
      x="413"
      y="2134"
    />
  </svg>
</template>
