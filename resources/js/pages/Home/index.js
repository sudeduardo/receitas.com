import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import {checkMobile}  from "../../services/checkMobile"
import {BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRoute from "../../components/PrivateRoute";

import EditRecipe from "./EditRecipe"
import ListRecipes from "./ListRecipes"
import NewRecipe from "./NewRecipe"
import ShowRecipe from "./ShowRecipe"

import './style.less';
import {logout} from "../../actions/user.action";
import {connect} from "react-redux";

const { Header, Sider, Content } = Layout;
class Home extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const {name} = this.props.user.user;
        return (
            <Layout id={"home"}>
                <Sider
                    collapsed={this.state.collapsed}
                    className={"custom-sider"}
                    collapsedWidth={(checkMobile()?0:80)}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>Ver Receitas</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={()=>
                        {
                            this.props.logout();
                            this.props.history.push('/login')
                        }}>
                            <Icon type="logout" />
                            <span>Sair</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        Bem vindo : {name}
                    </Header>
                    <Content style={{
                        margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                    }}
                    >
                        <Router>
                            <Switch>
                                <PrivateRoute path="/" exact component={ListRecipes}/>
                                <PrivateRoute path="/nova" exact component={NewRecipe}/>
                                <PrivateRoute path="/editar/:id" exact component={EditRecipe}/>
                                <PrivateRoute path="/ver/:id" exact component={ShowRecipe}/>

                            </Switch>
                        </Router>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
const mapStateToProps = (state) => {
    return {user: state.User}
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)

