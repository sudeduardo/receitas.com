import {
    Form,
    Icon,
    Input,
    Button,
    Alert
} from 'antd';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import './style.css';
import logo from '../../img/logo.png';

import {login} from "../../actions/user.action";
import { isAuthenticated } from "../../services/auth";

class Login extends Component {

    componentDidMount() {
        if(isAuthenticated()){
            this.props.history.push("/");
        }
    };

    componentWillUpdate(){
        if(isAuthenticated()){
            this.props.history.push("/");
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values);
            }
        });
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">

                <div id="wrapped">
                    <img src={logo} className='login-logo'></img>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{required: true, message: 'Por favor insira seu email!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="e-mail" type={'email'}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: 'Por favor insira sua senha!'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="Senha"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" icon="login" loading={this.props.user.isLoggedIn} htmlType="submit"
                                className="login-form-button">
                            Entrar
                        </Button>
                        {(this.props.user.error != "" &&  typeof this.props.user.error != "undefined") ?
                            <Alert message={this.props.user.error} type="error" showIcon closable /> : null}
                    </Form.Item>
                </div>
            </Form>
        );
    };
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(Login);

const mapStateToProps = (state) => {
    return {user: state.User}
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (values) => dispatch(login(values.email, values.password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm)
