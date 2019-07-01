import React, {Component} from 'react';
import {addRecipe} from "../../../actions/recipe.actions";
import {Button, Form, Input} from "antd";

class NewRecipes extends Component {
    state = {
        recipe: {},
        add: false
    };

    createRecipe = async () => {
        const {recipe} = this.state;
        this.setState({add: true});
        await addRecipe(recipe);
        this.setState({add: false});
        window.history.back();
    };

    render() {

        const {add, recipe} = this.state;
        if (add) {
            return ("Cadastrando receita....");
        }
            return (
                <Form onSubmit={()=> {this.createRecipe()}}>
                    <h5>Nome da Receita</h5>
                    <Form.Item>
                        <Input
                            value={recipe.title_recipe}
                            placeholder="Nome da Receita"
                            onChange={event => {
                                recipe.title_recipe = event.target.value;
                                this.setState({recipe})
                            }}
                            minLength="10"
                            required
                        />
                    </Form.Item>
                    <h5>Igredientes:</h5>
                    <Form.Item>
                        <Input.TextArea
                            rows="8"
                            value={recipe.ingredients}
                            placeholder="Ingredientes"
                            onChange={event => {
                                recipe.ingredients = event.target.value;
                                this.setState({recipe})
                            }}
                            minLength="10"
                            required
                        />
                    </Form.Item>
                    <h5>Mode de Preparo:</h5>
                    <Form.Item>
                        <Input.TextArea
                            rows="8"
                            value={recipe.mode_preparation}
                            placeholder="Modo de Preparo"
                            onChange={event => {
                                recipe.mode_preparation = event.target.value;
                                this.setState({recipe})
                            }}
                            minLength="10"
                            required
                        />
                    </Form.Item>
                    <Button onClick={() => window.history.back()}>Cancelar</Button>
                    <Button type="primary" htmlType="submit" >Cadastrar</Button>
                </Form>
            );

    }
}

export default NewRecipes;
