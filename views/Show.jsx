const React = require("react")

class Show extends React.Component {
    render() {
        const log = this.props.log
        return (
            <div>
                <h2>{`${log.title}`}</h2>
                <p>
                    {log.entry} <br />
                    {log.shipIsBroken ? "Ship is broken." : "Ship is fine."} 
                </p>
                <a href="/">Back to Home Page</a>
            </div>
        )
    }
}

module.exports = Show