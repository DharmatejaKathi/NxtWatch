import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideosDetails from './components/VideoDetails'
import SaveVideos from './components/SaveVideos'
import NotFound from './components/NotFound'

import './App.css'
import ThemeAndVideo from './context/themeAndVideos'
import ProtectedRoute from './components/protectedRoute'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, saveVideos: [], activeTab: 'HOME'}

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSaveVideos = videoDetails => {
    const {saveVideos} = this.state
    const videoObject = saveVideos.find(each => each.id === videoDetails.id)
    if (videoObject) {
      this.setState(prevState => ({
        saveVideos: [...prevState.saveVideos],
      }))
    } else {
      this.setState({saveVideos: [...saveVideos, videoDetails]})
    }
  }

  removeSaveVideos = id => {
    const {saveVideos} = this.state
    const updateVideos = saveVideos.filter(each => each.id !== id)
    this.setState({saveVideos: updateVideos})
  }

  activeTabItem = item => {
    this.setState({activeTab: item})
  }

  render() {
    const {isDarkTheme, saveVideos, activeTab} = this.state
    return (
      <ThemeAndVideo.Provider
        value={{
          isDarkTheme,
          saveVideos,
          activeTab,
          onChangeTheme: this.onChangeTheme,
          addToSaveVideos: this.addToSaveVideos,
          removeSaveVideos: this.removeSaveVideos,
          activeTabItem: this.activeTabItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideosDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SaveVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideo.Provider>
    )
  }
}

export default App
