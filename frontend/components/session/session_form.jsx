import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        // this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    };

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-form">
                <div id="icecream">
                    <img src={window.login1URL} />
                </div>
                <div id="center-section">
                    <div id="thanks">Thanks for joining us here today!</div>
                    <div id="pleasethisthat">Please {this.props.formType} below!</div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="session-form-info">
                            <label id="username-label">username:
                                <input id="username" type="text" value={this.state.username} onChange={this.update('username')} />
                            </label>
                            <br/>
                            <label id="password-label">password:
                                <input id="password" type="text" value={this.state.password} onChange={this.update('password')} />
                            </label>
                        </div>
                        <div className="session-form-button">
                            <input type="submit" value={this.props.formType} />
                        </div>
                        <div>
                            <div id="or">~ Or ~</div> 
                            <div className="alt-session-form-button">{this.props.navLink}</div>
                            {this.renderErrors()}
                        </div>
                    </form>
                </div>
                <div id="shotglass">
                    <img src={window.login2URL} />
                </div>
            </div>
        );
    }
};

export default SessionForm;