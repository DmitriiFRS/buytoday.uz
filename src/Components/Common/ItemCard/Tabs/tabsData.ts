export const getTabsArray = (itemUrl: string) => [
   {
      id: 0,
      title: "Характеристики",
      url: itemUrl,
   },
   {
      id: 1,
      title: "Описание",
      url: `${itemUrl}/description`,
   },
   {
      id: 2,
      title: "Обзоры",
      url: `${itemUrl}/reviews`,
   },
];

export const tabsData = [
   {
      id: 0,
      title: "Характеристики",
   },
   {
      id: 1,
      title: "Описание",
   },
   {
      id: 2,
      title: "Обзоры",
   },
];
