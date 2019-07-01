import {List,Button} from 'antd';
import React, {Component} from 'react';
import {listRecipe, deleteRecipe} from "../../../actions/recipe.actions";
import {Link} from 'react-router-dom'

class ListRecipes extends Component {

    state = {
        load: true,
        recipes: []
    };

    loadRecipes = async (reload = false) => {
        if (reload) this.setState({load: true});
        const {recipes} = await listRecipe();
        this.setState({recipes, load: false});
    };

    componentDidMount = async () => {
        this.loadRecipes();
    };

    delete = async (id) => {
        let c = confirm("Excluir essa receita?")
        if (c) {
            deleteRecipe(id).then(() => {
                this.loadRecipes(true);
            })
        }
    };

    render() {

        const {recipes, load} = this.state;
        if (load) {
            return ('Carregando Receitas...');
        } else return (
            <div>
                <Link type={'primary'} to={'/nova'}>
                    Criar Nova Receita
                </Link>
                <List

                    itemLayout="horizontal"
                    dataSource={recipes}
                    renderItem={item => (
                        <List.Item actions={[<Link to={"/editar/" + item.id}>Editar</Link>,
                            <Link to={"/ver/" + item.id}>Ver</Link>, <a onClick={() => this.delete(item.id)}>Deletar</a>]}>
                            <div>{item.title_recipe}</div>
                        </List.Item>
                    )}
                />
            </div>

        );
    }
}

export default ListRecipes;
