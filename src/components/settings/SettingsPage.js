import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class SettingsPage extends React.Component {
    render(){
        const {url} = this.props.match
        return (
            <div className="jumbotron">
            <Link to={`${url}/create`} className='btn btn-primary'>add Telegram bot</Link><br/>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        state
    }

}
export default connect(mapStateToProps)(SettingsPage)