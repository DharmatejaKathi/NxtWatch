import React from 'react'

const ThemeAndVideo = React.createContext({
  isDarkTheme: false,
  saveVideos: [],
  activeTab: 'HOME',
  onChangeTheme: () => {},
  activeTabItem: () => {},
  addToSaveVideos: () => {},
  removeSaveVideos: () => {},
})

export default ThemeAndVideo
