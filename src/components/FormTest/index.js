import React from 'react'
import './index.css'
export default class FormTest extends React.Component {
    state = {
        name: 'aaa',
        sex: 'mail',
        city: 'beijing',
        hobby: [
            { value: 'basketball', name: '篮球' },
            { value: 'baseball', name: '棒球' },
            { value: 'football', name: '足球' },
            { value: 'movie', name: '看电影' },
            { value: 'music', name: '听音乐' },
            { value: 'others', name: '其它' },
        ],
        selectHobby: ['others']
    }
    // 生成爱好的多选框
    generateHobbyList = () => {
        return this.state.hobby.map((item, index) => (
            <label key={index}>
                <input
                    type="checkbox"
                    name="selectHobby"
                    value={item.value}
                    checked={this.state.selectHobby.includes(item.value)}
                    onChange={this.handleChangeValue}
                />
                {item.name}
            </label>
        ))
    }
    handleChangeValue = e => {
        let prop = e.target.name
        let value = e.target.value
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                value = [...this.state[prop], value]
            } else {
                value = this.state[prop].filter(item => item !== value)
            }
        }
        this.setState({
            [prop]: value
        })
    }
    render() {
        return (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChangeValue}
                    />
                </p>
                <p>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="femail"
                            checked={this.state.sex === 'femail'}
                            onChange={this.handleChangeValue}
                        />
                    女
                </label>
                    <label>
                        <input
                            type="radio"
                            name="sex"
                            value="mail"
                            checked={this.state.sex === 'mail'}
                            onChange={this.handleChangeValue}
                        />
                    男
                </label>
                </p>
                <p>
                    <select
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChangeValue}
                    >
                        <option value="beijing">北京</option>
                        <option value="tianjin">天津</option>
                        <option value="shanghai">上海</option>
                        <option value="chongqing">重庆</option>
                    </select>
                </p>
                <p>
                    {this.generateHobbyList()}
                </p>
                <button onClick={() => {
                    console.clear()
                    console.log(this.state)
                }}>展示结果</button>
            </div>
        )
    }
}