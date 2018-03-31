import React, {Component} from 'react'
import ArticleList from './components/article-list'
import Chart from './components/chart'
import UserForm from './components/user-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './app.css'


class App extends Component {
    state = {
        selected: null,
        from: undefined,
        to:undefined
    }

    render() {
        const { articles } = this.props;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        return (
            <div className="App">
                <div className="AppInner">
                  <div className="AppSelectionForm">
                    <UserForm />
                    <Select options = {options} value = {this.state.selected} onChange = {this.handleSelectChange} multi/>
                  </div>

                  <Chart articles = {articles} />
                  <div className="AppDayPicker">
                    <div>
                      <p>
                        {!from && !to && 'Please select the first day'}
                        {from && !to && 'Please select the last day'}
                        {from && to &&
                        `Selected from ${from.toLocaleDateString()}
                        to ${to.toLocaleDateString()}`}{' '}
                        {from && to && (
                          <button className="link" onClick={this.handleResetClick()}>
                            Reset
                          </button>
                        )}
                      </p>
                    </div>
                    <DayPicker
                      selectedDays={[from, { from, to }]}
                      modifiers={modifiers}
                      onDayClick={this.handleDayClick}
                    />
                  </div>

                </div>

                <ArticleList articles = {articles}/>
            </div>
        )
    }

    handleSelectChange = selected => this.setState({ selected });

    handleDayClick = (day) => {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range)
    };

    handleResetClick = () => () => {
      this.setState({from: undefined, to: undefined})
    }

}

export default App
