import './App.css'
import React from 'react'
import Story from './Story'
import AddStory from './AddStory'
import ReactPaginate from 'react-paginate'
import Pagination from '@material-ui/lab/Pagination'

import {
  BrowserRouter as Routes,
  Switch,
  Route,
  Link,
  MemoryRouter,
  useLocation
} from 'react-router-dom'

class App extends React.Component {
  state = {
    stories: [],
    loading: false,
    page: 1,
    dataLengh: 20
  }

  async componentDidMount() {
    await this.fetchData(this.state.page)
  }

  async fetchData(a) {
    this.setState({ loading: true })
    let response = await fetch(`http://localhost:8080/storie?page=${a}`)
    let json = await response.json()
    this.setState({ stories: json, loading: false })
  }

  async postVote(data, id) {
    const response = await fetch(`http://localhost:8080/stories/${id}/votes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response
  }

  async upDateState(newStories) {
    let data = this.state.page * 5 - 5
    this.setState({ stories: newStories.slice(data, data + 5) })
  }

  getStoriesComponentList(stories) {
    return stories.map((story) => (
      <Story
        key={story.id}
        story={story}
        vote={this.postVote.bind(this)}
        new={this.upDateState.bind(this)}
      />
    ))
  }

  getLoadingComponent() {
    return <div className="loader" />
  }

  async handleClick(page, pageSize) {
    await this.fetchData(pageSize)
    this.setState({ page: pageSize })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Very Good™️ Social News Site</h1>
        </header>
        <main>
          {this.state.page == 1 ? <h2>Top Stories</h2> : <h2>More Stories</h2>}
          {this.state.loading
            ? this.getLoadingComponent()
            : this.getStoriesComponentList(this.state.stories)}
          <div style={{ display: 'block', padding: 30 }}>
            <Pagination
              count={this.state.dataLengh}
              onChange={this.handleClick.bind(this)}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
            />
          </div>

          <AddStory getNew={this.upDateState.bind(this)} />
        </main>
      </div>
    )
  }
}

export default App
