const React = require("react")

class Index extends React.Component {
    render() {
        const {logs} = this.props
        return(
            <div>
                <nav>
                    <a href="/new">Create New Log</a>
                </nav>
                <ol>
                    {
                        logs.map((log,i) => {
                            return(
                                <li key = {i}>
                                    <a href={`/${log._id}`}>{log.title}</a> <br />
                                    {
                                        log.shipIsBroken
                                        ?"Ship is broken"
                                        :"Ship is fine"
                                    }
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}

module.exports = Index