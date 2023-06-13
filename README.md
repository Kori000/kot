# Kot

👀 [中文文档](https://github.com/Kori000/Kot/blob/main/README_Zh.md)

## Getting started

```bash
# clone the project
git clone https://github.com/Kori000/Kot.git

# enter the project directory
cd Kot

# install dependency
yarn

# develop
yarn dev
```

## Feature

1. The designated icon of the website + the designated icon of the recent browsing area of the safari browser
2. Integrated tailwindcss
3. The created context context provides simple global state management
4. Utils has been created with simple tools built in:

   - [Check whether the browser is Safari](https://github.com/Kori000/Kot/tree/main/src/utils/IsSafari.jsx)

   - [Determine whether the network is China](https://github.com/Kori000/Kot/tree/main/src/utils/IsZh.jsx)

   - [Back To Top](https://github.com/Kori000/Kot/tree/main/src/utils/UpToTop.jsx)

   - [Format the blockchain address](https://github.com/Kori000/Kot/tree/main/src/utils/ShortAddress.jsx)

5. Hooks has been created:

   - [Count down](https://github.com/Kori000/Kot/tree/main/src/hooks/useCountdown.jsx)

   - [Checks whether the viewport is smaller than the specified width](https://github.com/Kori000/Kot/tree/main/src/hooks/useLessWidth.jsx)

   - [Determines whether the viewport is smaller than both the specified width and height](https://github.com/Kori000/Kot/tree/main/src/hooks/useMonitor.jsx)

   - [Axios Network requester](https://github.com/Kori000/Kot/tree/main/src/hooks/useRequest.jsx)

   - [Customize antdMessage popup](https://github.com/Kori000/Kot/tree/main/src/hooks/useAntdCustomMessage.jsx)

6. Created BANPage: A message is displayed indicating that the current region is not accessible
7. The default font and basic configuration of tailwindcss have been configured
8. Integrated route
9. The viteconfig has been configured
10. The 404Page has been configured
11. The i18n has been configured
