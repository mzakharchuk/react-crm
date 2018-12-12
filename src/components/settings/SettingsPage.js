import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom'
import * as botActions from '../../_actions/botActions'

class SettingsPage extends React.Component {

    componentDidMount(){
        this.props.actions.loadBots()
    }
    render(){
        const {url} = this.props.match
        return (
            <div className="jumbotron">
            <Link to={`${url}/create`} className='btn btn-primary'>add Telegram bot</Link><br/>
            <h2>Your boots</h2>
            {this.props.bots.map(item => {
                return <div key={item.name}>{item.name}</div>
            })}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        bots:state.bots
    }

}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(botActions,dispatch)
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SettingsPage)