import React, {Component} from 'react';
import {getRecipe} from "../../../actions/recipe.actions";
import {Button} from "antd";
import moment from 'moment';

class ShowRecipe extends Component {

    state = {
        id: null,
        recipe: null
    };

    componentDidMount = async () => {
        const {id} = this.props.match.params;
        const {data} = await getRecipe(id);
        this.setState({id, recipe:data});
    };

    render() {
        const {recipe} = this.state;
        if (recipe) {
            return (
                <div>
                    <h6>Nome da Receita:</h6>
                    <h4>
                        {recipe.title_recipe}
                    </h4>
                    <h6>Igredientes:</h6>
                    <p>
                        {
                            recipe.ingredients
                        }
                    </p>
                    <h6>Modo de Preparo:</h6>
                    <p>
                        {
                            recipe.mode_preparation
                        }
                    </p>
                    <p>Criando em {moment(recipe.created_at).format("DD/MM/YYYY hh:mm")}</p>
                    <p>Atualizado em {moment(recipe.updated_at).format("DD/MM/YYYY hh:mm")}</p>
                    <Button onClick={()=>window.history.back()} type="primary">Voltar</Button>
                </div>
            )

        } else {
            return "Carregando Receita..."
        }
    }
}

export default ShowRecipe;
